import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import { COLORS } from "@/lib/constants"
import { Star } from "lucide-react"

export const metadata = {
  title: "Promo & Paket - BUMC Medical Center",
  description: "Promosi dan paket layanan kesehatan terjangkau dari BUMC Medical Center",
}

interface PromoPackage {
  id: number
  name: string
  description: string
  price: string
  image: string
  benefits: string[]
  rating: number
}

const promoPackages: PromoPackage[] = [
  {
    id: 1,
    name: "Paket Vaksin Umrah",
    description: "Lengkap dan berstandar untuk persiapan ibadah umrah Anda",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/Paket All in One Vaksin Umrah_Banner Website 1920x900 PX.jpg",
    benefits: [
      "Vaksin Meningitis (sesuai kebutuhan)",
      "Vaksin Typhoid",
      "Konsultasi kesehatan",
      "Sertifikat vaksinasi",
    ],
    rating: 5,
  },
  {
    id: 2,
    name: "Paket Vaksin Influenza 3 & 4 Strain",
    description: "Perlindungan maksimal terhadap virus influenza terbaru",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/Project Ads Vaksin Influenza 3 dan 4 Strain_Banner Website (1920 x 900 px).jpg",
    benefits: [
      "Vaksin Influenza 3 Strain",
      "Vaksin Influenza 4 Strain",
      "Pemeriksaan kesehatan dasar",
      "Konsultasi dokter",
    ],
    rating: 5,
  },
  {
    id: 3,
    name: "Paket Vaksin Pekerja Migran",
    description: "Lengkap untuk semua kebutuhan perjalanan Anda ke luar negeri",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/Paket Vaksin Pekerja Migran Indonesia_Banner Website 1920 x 900.jpg",
    benefits: [
      "Vaksin yang diperlukan untuk bekerja di luar negeri",
      "Pemeriksaan kesehatan menyeluruh",
      "Konsultasi pra-keberangkatan",
      "Sertifikat kesehatan internasional",
    ],
    rating: 5,
  },
  {
    id: 4,
    name: "Paket Medical Check-Up Korporat",
    description: "Periksa kesehatan karyawan dengan paket hemat untuk perusahaan",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/",
    benefits: [
      "Pemeriksaan darah lengkap",
      "Pemeriksaan kesehatan fisik",
      "Radiologi dasar",
      "Laporan kesehatan detail",
    ],
    rating: 5,
  },
  {
    id: 5,
    name: "Paket Homecare Premium",
    description: "Layanan kesehatan dari rumah Anda dengan tenaga medis profesional",
    price: "Hubungi kami untuk harga terbaik",
    image: "/placeholder.svg",
    benefits: [
      "Kunjungan dokter ke rumah",
      "Pemeriksaan kesehatan lengkap",
      "Layanan injeksi vitamin",
      "Jaminan sterilisasi & kebersihan",
    ],
    rating: 5,
  },
  {
    id: 6,
    name: "Paket Vaksin Lengkap Anak",
    description: "Vaksin standar dan penunjang untuk kesehatan optimal anak Anda",
    price: "Hubungi kami untuk harga terbaik",
    image: "/placeholder.svg",
    benefits: [
      "Vaksin wajib sesuai jadwal",
      "Vaksin tambahan pilihan",
      "Monitoring pertumbuhan",
      "Konsultasi nutrisi anak",
    ],
    rating: 5,
  },
]

export default function PromoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-300 to-red-200 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
          Promo & Paket Layanan
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty">
          Nikmati berbagai paket kesehatan terjangkau dengan kualitas terbaik
        </p>
      </section>

      {/* Promo Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Paket Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Pilih paket yang sesuai dengan kebutuhan kesehatan Anda dan keluarga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promoPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 bg-white border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-balance" style={{ color: COLORS.primary }}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-pretty">{pkg.description}</p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: pkg.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                          style={{ backgroundColor: COLORS.primary }}
                        />
                        <span className="text-pretty">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="border-t pt-4">
                    <p className="text-center font-semibold text-gray-700 mb-4">{pkg.price}</p>
                    <a
                      href={`https://wa.me/62816100403?text=Saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 px-4 rounded-lg font-semibold transition-colors text-white"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Info */}
      <section className="py-20" style={{ backgroundColor: COLORS.secondary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
              Tanyakan Promo Spesial Lainnya
            </h2>
            <p className="text-gray-700 mb-8 text-pretty">
              Kami memiliki berbagai promosi dan paket khusus yang dapat disesuaikan dengan kebutuhan Anda. Hubungi tim
              kami untuk informasi lebih lanjut dan penawaran eksklusif!
            </p>
            <a
              href={`https://wa.me/62816100403?text=Halo%20BUMC%2C%20saya%20ingin%20menanyakan%20promosi%20spesial`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: COLORS.primary }}
            >
              Chat WhatsApp Kami
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="text-white font-bold">%</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                Harga Kompetitif
              </h4>
              <p className="text-gray-600 text-sm">Harga terjangkau dengan kualitas layanan terbaik</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                Fleksibel & Mudah
              </h4>
              <p className="text-gray-600 text-sm">Paket dapat disesuaikan dengan kebutuhan Anda</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="text-white font-bold">⭐</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                Kualitas Terjamin
              </h4>
              <p className="text-gray-600 text-sm">Layanan berstandar internasional dan terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
