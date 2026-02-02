"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Tajul Islam",
    role: "Web Developer",
    comment: "Amazing website! Very fast and easy to navigate.",
    rating: 5,
  },
  {
    name: "Sofia Rahman",
    role: "Designer",
    comment: "Loved the design and layout. Smooth experience!",
    rating: 4,
  },
  {
    name: "Arif Khan",
    role: "Entrepreneur",
    comment: "Great service and excellent user interface.",
    rating: 5,
  },
]

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % reviews.length)
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
   
      <div className="border-y-2 border-amber-500 mb-10">
        <h2 className="text-3xl font-extrabold text-amber-700 text-center italic py-4">
          Our Customer Reviews
        </h2>
      </div>

     
      <div className="relative md:hidden">
        <ReviewCard review={reviews[index]} />

        <Button
          size="icon"
          variant="outline"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
        >
          ←
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
        >
          →
        </Button>
      </div>

      
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  )
}



function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-amber-400 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      
      <div className="flex justify-center mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < review.rating ? "text-red-500 font-bold" : "text-white"
            }`}
          >
            ★
          </span>
        ))}
      </div>

     
      <p className="text-xl font-bold text-green-800 mb-4 italic">
        “{review.comment}”
      </p>

   
      <h3 className=" text-black font-bold  text-lg">{review.name}</h3>
      <p className="text-sm text-amber-950">{review.role}</p>
    </div>
  )
}
