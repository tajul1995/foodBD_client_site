"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const slides = [
  {
    title: "Delicious Grilled Food",
    subtitle: "Fresh • Juicy • Hot",
    image: "/images/grilled.jpg",
  },
  {
    title: "Sweet Desserts",
    subtitle: "Taste the Happiness",
    image: "/images/sweets.jpg",
  },
  {
    title: "Fresh Seafood",
    subtitle: "From Sea to Plate",
    image: "/images/seafood.jpg",
  },
]

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[70vh] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
