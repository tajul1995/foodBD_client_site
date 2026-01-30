"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { createReviews } from "@/actions/food"


type Review = {
  rating: number
  comment: string
}

type Props = {
  mealId: string
}

export default function SimpleRatingComment({ mealId }: Props) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
console.log(rating,comment,mealId)
  const handlePost = async () => {
    if (!comment.trim() || rating === 0) return

    try {
      setLoading(true)
       

   const newReview = await createReviews(rating, comment, mealId)
//        const res = await fetch("http://localhost:5000/api/reviews", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       rating,
//       comment,
//       mealId,
//     }),
//     cache: "no-store",
//   })
// console.log(res)

    //   console.log(newReview)
      setReviews([{ rating, comment }, ...reviews])
      setComment("")
      setRating(0)
    } catch (error) {
      console.error(error)
      alert("Failed to post review")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 max-w-xl">
      <Card>
        <CardContent className="p-4 space-y-3">
          {/* Stars */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer w-6 h-6 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <Textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button onClick={handlePost} disabled={loading}>
            {loading ? "Posting..." : "Post"}
          </Button>
        </CardContent>
      </Card>

      {/* Reviews */}
      <div className="space-y-2">
        {reviews.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-3 space-y-1">
              <div className="flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm">{item.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
