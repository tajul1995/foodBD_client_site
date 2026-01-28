"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { env } from "@/env"
import { MapPin, ShoppingCart, Store } from "lucide-react"



interface Category {
  id: string
  name: string
}

interface Meal {
  id: string
  title: string
  description: string
  price: number
  image: string
  categoryId: string
  isAvailable: boolean
  provider:{
    shopName:string
    address:string
  }
}

const NEXT_PUBLIC_CATEGORY= env.NEXT_PUBLIC_CATEGORY
const NEXT_PUBLIC_MEALS=env.NEXT_PUBLIC_MEALS
export default function FoodMenuFunctional() {
  const defaultCategoryId = "9a60fe46-9c15-4a99-8a7b-8aa6248f3c92" 
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    defaultCategoryId
  )
  const [meals, setMeals] = useState<Meal[]>([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [loadingMeals, setLoadingMeals] = useState(false)

  console.log("meals",meals.map(meal=>console.log(meal)))
  const fetchCategories = async () => {
    setLoadingCategories(true)
    try {
      const res = await fetch(NEXT_PUBLIC_CATEGORY,{cache:"no-store"})
      const data = await res.json()
      setCategories(data.data || [])
    } catch (error) {
      console.error(error)
    }
    setLoadingCategories(false)
  }

  
  const fetchMeals = async (categoryId: string) => {
    setLoadingMeals(true)
    try {
      const res = await fetch(
        `${NEXT_PUBLIC_MEALS}?search=${categoryId}`,{cache:"no-store"}
      )
      const data = await res.json()
      setMeals(data.data || [])
    } catch (error) {
      console.error(error)
    }
    setLoadingMeals(false)
  }


  useEffect(() => {
    fetchCategories()
  }, [])

  // Load meals for default category on mount
  useEffect(() => {
    if (selectedCategoryId) {
      fetchMeals(selectedCategoryId)
    }
  }, [selectedCategoryId])

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {loadingCategories ? (
          <p>Loading categories...</p>
        ) : categories.length === 0 ? (
          <p className="text-muted-foreground">No categories found</p>
        ) : (
          categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategoryId === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategoryId(cat.id)}
            >
              {cat.name}
            </Button>
          ))
        )}
      </div>

      {/* Meals Grid */}
      {loadingMeals ? (
        <p className="text-center text-muted-foreground">Loading meals...</p>
      ) : meals.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No meals available for this category
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            
            <Card
              key={meal.id}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
            
              <div className="relative h-48 w-full">
                <Image
                  src={meal.image}
                  alt={meal.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-center  mb-2 text-amber-800 font-bold italic">{meal.title}</h3>
                <p className="text-sm  mt-1 line-clamp-2 my-2 text-amber-300 font-bold italic">
                  {meal.description}
                </p>
                <p className="text-red-500 font-bold mt-2 ">  tk {meal.price}</p>
                <div className="border-t pt-2">
    <div className="flex items-center gap-2 text-sm  my-2 text-amber-500 font-bold italic">
      <Store className="h-4 w-4  text-amber-800 text-2xl" />
      {meal.provider?.shopName}
    </div>

    <div className="flex items-center gap-2 text-xs  mt-1 my-2 text-amber-500 font-bold italic">
      <MapPin className="h-4 w-4" />
      {meal.provider?.address}
    </div>
    <div className="md:mt-4 mt-1 ">
      <Button
  className="w-full mt-3 flex items-center gap-2 transition-transform hover:scale-[1.02] bg-amber-900"
>
  <ShoppingCart className="h-4 w-4 text-3xl text-amber-300  font-bold" />
  Order Now
</Button>
    </div>
  </div>
                
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
