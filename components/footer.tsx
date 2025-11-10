import Link from "next/link"
import { NAVIGATION_LINKS, CONTACT_INFO, COLORS } from "@/lib/constants"
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { SiFacebook, SiInstagram } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="py-16 text-white" style={{ backgroundColor: COLORS.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">BUMC</h3>
            <p className="text-green-100 mb-6">Your Health Is Our Priority</p>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Facebook"
              >
                <SiFacebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href={CONTACT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Instagram"
              >
                <SiInstagram className="w-6 h-6 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-100 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-green-100 text-sm">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-green-100">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-green-100">{CONTACT_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-green-100">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-green-100">{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Lokasi Kami</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126911.68562395991!2d106.79464443447533!3d-6.265021462337755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25537ac4cd3%3A0x30c0425b54c795fd!2sBUMC%20Kalibata%20-%20Binawan%20University%20Medical%20Center!5e0!3m2!1sen!2sid!4v1758598439301!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-green-100">&copy; 2025 BUMC Medical Center. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
