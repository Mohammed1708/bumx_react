import { COLORS } from "@/lib/constants"

interface WhyUsCard {
  id: number
  title: string
  description: string
  icon: string
}

const whyUsCards: WhyUsCard[] = [
  {
    id: 1,
    title: "Konsultasi Langsung",
    description: "Dengan tenaga medis profesional dan ramah",
    icon: "/icons/konsul.png",
  },
  {
    id: 2,
    title: "Teknologi Modern",
    description: "Peralatan medis canggih dan terkini",
    icon: "/icons/teknologi.png",
  },
  {
    id: 3,
    title: "Vaksinasi Terjamin",
    description: "Layanan vaksinasi yang terjamin keasliannya",
    icon: "/icons/vaksin.png",
  },
  {
    id: 4,
    title: "Fasilitas Nyaman",
    description: "Fasilitas nyaman & pelayanan terpercaya",
    icon: "/icons/fasilitas.png",
  },
  {
    id: 5,
    title: "Homeservice",
    description: "Homeservice & layanan korporasi fleksibel",
    icon: "/icons/homeservice.png",
  },
  {
    id: 6,
    title: "Lokasi Strategis",
    description: "Lokasi strategis dan parkir luas",
    icon: "/icons/lokasi.png",
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20" style={{ backgroundColor: COLORS.secondary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Mengapa Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan standar internasional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsCards.map((card) => (
            <div
              key={card.id}
              className="p-8 rounded-xl text-center transition-transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: COLORS.card }}
            >
              <img src={card.icon || "/placeholder.svg"} alt={card.title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.foreground }}>
                {card.title}
              </h3>
              <p className="text-gray-600 text-pretty">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
