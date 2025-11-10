import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import HeroSlider from "@/components/hero-slider"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import ServicesSection from "@/components/services-section"

export const metadata = {
  title: "BUMC - Medical Center Terpercaya",
  description: "Binawan University Medical Center - Pusat layanan kesehatan terpercaya dengan standar internasional",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ServicesSection />
      <Footer />
      <FloatingButtons />
    </>
  )
}
