"use client"

import { COLORS } from "@/lib/constants"
import { X } from "lucide-react"

interface ServiceDetail {
  id: number
  title: string
  description: string
  fullContent: string
  layananTersedia: string[]
  benefits?: string
  procedure?: string[]
  tagline?: string
}

const serviceDetails: Record<number, ServiceDetail> = {
  1: {
    id: 1,
    title: "Dokter Umum",
    description: "Menangani pemeriksaan dasar, memberikan diagnosis awal, serta rujukan sesuai kebutuhan Anda.",
    fullContent:
      "Layanan dokter umum di BUMC menjadi langkah awal dalam menjaga kesehatan Anda. Dokter umum kami menangani pemeriksaan dasar, memberikan diagnosis awal, dan menentukan langkah perawatan atau rujukan ke dokter spesialis bila dibutuhkan.",
    layananTersedia: [
      "Konsultasi kesehatan umum",
      "Pemeriksaan fisik rutin",
      "Penanganan penyakit ringan (demam, flu, batuk, alergi, infeksi kulit, dll.)",
      "Pemeriksaan tekanan darah dan gula darah",
      "Pemberian resep dan evaluasi pengobatan",
      "Edukasi gaya hidup sehat",
    ],
    benefits: "Pemeriksaan oleh dokter umum membantu mendeteksi masalah kesehatan sejak dini dan memberikan solusi tepat sebelum kondisi berkembang menjadi lebih serius.",
    procedure: [
      "Regitsrasi di resepsionis",
      "Pemeriksaan dan wawancara medis",
      "Pemeriksaan fisik dan penunjang (jika diperlukan)",
      "Diagnosis & pemberian resep / rujukan",
    ],
    tagline: "Jaga kesehatan Anda mulai dari langkah pertama. Konsultasikan kondisi Anda bersama dokter umum BUMC hari ini."
  },
  2: {
    id: 2,
    title: "Dokter Spesialis Penyakit Dalam",
    description:
      "Layanan mendalam untuk berbagai kondisi kesehatan organ dalam, dengan pendekatan holistik dan berstandar internasional.",
    fullContent:
      "Layanan spesialis penyakit dalam di BUMC memberikan penanganan komprehensif terhadap gangguan organ dalam seperti jantung, ginjal, hati, paru, dan sistem pencernaan.",
    layananTersedia: [
      "Konsultasi penyakit kronis (diabetes, hipertensi, kolesterol, asam urat, dll.)",
      "Evaluasi fungsi organ dalam",
      "Pemeriksaan lanjutan dan interpretasi hasil laboratorium",
      "Penanganan infeksi sistemik dan autoimun",
      "Rencana terapi jangka panjang",
    ],
    benefits: "Dengan pendekatan holistik dan teknologi medis mutakhir, dokter spesialis BUMC membantu Anda menjaga kestabilan kondisi tubuh dan mencegah komplikasi penyakit kronis.",
    procedure: [
      "Pemeriksaan awal dan wawancara medis mendalam",
      "Pemeriksaan laboratorium dan radiologi (bila dibutuhkan)",
      "Konsultasi hasil & rencana perawatan personal",
    ],
    tagline: "Percayakan kesehatan organ dalam kamu pada dokter spesialis penyakit dalam berstandar internasional di BUMC."
  },
  3: {
    id: 3,
    title: "Dokter Gigi",
    description: "Perawatan gigi dan mulut menyeluruh, mulai dari pemeriksaan rutin hingga tindakan perawatan estetik.",
    fullContent:
      "BUMC menyediakan layanan perawatan gigi dan mulut menyeluruh, baik untuk kebutuhan kesehatan maupun estetika.",
    layananTersedia: [
      "Pemeriksaan dan pembersihan gigi rutin",
      "Penambalan gigi",
      "Pencabutan gigi",
      "Perawatan saluran akar",
      "Scaling & polishing",
      "Perawatan gigi anak",
    ],
    benefits: "Kesehatan gigi dan mulut yang terjaga mendukung kesehatan tubuh secara keseluruhan serta meningkatkan kepercayaan diri.",
    procedure: [
      "Pemeriksaan awal dan konsultasi",
      "Penentuan rencana tindakan",
      "Pelaksanaan perawatan dan kontrol berkala",
    ],
    tagline: "Dapatkan senyum sehat dan percaya diri bersama dokter gigi profesional BUMC."
  },
  4: {
    id: 4,
    title: "Radiologi",
    description: "Didukung teknologi pencitraan modern untuk menunjang akurasi diagnosis dan perencanaan terapi.",
    fullContent:
      "Layanan radiologi BUMC dilengkapi dengan teknologi pencitraan modern untuk membantu dokter menegakkan diagnosis secara akurat dan cepat.",
    layananTersedia: [
      "Rontgen (X-ray)",
      "Pemeriksaan penunjang diagnosis penyakit organ dalam",
    ],
    benefits: "Citra medis yang akurat menjadi dasar utama dalam menentukan terapi yang tepat dan efektif.",
    procedure: [
      "Rujukan dari dokter pemeriksa",
      "Pelaksanaan pemeriksaan radiologi",
      "Pembacaan hasil oleh dokter radiologi",
      "Penjelasan hasil kepada pasien",
    ],
    tagline: "Dukung diagnosis Anda dengan teknologi radiologi modern di BUMC."
  },
  5: {
    id: 5,
    title: "Booster & Vaksinasi",
    description: "Lindungi diri dan keluarga dari berbagai penyakit dengan layanan vaksinasi lengkap sesuai kebutuhan.",
    fullContent:
      "BUMC menyediakan layanan vaksinasi lengkap untuk melindungi Anda dan keluarga dari berbagai penyakit menular.",
    benefits: "Vaksinasi membantu meningkatkan daya tahan tubuh dan mencegah penularan penyakit, terutama saat bepergian atau beraktivitas di lingkungan padat.", 
    layananTersedia: [
      "Vaksin Meningitis",
      "Vaksin Polio",
      "Vaksin Influenza Tipe 3 Strain",
      "Vaksin Influenza Tipe 4 Strain",
      "Vitamin C & Imun Booster",
    ],
    procedure: [
      "Konsultasi awal dengan tenaga medis",
      "Pemeriksaan kondisi tubuh",
      "Pemberian vaksin sesuai jadwal",
      "Observasi pasca vaksin",
    ],
  },
  6: {
    id: 6,
    title: "Layanan Corporate",
    description:
      "Program kesehatan terintegrasi untuk perusahaan, mulai dari vaksinasi karyawan hingga medical check up berkala.",
    fullContent:
      "Kami menyediakan paket kesehatan khusus untuk perusahaan dengan program yang dapat disesuaikan sesuai kebutuhan organisasi Anda. Dari vaksinasi massal hingga medical check up berkala, semua ditangani profesional.",
    layananTersedia: [
      "Program vaksinasi karyawan",
      "Medical check up berkala",
      "Konsultasi kesehatan korporat",
      "Laporan kesehatan karyawan",
      "Program promosi kesehatan di tempat kerja",
    ],
    benefits: "Layanan corporate kami membantu perusahaan menjaga kesehatan karyawan, meningkatkan produktivitas, dan menciptakan lingkungan kerja yang sehat.",
    procedure: [
      "Regitsrasu di resepsionis",
      "Pemeriksaan dan wawancara medis",
      "Pemeriksaan fisik dan penunjang (jika diperlukan)",
      "Diagnosis & pemberian resep / rujukan",
    ],
    tagline: "Tingkatkan kesejahteraan karyawan dan produktivitas perusahaan Anda dengan layanan corporate dari BUMC."
  },
  7: {
    id: 7,
    title: "Medical Check Up",
    description:
      "Pemeriksaan kesehatan menyeluruh dengan paket yang dapat disesuaikan, untuk deteksi dini dan pencegahan penyakit.",
    fullContent:
      "Pemeriksaan kesehatan menyeluruh yang bertujuan mendeteksi risiko penyakit sejak dini agar dapat ditangani tepat waktu.",
    layananTersedia: [
      "Pemeriksaan fisik umum",
      "Tes darah lengkap",
      "Pemeriksaan fungsi organ",
      "Pemeriksaan radiologi dan laboratorium",
      "Paket pemeriksaan sesuai kebutuhan (individu, pendidikan, pranikah, korporasi, dll.)",
    ],
    benefits: "Deteksi dini menjadi kunci untuk mencegah penyakit serius dan menjaga kualitas hidup.",
    procedure: [
      "Pemilihan paket MCU",
      "Pemeriksaan fisik & penunjang",
      "Evaluasi hasil & konsultasi dengan dokter",
    ],
    tagline: "Cegah sebelum terlambat. Lakukan Medical Check Up rutin di BUMC."
  },
  8: {
    id: 8,
    title: "Layanan Homecare",
    description:
      "Kenyamanan perawatan kesehatan langsung di rumah Anda, dengan tenaga medis profesional dan protokol keamanan ketat.",
    fullContent:
      "BUMC menghadirkan kenyamanan layanan kesehatan langsung di rumah Anda, dengan tenaga medis profesional dan standar keamanan tinggi.",
    layananTersedia: [
      "Kunjungan dokter dan perawat ke rumah",
      "Pemberian infus, perawatan luka, dan observasi medis",
      "Vaksinasi dan vitamin di rumah",
    ],
    benefits: "Homecare memudahkan pasien dengan mobilitas terbatas untuk tetap mendapatkan pelayanan medis tanpa harus datang ke klinik.",
    procedure: [
      "Pemesanan layanan homecare",
      "Konfirmasi jadwal dan tenaga medis",
      "Pelaksanaan perawatan di rumah",
      "Monitoring hasil dan tindak lanjut",
    ],
    tagline: "Nikmati perawatan medis profesional tanpa keluar rumah bersama layanan Homecare BUMC."
  },
  9: {
    id: 9,
    title: "Layanan In House Clinic",
    description:
      "Sistem pelayanan yang terintegrasi untuk menjaga kesehatan karyawan setiap hari. Perusahaan dapat menciptakan lingkungan kerja yang lebih sehat.",
    fullContent:
      "BUMC menyediakan sistem layanan kesehatan terintegrasi di dalam perusahaan untuk menjaga kesehatan karyawan setiap hari.",
    layananTersedia: [
      "Pemeriksaan dan pengobatan ringan di tempat kerja",
      "Vaksinasi karyawan (Influenza 3 Strain & Influenza 4 Strain)",
      "Vitamin C & Imun Booster",
      "Medical Check Up berkala",
      "Drug Test",
      "Edukasi kesehatan di tempat kerja",
    ],
    benefits: "In House Clinic membantu perusahaan menciptakan lingkungan kerja yang sehat, responsif terhadap kondisi darurat, serta meningkatkan kesejahteraan karyawan.",
    procedure: [
      "Regitsrasi di resepsionis",
      "Pemeriksaan dan wawancara medis",
      "Pemeriksaan fisik dan penunjang (jika diperlukan)",
      "Diagnosis & pemberian resep / rujukan",
    ],
    tagline: "Wujudkan lingkungan kerja yang sehat dan produktif bersama In House Clinic BUMC"
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
                Layanan Tersedia:
              </h3>
              <ul className="space-y-3">
                {service.layananTersedia.map((benefit, index) => (
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

            {/* Benefit */}
            <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>
                Pentingnya {service.title}:
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{service.benefits}</p>

            {/* Procedure */}
            {service.procedure && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cara Menggunakan Layanan:</h4>
                <div className="space-y-1">
                  {service.procedure.map((step, index) => (
                    <p key={index} className="text-gray-700">
                      {index + 1}. {step}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Tagline */}
            {/* Tagline */}
            <div className="pt-4">
              <div
                className="w-full rounded-lg py-3 px-6  font-semibold text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                {service.tagline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
