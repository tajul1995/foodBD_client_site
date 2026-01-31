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

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length)
  const prevReview = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  const review = reviews[index]

  return (
    <div>
        <div className="max-w-7xl mx-auto px-4 mb-10 border-t-2 border-b-2 border-amber-500">
        <h2 className="text-3xl font-extrabold text-amber-700 text-center italic py-3">
          reviews from customer
        </h2>
      </div>
       <div className="min-h-screen w-full flex flex-col items-center justify-center p-6">
        
      <div className="relative w-full max-w-xl">
        <div className="bg-amber-400 rounded-2xl shadow-lg p-6 text-center">
          {/* Rating */}
          <div className="flex justify-center mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-2xl ${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Comment */}
          <p className="text-gray-700 mb-4">"{review.comment}"</p>

          {/* Name */}
          <h3 className="font-bold text-lg ">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.role}</p>
        </div>

        {/* Navigation */}
        <Button
          variant="outline"
          className="absolute top-1/2 -left-5 -translate-y-1/2 rounded-full"
          onClick={prevReview}
        >
          ←
        </Button>
        <Button
          variant="outline"
          className="absolute top-1/2 -right-5 -translate-y-1/2 rounded-full"
          onClick={nextReview}
        >
          →
        </Button>
      </div>
    </div>
    </div>
   
  )
}
