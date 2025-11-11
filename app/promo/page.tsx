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
    name: "PROMO Paket Hemat All in",
    description: "Lengkap dan berstandar untuk persiapan ibadah umrah Anda",
    price: "Rp.600.000,- ",
    image: "/promo/paket_umroh_600.jpg",
    benefits: [
      "Dapatkan FREE e-sertifikat internasional (e-ICV)",
      "Free merchandise eksklusif",
      "Mengurangi risiko penyakit berat & biaya perawatan",
      "Syarat perjalanan + mencegah penularan.",
      "Memberikan kekebalan jangka panjang (vaksin meningitis 3 tahun) & (vaksin polio 10 tahun)",
      "Menjadi syarat wajib untuk perjalanan Umrah & Haji"
    ],
    rating: 5,
  },
  {
    id: 2,
    name: "PROMO Paket Lengkap All In",
    description: "",
    price: "Rp.900.000,-",
    image: "/promo/paket_umroh_900.jpg",
    benefits: [
      "Dapatkan FREE e-sertifikat internasional (e-ICV)",
      "FREE merchandise eksklusif",
      "Mengurangi risiko penyakit berat & biaya perawatan",
      "Syarat perjalanan + mencegah penularan.",
      "Memberikan kekebalan jangka panjang (vaksin meningitis 3 tahun) & (vaksin polio 10 tahun)",
      "Menjadi syarat wajib untuk perjalanan umrah & haji"
    ],
    rating: 5,
  },
  {
    id: 3,
    name: "PROMO Vitamin C & Imun Booster",
    description: "",
    price: "Rp.300.000,-",
    image: "/promo/promo_vitc.jpg",
    benefits: [
      "Menguatkan daya tahan tubuh",
      "Menjaga kesehatan kulit dan memperlambat penuaan sel",
      "Membantu mengurangi lelah dan meningkatkan stamina",
      "Mempercepat proses pemulihan pasca sakit, aktivitas padat, atau stres",
    ],
    rating: 5,
  },
  {
    id: 4,
    name: "PROMO Vaksin Influenza ",
    description: "Periksa kesehatan karyawan dengan paket hemat untuk perusahaan",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/influenza.jpg",
    benefits: [
      "Mengurangi risiko terinfeksi flu yang bisa berkembang",
      "Tersedia 2 jenis (3 strain dan 4 strain)",
      "Penting untuk perjalanan",
      "Aman untuk anak-anak hingga orang dewasa",
      "Memberikan kekebalan selama ±1 tahun sesuai musim flu"
    ],
    rating: 5,
  },
  {
    id: 5,
    name: "PROMO Vaksin Influenza 4 Strain",
    description: "Layanan kesehatan dari rumah Anda dengan tenaga medis profesional",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/influenza.jpg",
    benefits: [
      "Mengurangi risiko terinfeksi flu yang bisa berkembang",
      "Penting untuk perjalanan",
      "Aman untuk anak-anak hingga orang dewasa",
      "Memberikan kekebalan selama ±1 tahun sesuai musim flu",
    ],
    rating: 5,
  },
  {
    id: 6,
    name: "PROMO Vaksin Pekerja Migran",
    description: "Vaksin standar dan penunjang untuk kesehatan optimal anak Anda",
    price: "Rp.250.000,-",
    image: "/promo/pekerja_migran.jpg",
    benefits: [
      "Perlindungan dari penyakit menular",
      "Mempercepat proses keberangkatan tanpa hambatan administratif",
      "Tubuh lebih sehat dan tetap fit untuk bekerja",
      "Mencegah penularan penyakit",
      "Investasi kesehatan jangka panjang",
      "Kekebalan tubuh lebih terjaga"
    ],
    rating: 5,
  },
  {
    id: 7,
    name: "PROMO Vaksin All In One",
    description: "",
    price: "Hubungi kami untuk harga terbaik",
    image: "/promo/vakin_all_in_one.jpg",
    benefits: [
      "Dapatkan FREE e-sertifikat internasional (e-ICV)",
      "FREE merchandise eksklusif",
      "Mengurangi risiko penyakit berat & biaya perawatan",
      "Syarat perjalanan + mencegah penularan",
      "Memberikan kekebalan jangka panjang (vaksin meningitis 3 tahun) & (vaksin polio 10 tahun)",
      "Menjadi syarat wajib untuk perjalanan Umrah & Haji",
      "Mengurangi risiko terinfeksi flu yang bisa berkembang",
      "Aman untuk anak-anak hingga orang dewasa",
      "Memberikan kekebalan selama ±1 tahun sesuai musim flu"
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
