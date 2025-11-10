"use client"

import { COLORS } from "@/lib/constants"
import { X } from "lucide-react"

interface ServiceDetail {
  id: number
  title: string
  description: string
  fullContent: string
  benefits: string[]
  procedure?: string
}

const serviceDetails: Record<number, ServiceDetail> = {
  1: {
    id: 1,
    title: "Dokter Umum",
    description: "Menangani pemeriksaan dasar, memberikan diagnosis awal, serta rujukan sesuai kebutuhan Anda.",
    fullContent:
      "Layanan Dokter Umum kami memberikan pelayanan kesehatan dasar yang komprehensif untuk seluruh keluarga. Dokter kami berpengalaman dalam menangani berbagai keluhan kesehatan umum dan memberikan diagnosis yang akurat.",
    benefits: [
      "Pemeriksaan kesehatan menyeluruh",
      "Diagnosis dan penanganan penyakit umum",
      "Rujukan ke spesialis jika diperlukan",
      "Konsultasi kesehatan preventif",
      "Penerbitan surat rujukan dan resep",
    ],
    procedure: "Kunjungan langsung atau janji temu sesuai ketersediaan dokter.",
  },
  2: {
    id: 2,
    title: "Dokter Spesialis Penyakit Dalam",
    description:
      "Layanan mendalam untuk berbagai kondisi kesehatan organ dalam, dengan pendekatan holistik dan berstandar internasional.",
    fullContent:
      "Spesialis Penyakit Dalam kami menangani berbagai kondisi kesehatan organ dalam dengan menggunakan teknologi terkini dan standar perawatan internasional. Mereka berpengalaman dalam mengelola penyakit kronis dan akut.",
    benefits: [
      "Penanganan penyakit kronis (diabetes, hipertensi, dll)",
      "Diagnosis dan manajemen infeksi",
      "Konsultasi penyakit jantung dan pembuluh darah",
      "Follow-up dan monitoring kesehatan",
      "Pendekatan holistik dan terkoordinasi",
    ],
    procedure: "Janji temu dengan dokter spesialis untuk pemeriksaan menyeluruh.",
  },
  3: {
    id: 3,
    title: "Dokter Gigi",
    description: "Perawatan gigi dan mulut menyeluruh, mulai dari pemeriksaan rutin hingga tindakan perawatan estetik.",
    fullContent:
      "Layanan kesehatan gigi kami mencakup pemeriksaan rutin, pembersihan gigi profesional, dan berbagai perawatan gigi termasuk perawatan estetik. Tim dokter gigi kami menggunakan peralatan modern dan teknik terbaru.",
    benefits: [
      "Pemeriksaan gigi dan oral rutin",
      "Pembersihan gigi profesional",
      "Perawatan karies dan gigi berlubang",
      "Perawatan estetik gigi",
      "Konsultasi kesehatan mulut",
    ],
    procedure: "Kunjungan untuk pemeriksaan atau perawatan sesuai kebutuhan.",
  },
  4: {
    id: 4,
    title: "Radiologi",
    description: "Didukung teknologi pencitraan modern untuk menunjang akurasi diagnosis dan perencanaan terapi.",
    fullContent:
      "Departemen Radiologi kami dilengkapi dengan peralatan pencitraan canggih termasuk X-ray digital dan ultrasound berkualitas tinggi. Teknisi dan radiolog kami terlatih untuk memberikan hasil yang akurat.",
    benefits: [
      "X-ray digital berkualitas tinggi",
      "Pemeriksaan ultrasound lengkap",
      "Interpretasi citra profesional",
      "Laporan hasil yang detail",
      "Konsultasi dengan dokter spesialis radiologi",
    ],
    procedure: "Pemeriksaan sesuai rujukan dokter atau janji temu khusus.",
  },
  5: {
    id: 5,
    title: "Booster & Vaksinasi",
    description: "Lindungi diri dan keluarga dari berbagai penyakit dengan layanan vaksinasi lengkap sesuai kebutuhan.",
    fullContent:
      "Program vaksinasi kami dirancang untuk melindungi Anda dan keluarga dari berbagai penyakit menular. Kami menyediakan vaksin lengkap sesuai rekomendasi WHO dan Kementerian Kesehatan dengan harga terjangkau.",
    benefits: [
      "Vaksin anak lengkap sesuai jadwal imunisasi",
      "Vaksin dewasa dan booster",
      "Vaksin perjalanan dan khusus",
      "Konsultasi kesehatan vaksinasi",
      "Program vaksinasi keluarga",
    ],
    procedure: "Janji temu untuk sesi vaksinasi tanpa perlu tunggu lama.",
  },
  6: {
    id: 6,
    title: "Layanan Corporate",
    description:
      "Program kesehatan terintegrasi untuk perusahaan, mulai dari vaksinasi karyawan hingga medical check up berkala.",
    fullContent:
      "Kami menyediakan paket kesehatan khusus untuk perusahaan dengan program yang dapat disesuaikan sesuai kebutuhan organisasi Anda. Dari vaksinasi massal hingga medical check up berkala, semua ditangani profesional.",
    benefits: [
      "Program vaksinasi karyawan",
      "Medical check up berkala",
      "Konsultasi kesehatan korporat",
      "Laporan kesehatan karyawan",
      "Program promosi kesehatan di tempat kerja",
    ],
    procedure: "Hubungi tim corporate kami untuk diskusi paket kesehatan.",
  },
  7: {
    id: 7,
    title: "Medical Check Up",
    description:
      "Pemeriksaan kesehatan menyeluruh dengan paket yang dapat disesuaikan, untuk deteksi dini dan pencegahan penyakit.",
    fullContent:
      "Program Medical Check Up kami dirancang untuk deteksi dini penyakit dan promosi kesehatan preventif. Dengan berbagai paket yang dapat disesuaikan, Anda dapat memilih sesuai kebutuhan dan usia.",
    benefits: [
      "Pemeriksaan fisik lengkap",
      "Laboratorium darah lengkap",
      "EKG dan pemeriksaan jantung",
      "Konsultasi dengan dokter",
      "Laporan hasil detail dengan saran kesehatan",
    ],
    procedure: "Daftar paket MCU yang sesuai dan lakukan pemeriksaan.",
  },
  8: {
    id: 8,
    title: "Layanan Homecare",
    description:
      "Kenyamanan perawatan kesehatan langsung di rumah Anda, dengan tenaga medis profesional dan protokol keamanan ketat.",
    fullContent:
      "Layanan Homecare kami menghadirkan tenaga medis profesional langsung ke rumah Anda untuk memberikan perawatan berkualitas dengan kenyamanan maksimal. Ideal untuk pasien yang kesulitan bepergian atau memerlukan perawatan berkelanjutan.",
    benefits: [
      "Pemeriksaan kesehatan di rumah",
      "Perawatan luka dan injeksi",
      "Monitoring kesehatan berkelanjutan",
      "Konsultasi medis langsung",
      "Protokol keamanan dan sterilisasi ketat",
    ],
    procedure: "Hubungi kami untuk mengatur jadwal homecare sesuai kebutuhan.",
  },
  9: {
    id: 9,
    title: "Layanan In House Clinic",
    description:
      "Sistem pelayanan yang terintegrasi untuk menjaga kesehatan karyawan setiap hari. Perusahaan dapat menciptakan lingkungan kerja yang lebih sehat.",
    fullContent:
      "In House Clinic kami hadir di lokasi perusahaan Anda untuk memberikan layanan kesehatan terpadu kepada karyawan setiap hari. Dengan dokter dan perawat profesional, kami memastikan kesehatan tim Anda terjaga optimal.",
    benefits: [
      "Klinik di lokasi perusahaan",
      "Pemeriksaan kesehatan rutin karyawan",
      "Penanganan kasus darurat di tempat kerja",
      "Program kesehatan preventif",
      "Meningkatkan produktivitas dan kesejahteraan karyawan",
    ],
    procedure: "Diskusi kebutuhan in house clinic dengan tim kami.",
  },
}

interface ServiceModalProps {
  isOpen: boolean
  serviceId: number | null
  onClose: () => void
}

export default function ServiceModal({ isOpen, serviceId, onClose }: ServiceModalProps) {
  if (!isOpen || !serviceId || !serviceDetails[serviceId]) return null

  const service = serviceDetails[serviceId]

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[75vh] overflow-y-auto">
          {/* Header */}
          <div className="relative p-8 text-white" style={{ backgroundColor: COLORS.primary }}>
            <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-opacity-80 transition-all">
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold pr-8">{service.title}</h2>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">{service.fullContent}</p>

            {/* Benefits Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>
                Manfaat Layanan:
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-semibold"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      ✓
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure */}
            {service.procedure && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cara Menggunakan Layanan:</h4>
                <p className="text-gray-700">{service.procedure}</p>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={`https://wa.me/62816100403?text=Saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                  service.title,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-lg text-white font-semibold text-center transition-all hover:opacity-90"
                style={{ backgroundColor: COLORS.primary }}
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
