"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Meal } from "./menuCard"
import { env } from "@/env"
import { Star } from 'lucide-react';
const NEXT_PUBLIC_REVIEWS=env.NEXT_PUBLIC_REVIEWS
export default function ReviewSection({ meal }: { meal: Meal }) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (rating === 0) return alert("Please select a rating!")
      console.log(rating, comment,meal)

    try {
      setLoading(true)

      const res = await fetch(NEXT_PUBLIC_REVIEWS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         credentials: "include",
        body: JSON.stringify({
          mealId:meal.id,
          rating,
          comment,
        },
        
      ),
      })

      if (!res.ok) {
        throw new Error("Failed to submit review")
      }

      const data = await res.json()
      console.log("Review created:", data)

      alert(`Thanks for your review! Rating: ${rating}`)
      setRating(0)
      setHoverRating(0)
      setComment("")
    } catch (error) {
      console.error(error)
      alert("Something went wrong!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full py-12 flex justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Leave a Review
        </h2>

        
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
                className="text-3xl"
              >
                <span
                  className={
                    starNumber <= (hoverRating || rating)
                      ? "text-yellow-400"
                      : "text-amber-400"
                  }
                >
                  <Star></Star>
                </span>
              </button>
            )
          })}
        </div>

        <p className="text-center mb-4 font-semibold">
          {rating > 0 ? `Rating: ${rating} / 5` : "No rating yet"}
        </p>

        <Textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="resize-none h-24 mb-4"
        />

        <Button
          className="w-full rounded-xl"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
      </div>
    </section>
  )
}
