import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import DoctorSchedule from "@/components/doctor-schedule"
import FAQSection from "@/components/faq-section"
import { COLORS } from "@/lib/constants"
import { Clock, ShieldAlert, HandshakeIcon } from "lucide-react"

export const metadata = {
  title: "Informasi - BUMC Medical Center",
  description: "Jadwal dokter, fasilitas, dan informasi penting tentang BUMC Medical Center",
}

const doctorData = [
  {
    title: "Dokter Spesialis Penyakit Dalam",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Pemeriksaan.png",
    doctors: [
      {
        id: 1,
        name: "dr. Nabila Hasan, Sp PD",
        specialization: "Spesialis Penyakit Dalam",
        image: "/Doctor/dr Nabila Hasan, Sp PD.jpg",
        schedule: "On Call - Sesuai Perjanjian",
      },
    ],
  },
  {
    title: "Dokter Spesialis Radiologi",
    icon: "/icons/Icon Fasilitas BUMC_Lab Radiologi.png",
    doctors: [
      {
        id: 2,
        name: "dr Marsha Ruthy Darmawan, Sp Rad",
        specialization: "Spesialis Radiologi",
        image: "/Doctor/dr Marsha .png",
        schedule: "Jumat - 08:00 - 12:00",
      },
    ],
  },
  {
    title: "Dokter Umum",
    icon: "/icons/Icon Fasilitas BUMC_Resepsionis.png",
    doctors: [
      {
        id: 3,
        name: "Dr. Fajri Nova",
        specialization: "Dokter Umum",
        image: "/Doctor/dr Fajri Nova.jpg",
        schedule: "Senin - Jumat: 09:00 - 17:00\nSabtu: 09:00 - 14:00",
      },
      {
        id: 4,
        name: "dr. Juni Catur Wulandari",
        specialization: "Dokter Umum",
        image: "/Doctor/dr Juni Catur Wulandari.jpg",
        schedule: "Senin - Jumat: 09:00 - 17:00\nSabtu: 09:00 - 14:00",
      },
    ],
  },
  {
    title: "Dokter Gigi",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Farmasi.png",
    doctors: [
      {
        id: 5,
        name: "drg. Syifa Al Qushoyyi",
        specialization: "Dokter Gigi",
        image: "/Doctor/drg Syifa Al Qushoyyi 2.JPEG",
        schedule: "Senin & Rabu - 09:00 - 14:00",
      },
      {
        id: 6,
        name: "drg. Aninda Puspa Hapsari",
        specialization: "Dokter Gigi",
        image: "/Doctor/drg Aninda Puspa Hapsari.JPG",
        schedule: "Selasa, Kamis, Jum'at - 09:00 - 14:00",
      },
      {
        id: 7,
        name: "drg. Haniyah Kamal",
        specialization: "Dokter Gigi",
        image: "/Doctor/dr haniyah.jpg",
        schedule: "Sabtu - 09:00 - 14:00",
      },
    ],
  },
]

const facilities = [
  {
    title: "Ruang Pemeriksaan",
    description: "Nyaman dan higienis untuk mendukung konsultasi serta pemeriksaan medis yang optimal.",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Pemeriksaan.png",
  },
  {
    title: "Lab Radiologi",
    description: "Dilengkapi teknologi pencitraan modern untuk menunjang hasil diagnosis yang akurat.",
    icon: "/icons/Icon Fasilitas BUMC_Lab Radiologi.png",
  },
  {
    title: "Resepsionis",
    description: "Tim resepsionis ramah siap membantu setiap kebutuhan Anda sejak pertama datang.",
    icon: "/icons/Icon Fasilitas BUMC_Resepsionis.png",
  },
  {
    title: "Farmasi",
    description: "Tersedia farmasi lengkap dengan obat-obatan asli dan terjamin kualitasnya.",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Farmasi.png",
  },
  {
    title: "Ruang Sterilisasi",
    description: "Mengutamakan standar kebersihan tinggi demi keamanan setiap prosedur medis.",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Sterilisasi.png",
  },
  {
    title: "Ruang Tunggu",
    description: "Area tunggu yang tenang, nyaman, dan mendukung pengalaman kunjungan Anda.",
    icon: "/icons/Icon Fasilitas BUMC_Ruang Tunggu.png",
  },
]

const patientRights = [
  "Memperoleh informasi mengenai tata tertib dan peraturan yang berlaku di Klinik.",
  "Memperoleh informasi tentang hak dan kewajiban pasien.",
  "Memperoleh layanan yang manusiawi, adil, jujur dan tanpa diskriminasi.",
  "Memperoleh layanan kesehatan yang bermutu sesuai dengan standar profesi.",
  "Memperoleh layanan yang efektif sehingga pasien terhindar dari kerugian fisik dan materi.",
  "Mengajukan pengaduan atas kualitas pelayanan yang didapatkan.",
  "Memilih dokter sesuai dengan peraturan yang berlaku di Klinik.",
  "Mendapatkan privasi dan kerahasiaan penyakit yang diderita termasuk data-data medisnya.",
]

const patientObligations = [
  "Mematuhi peraturan yang berlaku di Klinik.",
  "Menggunakan fasilitas Klinik secara bertanggung jawab.",
  "Menghormati hak-hak pasien lain, pengunjung, hak tenaga kesehatan dan petugas lainnya.",
  "Memberikan informasi yang jujur, lengkap dan akurat tentang masalah kesehatannya.",
  "Mematuhi rencana terapi yang direkomendasikan oleh tenaga kesehatan.",
  "Memberikan imbalan jasa atas pelayanan yang diterima.",
]

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara mendapatkan jadwal praktek dokter?",
    answer:
      "Silahkan periksa jadwal dokter pada halaman ini atau telepon ke 0816 100 403 untuk informasi jadwal praktek dokter spesialis dan umum.",
  },
  {
    id: 2,
    question: "Bagaimana cara reservasi untuk vaksin?",
    answer:
      "Kami melayani reservasi secara eksklusif melalui WhatsApp untuk memastikan respon cepat dan personal. Silakan kirim pesan ke 0816 100 403 dan tim kami akan segera membantu kebutuhan Anda.",
  },
  {
    id: 3,
    question: "Apakah melayani pasien tanpa reservasi?",
    answer:
      "Kami menyarankan untuk melakukan reservasi terlebih dahulu guna memastikan kenyamanan dan efisiensi pelayanan. Namun, kami tetap melayani pasien yang datang langsung sesuai ketersediaan jadwal.",
  },
  {
    id: 4,
    question: "Apakah tersedia layanan homecare atau kunjungan ke rumah?",
    answer:
      "Untuk beberapa jenis layanan tertentu, kami menyediakan layanan homecare dengan perjanjian terlebih dahulu. Silakan hubungi tim kami untuk informasi dan ketersediaan jadwal.",
  },
  {
    id: 5,
    question: "Jam operasional klinik ini kapan saja?",
    answer:
      "Klinik kami buka setiap hari Senin sampai Jum'at, pukul 08.00 – 17.00 WIB dan Sabtu pukul 08.00 - 14.00 WIB. Untuk informasi lebih lanjut mengenai jadwal dokter, silakan hubungi kami terlebih dahulu.",
  },
]

export default function InformationPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-300 to-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Informasi Penting
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Semua informasi yang Anda butuhkan tentang jadwal, fasilitas, dan hak-kewajiban pasien
          </p>
        </div>
      </section>

      {/* Doctor Schedule */}
      <section id="jadwal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Jadwal Dokter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Jadwal praktik dokter spesialis dan umum di BUMC Medical Center
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doctorData.map((category, index) => (
              <DoctorSchedule key={index} title={category.title} icon={category.icon} doctors={category.doctors} />
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: COLORS.secondary }}>
            <p className="text-lg text-gray-700">
              <Clock className="inline w-5 h-5 mr-2" style={{ color: COLORS.primary }} />
              Untuk membuat janji temu, silakan hubungi <strong>0816 100 403</strong> atau datang langsung ke BUMC
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Fasilitas Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Fasilitas lengkap dan modern untuk mendukung pelayanan kesehatan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg">
                <img
                  src={facility.icon || "/placeholder.svg"}
                  alt={facility.title}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-xl font-bold mb-3 text-center" style={{ color: COLORS.foreground }}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Rights & Obligations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Hak & Kewajiban Pasien
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Memahami hak dan kewajiban untuk pelayanan kesehatan yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rights */}
            <div
              className="p-8 rounded-xl shadow-lg"
              style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.secondary}` }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: COLORS.primary }}>
                <ShieldAlert className="w-8 h-8" />
                Hak Pasien
              </h3>
              <ul className="space-y-4">
                {patientRights.map((right, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-pretty">{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obligations */}
            <div
              className="p-8 rounded-xl shadow-lg"
              style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.secondary}` }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: COLORS.primary }}>
                <HandshakeIcon className="w-8 h-8" />
                Kewajiban Pasien
              </h3>
              <ul className="space-y-4">
                {patientObligations.map((obligation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm text-pretty">{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Pertanyaan yang sering diajukan tentang pelayanan BUMC Medical Center
            </p>
          </div>

          <FAQSection faqs={faqs} />
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
