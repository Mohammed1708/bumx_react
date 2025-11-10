"use client"

import { useState } from "react"
import { COLORS } from "@/lib/constants"
import ServiceModal from "./service-modal"
import { useModal } from "@/lib/modal-context"

interface Service {
  id: number
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Dokter Umum",
    description: "Menangani pemeriksaan dasar, memberikan diagnosis awal, serta rujukan sesuai kebutuhan Anda.",
    icon: "/icons/du.png",
  },
  {
    id: 2,
    title: "Dokter Spesialis Penyakit Dalam",
    description:
      "Layanan mendalam untuk berbagai kondisi kesehatan organ dalam, dengan pendekatan holistik dan berstandar internasional.",
    icon: "/icons/specialis.png",
  },
  {
    id: 3,
    title: "Dokter Gigi",
    description: "Perawatan gigi dan mulut menyeluruh, mulai dari pemeriksaan rutin hingga tindakan perawatan estetik.",
    icon: "/icons/gigi.png",
  },
  {
    id: 4,
    title: "Radiologi",
    description: "Didukung teknologi pencitraan modern untuk menunjang akurasi diagnosis dan perencanaan terapi.",
    icon: "/icons/radiologi.png",
  },
  {
    id: 5,
    title: "Booster & Vaksinasi",
    description: "Lindungi diri dan keluarga dari berbagai penyakit dengan layanan vaksinasi lengkap sesuai kebutuhan.",
    icon: "/icons/booster.png",
  },
  {
    id: 6,
    title: "Layanan Corporate",
    description:
      "Program kesehatan terintegrasi untuk perusahaan, mulai dari vaksinasi karyawan hingga medical check up berkala.",
    icon: "/icons/corporate.png",
  },
  {
    id: 7,
    title: "Medical Check Up",
    description:
      "Pemeriksaan kesehatan menyeluruh dengan paket yang dapat disesuaikan, untuk deteksi dini dan pencegahan penyakit.",
    icon: "/icons/mcu.png",
  },
  {
    id: 8,
    title: "Layanan Homecare",
    description:
      "Kenyamanan perawatan kesehatan langsung di rumah Anda, dengan tenaga medis profesional dan protokol keamanan ketat.",
    icon: "/icons/homecare.png",
  },
  {
    id: 9,
    title: "Layanan In House Clinic",
    description:
      "Sistem pelayanan yang terintegrasi untuk menjaga kesehatan karyawan setiap hari. Perusahaan dapat menciptakan lingkungan kerja yang lebih sehat.",
    icon: "/icons/homeservice.png",
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const { setIsModalOpen } = useModal()

  const handleOpenModal = (serviceId: number) => {
    setSelectedService(serviceId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Layanan kesehatan komprehensif untuk seluruh keluarga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-xl border-2 border-gray-100 hover:border-red-200 transition-all hover:shadow-lg flex flex-col h-full"
              >
                <img src={service.icon || "/placeholder.svg"} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: COLORS.foreground }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-pretty text-center mb-6 flex-grow">{service.description}</p>
                <button
                  onClick={() => handleOpenModal(service.id)}
                  className="w-full py-3 rounded-lg font-semibold transition-all text-white hover:opacity-90"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal isOpen={selectedService !== null} serviceId={selectedService} onClose={handleCloseModal} />
    </>
  )
}
