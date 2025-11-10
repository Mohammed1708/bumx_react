import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import { COLORS } from "@/lib/constants"
import { Eye, Target, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Profil Klinik - BUMC Medical Center",
  description: "Profil dan informasi lengkap tentang Binawan University Medical Center",
}

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-300 to-red-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Profil Klinik BUMC
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Mengenal lebih dekat Klinik Binawan terpercaya dengan komitmen pelayanan kesehatan terbaik
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-4xl md:text-5xl font-bold mb-12 text-balance"
            style={{ color: COLORS.primary }}
          >
            Tentang Kami
          </h2>
          <div className="space-y-6 text-gray-600 text-lg max-w-4xl mx-auto">
            <p className="text-pretty">
              Binawan University Medical Center (BUMC) hadir sebagai pusat layanan kesehatan terpercaya yang
              mengutamakan kenyamanan dan kemudahan akses. Didukung oleh tenaga medis profesional dan ramah, serta
              teknologi medis modern, kami memberikan pengalaman konsultasi dan perawatan yang cepat, efisien, dan
              menyeluruh.
            </p>
            <p className="text-pretty">
              BUMC menyediakan berbagai layanan, mulai dari vaksinasi dengan jaminan keaslian, layanan homecare &
              korporasi yang fleksibel, hingga klaim asuransi dan BPJS. Dengan lokasi strategis, area parkir luas, dan
              fasilitas yang nyaman, kami berkomitmen untuk menjadi solusi kesehatan terpercaya bagi seluruh keluarga
              Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Visi & Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="p-8 rounded-xl shadow-lg bg-white">
              <div
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Visi
              </h3>
              <p className="text-gray-600 text-lg text-pretty">
                Menjadi pusat pelayanan kesehatan akademis terdepan dengan standar internasional melalui pengembangan
                penelitian dan penerapan ilmu yang didapat dari Program Studi Universitas Binawan.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-xl shadow-lg bg-white">
              <div
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.accent }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: COLORS.primary }}>
                Misi
              </h3>
              <ul className="text-gray-600 text-lg space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-pretty">
                    Memberikan pelayanan kesehatan yang berkualitas dan terbaik dengan mengutamakan kesejahteraan dan
                    kesehatan pasien.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-pretty">
                    Mengembangkan dan menerapkan hasil penelitian ilmu kesehatan yang didapat dari program studi
                    Universitas Binawan.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-pretty">
                    Menjalin kemitraan dengan institusi kesehatan dan akademis dalam rangka pengembangan penelitian dan
                    pelayanan kesehatan.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-pretty">
                    Menyediakan lingkungan kerja yang aman, sehat, dan kondusif untuk mendukung kegiatan operasional dan
                    praktik klinik.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Struktur Organisasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-pretty">
            Tim kepemimpinan yang berpengalaman dalam bidang kesehatan
          </p>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Cetak Struktur Organisasi Klinik Utama BUMC A4_page-0001.jpg"
              alt="Struktur Organisasi Klinik Utama BUMC"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
