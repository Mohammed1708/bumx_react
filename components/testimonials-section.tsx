import { COLORS } from "@/lib/constants"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Haykal Kamil",
    image: "/Testimonial/Haykal-Kamil-Founder-ZM.jpeg",
    content:
      "Home service-nya praktis banget, protokol kesehatannya ketat, dan hasilnya langsung beres di hari yang sama. Terima kasih, BUMC!",
    rating: 5,
  },
  {
    id: 2,
    name: "Tantri Namirah",
    image: "/Testimonial/Tantri namirah (1).jpeg",
    content:
      "Karena hari ini kami harus ke luar kota, senang sekali bisa vaksinasi di rumah. Prokesnya super ketat. Makasih BUMC!",
    rating: 5,
  },
  {
    id: 3,
    name: "Wanda Hamidah",
    image: "/Testimonial/Wanda-Hamidah-3625454500.webp",
    content:
      "Cobain home service untuk vitamin injection dari BUMC—praktis, cepat, dan bikin badan lebih fit. Love it!",
    rating: 5,
  },
  {
    id: 4,
    name: "Cindercella",
    image: "/Testimonial/Cindercella.jpeg",
    content:
      "Aku sekeluarga baru aja swab PCR plus immune boost bareng BUMC. Home service-nya profesional dan super higienis. Thank you so much, BUMC!",
    rating: 5,
  },
  {
    id: 5,
    name: "Nirina Zubir",
    image: "/Testimonial/Nirina Zubir.jpeg",
    content: "Sebelum kerjaan luar kota, aku di-swab dulu sama tim BUMC. Cepat, rapi, dan bikin tenang!",
    rating: 5,
  },
  {
    id: 6,
    name: "Wiwi Widia",
    image: "/abstract-profile.png",
    content:
      "Pelayanannya top! Staf dan dokternya ramah banget. Waktu saya sakit tinggal booking, datang tanpa antre, dan fasilitasnya bersih serta wangi. Recommended!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Testimoni Pasien
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Kepercayaan dan kepuasan pasien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-8 rounded-xl shadow-lg" style={{ backgroundColor: COLORS.muted }}>
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                />
                <h4 className="font-semibold" style={{ color: COLORS.foreground }}>
                  {testimonial.name}
                </h4>
              </div>
              <p className="text-gray-600 mb-4 text-pretty">{testimonial.content}</p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
