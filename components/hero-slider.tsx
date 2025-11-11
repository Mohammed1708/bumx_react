"use client"

import { useEffect, useState } from "react"

interface Slide {
  id: number
  image: string
  alt: string
}

const slides: Slide[] = [
  { id: 1, image: "/Banners/slider-1.jpg", alt: "BUMC Medical Center" },
  { id: 2, image: "/Banners/Paket All in One Vaksin Umrah_Banner Website 1920x900 PX.jpg", alt: "Paket Vaksin Umrah" },
  {
    id: 3,
    image: "/Banners/Project Ads Vaksin Influenza 3 dan 4 Strain_Banner Website (1920 x 900 px).jpg",
    alt: "Vaksin Influenza",
  },
  { id: 4, image: "/Banners/Banner Website BUMC paket vaksin umrah austus.jpg", alt: "Paket Vaksin Umrah" },
  {
    id: 5,
    image: "/Banners/Paket Vaksin Pekerja Migran Indonesia_Banner Website 1920 x 900.jpg",
    alt: "Paket Vaksin Pekerja Migran",
  },
  {
    id: 6,
    image: "/Banners/ADS VIT C & IMUN BOOSTER_1920 x 900 px.jpg",
    alt: "Paket Vaksin Pekerja Migran",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-auto object-contain object-top"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? "bg-gray-600" : "bg-red-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
