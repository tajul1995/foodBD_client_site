"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Meal } from "./menuCard"

import { createReviews } from "@/actions/food"

 
export default function ReviewSection({meal}:{meal:Meal}) {
  const [rating, setRating] = useState(0)        // Selected rating
  const [hoverRating, setHoverRating] = useState(0)  // Hover effect
  const [comment, setComment] = useState("")     // User comment
// "use server"
  const handleSubmit =async () => {
    if (rating === 0) return alert("Please select a rating!")
    console.log({ rating, comment,meal })
  const id=meal.id
   const res= await createReviews(rating,comment,id)
   console.log(res)
    alert(`Thanks for your review! Rating: ${rating}`)
    setRating(0)
    setHoverRating(0)
    setComment("")
  }

  return (
    <section className="w-full py-12  flex justify-center px-4">
      <div className="w-full max-w-md  rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Leave a Review</h2>

        {/* STAR RATING */}
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }, (_, i) => {
            const starNumber = i + 1
            return (
              <button
                key={i}
                type="button"
                onClick={() => setRating(starNumber)}
                onMouseEnter={() => setHoverRating(starNumber)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-3xl transition-colors duration-200 focus:outline-none"
              >
                <span
                  className={`${
                    starNumber <= (hoverRating || rating)
                      ? "text-yellow-400"
                      : "text-amber-400"
                  }`}
                >
                  ★
                </span>
              </button>
            )
          })}
        </div>

        {/* RATING NUMBER */}
        <p className="text-center mb-4 font-semibold">
          {rating > 0 ? `Rating: ${rating} / 5` : "No rating yet"}
        </p>

        {/* COMMENT BOX */}
        <Textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="resize-none h-24 mb-4"
        />

        {/* SUBMIT BUTTON */}
        <Button className="w-full rounded-xl" onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </section>
  )
}
