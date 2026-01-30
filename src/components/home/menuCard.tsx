"use client"

import Image from "next/image"
import { Card } from "../ui/card"
import { MapPin, ShoppingCart, Store } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"



export  type Meal = {
  id: string
  title: string
  description: string
  price: number
  image: string
  isAvailable: boolean
  providerId:string
  provider:{
    shopName:string
    address:string
    phone:string
  }
}

export default function MealCard({ meal }: { meal: Meal }) {
 
  return (
    <div>
        <section className="py-12 px-4 max-w-7xl mx-auto ">
    
      

    
      
        <div className="grid bg-cyan-900 ">
          
            
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
    <div className="flex items-center gap-2 text-xs  mt-1 my-2 text-amber-500 font-bold italic">
      <Phone className="h-4 w-4" />
      {meal.provider?.phone}
    </div>
    <div className="md:mt-4 mt-1 w-full">
      <Button
  className=" mt-3 flex items-center gap-2 transition-transform hover:scale-[1.02] bg-amber-900 w-full"
>
  <ShoppingCart className="h-4 w-4 text-3xl text-amber-300  font-bold" />
<Link href={`/cart/${meal.id}`} >  Order Now</Link>
</Button>
    </div>
  </div>
                
              </div>
            </Card>
       
        </div>
      
    </section>
    </div>
   
  )
}