"use server"

// import { blogServices } from "@/app/services/blog.service"
import { userServices } from "@/app/services/user.services"
import { Role } from "@/components/dashboard/dropDownMenu"
import { env } from "@/env"

import { OrderStatus } from "@/types/order.type"
import { revalidateTag } from "next/cache"
import { updateTag } from "next/cache"

// import { redirect } from "next/navigation"

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

//  const BACKEND_URL=env.BACKEND_URL
 const NEXT_PUBLIC_USERS=env.NEXT_PUBLIC_USERS
const NEXT_PUBLIC_ORDER=env.NEXT_PUBLIC_ORDER
const NEXT_PUBLIC_REVIEWS=env.NEXT_PUBLIC_REVIEWS
// const NEXT_PUBLIC_MEALS=env.NEXT_PUBLIC_MEALS

export async function updateUserRole(
  userId: string,
  role: Role
) {
  const res = await fetch(`${NEXT_PUBLIC_USERS}/${userId}`, {
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

  updateTag("users")
}
export async function updateorderstatus(
  userId: string,
  status: OrderStatus
) {
  const res = await fetch(`${NEXT_PUBLIC_ORDER}/${userId}`, {
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

  updateTag("orders")
}


export async function createReviews(
  rating: number,
  comment: string,
  id: string
) {
 const {data}=await userServices.getSession()
 const userId=data.user.id
 console.log("food",rating,id)
  const res = await fetch(NEXT_PUBLIC_REVIEWS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rating,
      comment,
      userId,
      mealId:id,
    }),
    cache: "no-store",
  })
console.log(res)
  if (!res.ok) {
    throw new Error("Failed to create review")
  }

  return res.json() 
}

// type Form={
//    title:string,
//     description:string,
//     price: number,
//     categoryId:string
// }

// type CreateMealInput = {
//   title: string
//   description: string
//   price: number
//   categoryId: string
// }

// export async function findpProvider() {
//   const { data } = await userServices.getSession()

//   if (!data?.user?.id) {
//     throw new Error("Unauthorized")
//   }

//   const provider = await blogServices.getproviderById(data.user.id)

//   if (!provider) {
//     redirect("/provider")
//   }

  
// }