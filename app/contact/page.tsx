import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import { COLORS, CONTACT_INFO } from "@/lib/constants"
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react"
import type { ReactNode } from "react"

export const metadata = {
  title: "Kontak Kami - BUMC Medical Center",
  description: "Hubungi BUMC Medical Center untuk konsultasi dan layanan kesehatan",
}

interface ContactCard {
  id: number
  title: string
  icon: typeof MapPin
  content: string | ReactNode
  href?: string
}

const contactCards: ContactCard[] = [
  {
    id: 1,
    title: "Alamat",
    icon: MapPin,
    content: CONTACT_INFO.address,
  },
  {
    id: 2,
    title: "Telepon",
    icon: Phone,
    content: (
      <>
        <strong>{CONTACT_INFO.phone}</strong>
        <br />
        <span>Hubungi dan komunikasi dengan customer service kami</span>
      </>
    ),
  },
  {
    id: 3,
    title: "Email",
    icon: Mail,
    content: (
      <>
        <strong>{CONTACT_INFO.email}</strong>
        <br />
        <span>Klik untuk mengirim email dan komunikasi dengan kami</span>
      </>
    ),
    href: `mailto:${CONTACT_INFO.email}?subject=Appointment%20Request`,
  },
  {
    id: 4,
    title: "WhatsApp",
    icon: MessageSquare,
    content: (
      <>
        <strong>{CONTACT_INFO.whatsapp}</strong>
        <br />
        <span>Chat langsung dengan customer service</span>
      </>
    ),
    href: CONTACT_INFO.whatsappLink,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-300 to-red-200 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
          Hubungi Kami
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty">
          Kami siap melayani Anda untuk konsultasi dan layanan kesehatan terbaik
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((card) => {
              const Icon = card.icon
              const Component = card.href ? "a" : "div"

              return (
                <Component
                  key={card.id}
                  href={card.href}
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-8 rounded-xl text-center transition-transform hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.secondary}` }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.content}</p>
                </Component>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-balance" style={{ color: COLORS.primary }}>
            Lokasi Kami
          </h2>

          <div className="mb-8 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0478806946!2d106.86080587573176!3d-6.257423261265576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25537ac4cd3%3A0x30c0425b54c795fd!2sBUMC%20Kalibata%20-%20Binawan%20University%20Medical%20Center!5e0!3m2!1sen!2sid!4v1758796965953!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-balance" style={{ color: COLORS.primary }}>
            Jam Operasional
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-pretty">
            Kami siap melayani Anda dengan jadwal yang fleksibel
          </p>
          <div className="p-8 rounded-xl shadow-lg bg-gray-100">
            <h3
              className="text-2xl font-bold mb-6 flex items-center justify-center gap-3"
              style={{ color: COLORS.primary }}
            >
              <Clock className="w-6 h-6" />
              Layanan Umum
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-700 max-w-md mx-auto">
                <span className="font-semibold">Senin - Jumat</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-gray-700 max-w-md mx-auto">
                <span className="font-semibold">Sabtu</span>
                <span>08:00 - 14:00</span>
              </div>
              <div className="flex justify-between text-gray-700 max-w-md mx-auto">
                <span className="font-semibold">Minggu</span>
                <span>Tutup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
