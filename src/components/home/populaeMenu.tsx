"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { ShoppingCart, Star } from "lucide-react"
import image1 from '../../../public/grilledchicken.jpg'
import image2 from '../../../public/dessert.jpg'
import image3 from '../../../public/burger.jpg'
import image4 from '../../../public/pizza.jpg'
import image5 from '../../../public/seafood.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card } from "@/components/ui/card"

const popularMenus = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: "300 tk",
    rating: 4.8,
    image: image1,
  },
  {
    id: 2,
    name: "Chocolate Dessert",
    price: "350 tk",
    rating: 4.6,
    image: image2,
  },
  {
    id: 3,
    name: "Seafood Platter",
    price: "499 tk",
    rating: 4.9,
    image: image5,
  },
  {
    id: 4,
    name: "Burger Special",
    price: "699 tk",
    rating: 4.7,
    image: image3,
  },
  {
    id: 5,
    name: "Pizza Slice",
    price: "199 tk",
    rating: 4.5,
    image: image4,
  },
  {
    id: 1,
    name: "Grilled Chicken",
    price: "300 tk",
    rating: 4.8,
    image: image1,
  },
  {
    id: 2,
    name: "Chocolate Dessert",
    price: "350 tk",
    rating: 4.6,
    image: image2,
  },
  {
    id: 3,
    name: "Seafood Platter",
    price: "499 tk",
    rating: 4.9,
    image: image5,
  },
  {
    id: 4,
    name: "Burger Special",
    price: "699 tk",
    rating: 4.7,
    image: image3,
  },
  {
    id: 5,
    name: "Pizza Slice",
    price: "199 tk",
    rating: 4.5,
    image: image4,
  }
]

export default function PopularMenuSmallSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <section className="py-14 animate-fade-in md:m-8">
   
      <div className="max-w-7xl mx-auto px-4 mb-6  border-t-2 border-b-2 border-amber-500">
        <h2 className="text-3xl font-extrabold text-amber-700 text-center italic md:py-3 py-1 ">Popular Menu</h2>
        
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start" }}
        className="max-w-7xl mx-auto"
      >
        <CarouselContent>
          {popularMenus.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-amber-900">
                
                {/* Rating Badge */}
                <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  {item.rating}
                </div>

                {/* Add to Cart */}
                <button className="absolute top-2 right-2 z-10 bg-red-500 text-white p-2 rounded-full opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 hover:bg-red-600">
                  <ShoppingCart size={16} />
                </button>

                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold truncate text-white italic">
                    {item.name}
                  </h3>
                  <p className="text-red-500 font-bold text-sm mt-1">
                    {item.price}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
