"use client"

import { useEffect, useState } from "react"
import { MessageCircle, ChevronUp } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import { useModal } from "@/lib/modal-context"

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { isModalOpen } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isModalOpen) {
    return null
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`${CONTACT_INFO.whatsappLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 left-5 z-50 flex items-center gap-3 hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden md:inline-block bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
          Halo! Teman Sehat Minbu
          <br />
          Ada yang bisa kami bantu?
        </span>
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:animate-none">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "#A71C2E" }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  )
}
