"use client"



import { env } from "@/env"
import Link from "next/link"

import { useState } from "react"
// const BACKENdURL=env.BACKEND_URL
 const NEXT_PUBLIC_MEALS=env.NEXT_PUBLIC_MEALS
export default function ProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    categoryId: "",
  })

  // Mapping of category names to IDs
  const categoryMap: Record<string, string> = {
    Biryani: "9a60fe46-9c15-4a99-8a7b-8aa6248f3c92",
    FastFood:"fcbb47b7-eeac-4423-b6a4-87866c7bd068",
    Desserts:"c436e87d-8f10-468d-a6e1-b46e8fcac1d2",
    Seafood:"f3f216cf-ad00-457f-a44b-a49b42ee868a",
    Sweets:"edcb70cc-9cca-4f76-9522-ea00756c9430",
    Grilled:"7ddcb5b7-c917-456a-bd7c-593a9659c79f",
  }

  const categories = Object.keys(categoryMap)
  //  const session=  authClient.useSession()
  //    console.log("menu",session.data?.user?.id)
  //    if(session.data?.user?.id){
  //     const provider=
  //    }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

   
    if (name === "price") {
      const numberValue = Number(value)
      setFormData({
        ...formData,
        price: numberValue >= 0 ? numberValue : 0,
      })
      return
    }

    if (name === "categoryId") {
      setFormData({
        ...formData,
        categoryId: categoryMap[value] || "",
      })
      return
    }

    
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch(NEXT_PUBLIC_MEALS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const error = await res.text()
      throw new Error(error || "Failed to create meal")
    }

    const data = await res.json()
    console.log("Created meal:", data)

  
    setFormData({
      title: "",
      description: "",
      price: 0,
      categoryId: "",
    })
  } catch (err) {
    console.error("Create meal error:", err)
  }
}



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-amber-700 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Add Product</h2>
      <h2 className="my-2 font-bold text-black">are you new provider/

        <Link href={'/provider'} className="font-extrabold text-emerald-50"> provider</Link>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">

        
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product title"
            className="px-4 py-2 rounded-lg border border-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 bg-white/30 text-white placeholder-white/70"
          />
        </div>

       
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="px-4 py-2 rounded-lg border border-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 bg-white/30 text-white placeholder-white/70 resize-none"
          />
        </div>

     
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-white">Price</label>
          <input
            type="number"
            name="price"
            min={0}
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="px-4 py-2 rounded-lg border border-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 bg-white/30 text-white placeholder-white/70"
          />
        </div>

        
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-white">Category</label>
          <select
            name="categoryId"
            value={Object.keys(categoryMap).find(
              (key) => categoryMap[key] === formData.categoryId
            ) || ""}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border border-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 bg-white/30 text-white"
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>
        </div>

       
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-white/90 text-purple-600 font-bold transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}