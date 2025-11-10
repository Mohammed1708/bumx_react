import { COLORS } from "@/lib/constants"

const partners = [
  "/partner/IDI.png",
  "/partner/kemenkes.png",
  "/partner/Logo_Biofarma-removebg-preview.png",
  "/partner/Logo_Halodoc-removebg-preview (1).png",
  "/partner/MANDIRI INHEALTH.png",
  "/partner/abottt-removebg-preview.png",
  "/partner/Satu_Sehat_Logo-removebg-preview.png",
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20" style={{ backgroundColor: COLORS.secondary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Mitra Terpercaya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">Bekerja sama dengan institusi terkemuka</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...partners, ...partners].map((logo, index) => (
              <img
                key={index}
                src={logo || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
