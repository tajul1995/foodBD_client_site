"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import image1 from '../../../public/grilledchicken.jpg'
import image2 from '../../../public/dessert.jpg'
import image3 from '../../../public/seafood.jpg'
import image4 from '../../../public/pizza.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const slides = [
  {
    title: "Delicious Grilled Food",
   subtitle: "Slow-grilled over open flames using traditional techniques to create deep, unforgettable flavors",
    image: image1,
  },
  {
    title: "Sweet Desserts",
   subtitle: "A delightful collection of desserts designed to satisfy your sweet cravings and lift your mood",
    image: image2,
  },
  {
    title: "Fresh Seafood",
   subtitle: "Freshly sourced seafood cooked with care to preserve natural taste, texture, and nutrition",
    image: image3,
  },
  {
    title: "Fresh Seafood",
  subtitle: "Expertly crafted recipes that reflect our chefs creativity, dedication, and passion for food",
    image: image4,
  }
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
      <CarouselContent className="md:mt-5">
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[70vh] w-full rounded-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-3 italic text-amber-300">
                    {slide.title}
                  </h1>
                  <p className="text-3xl font-bold italic md:text-xl max-w-3xl mx-auto leading-relaxed text-amber-100/90">
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
