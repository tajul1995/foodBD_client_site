"use server"

import { Role } from "@/components/dashboard/dropDownMenu"
import { authClient } from "@/lib/auth-client"
import { OrderStatus } from "@/types/order.type"
import { revalidateTag, updateTag } from "next/cache"

export async function createFood(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number(formData.get("price"))
  const category = formData.get("category") as string
  const image = formData.get("image") as File | null

  console.log({
    title,
    description,
    price,
    category,
    image,
  })

  return { success: true }
}

// export async function updateOrderStatus(
//   orderId: string,
//   status: string
// ) {
//   await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//     body: JSON.stringify({ status }),
//   })

//   updateTag("orders")
// }




export async function updateUserRole(
  userId: string,
  role: Role
) {
  const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ role }),
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to update role")
  }

  // 🔥 THIS is why reload is not needed
  revalidateTag("users")
}
export async function updateorderstatus(
  userId: string,
  status: OrderStatus
) {
  const res = await fetch(`http://localhost:5000/api/orders/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to update role")
  }

  // 🔥 THIS is why reload is not needed
  revalidateTag("orders")
}

// actions/food.ts
export async function createReviews(
  rating: number,
  comment: string,
  mealId: string
) {
 
  const res = await fetch("http://localhost:5000/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      comment,
      mealId,
    }),
    cache: "no-store",
  })
console.log(res)
  if (!res.ok) {
    throw new Error("Failed to create review")
  }

  return res.json() // ✅ return created review
}
