"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/placeholder.svg?height=200&width=800",
    alt: "Ofertas especiales en frutos secos",
    title: "Frutos Secos Premium",
  },
  {
    src: "/placeholder.svg?height=200&width=800",
    alt: "Productos orgánicos y naturales",
    title: "Productos Orgánicos",
  },
  {
    src: "/placeholder.svg?height=200&width=800",
    alt: "Cereales y legumbres a granel",
    title: "Cereales y Legumbres",
  },
  {
    src: "/placeholder.svg?height=200&width=800",
    alt: "Productos veganos y sin TACC",
    title: "Vegano y Sin TACC",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  return (
    <div className="relative w-full h-32 md:h-48 bg-gray-200 overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-2xl font-bold text-center px-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white h-6 w-6 md:h-8 md:w-8 p-0"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white h-6 w-6 md:h-8 md:w-8 p-0"
        onClick={goToNext}
      >
        <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
