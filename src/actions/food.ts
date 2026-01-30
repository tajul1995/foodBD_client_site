"use server"

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

export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  await fetch(`http://localhost:5000/api/orders/${orderId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ status }),
  })

  updateTag("orders")
}
