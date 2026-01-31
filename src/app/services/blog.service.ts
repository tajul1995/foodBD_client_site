import { env } from "@/env"
import { userServices } from "./user.services"

 interface GetMealsParams{
    title:string
 }
const  NEXT_PUBLIC_MEALS=env.NEXT_PUBLIC_MEALS
const  NEXT_PUBLIC_ORDER=env.NEXT_PUBLIC_ORDER
export const blogServices={
    getAllMeals:async(params?:GetMealsParams)=>{
        try {
            const url= new URL(NEXT_PUBLIC_MEALS)
            if(params){
                Object.entries(params).forEach(([key,value])=>{
                    if(value !== undefined && value !== null && value !== ""){
                        url.searchParams.append(key,value)
                    }
                })
            }
            const res= await fetch(url.toString(),{cache:"no-store"})
            const data= await res.json()
            // console.log("alldata",data)
            return{data:data.data,error:null}
        } catch (error) {
              return {data:null,error:{message:error}}
        }
    },
    getMealById:async(id:string)=>{
        try {
            const res= await fetch(`${NEXT_PUBLIC_MEALS}/${id}`)
            const data= await res.json()
            console.log(data)
            return {data:data,error:null}
        } catch (error) {
            return {data:null,message:error}
        }
    },
    getallOrders:async()=>{
        try {
            const res= await fetch(NEXT_PUBLIC_ORDER,{cache:"no-store"})
            const data= await res.json()
            
            return {data:data,error:null}
        } catch (error) {
            return {data:null,message:error}
        }
    },
    getorderById:async()=>{
        try {
            const {data}=await userServices.getSession()
            console.log(data.user.id)
            const id=data.user.id
            const res= await fetch(`http://localhost:5000/api/orders/${id}`,{cache:"no-store"})
            const data1= await res.json()
            
            return {data:data1,error:null}
        } catch (error) {
            return {data:null,message:error}
        }
    },
     deleteOrderById: async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/orders/${id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw new Error(errorData.message || "Failed to delete order")
    }

    const data = await res.json()

    return { data, error: null }
  } catch (error: any) {
    return { data: null, error: error.message }
  }
},

giveReviewByCustomer: async (rating:number,comment:string,id:string) => {
  try {
    
    const { data } = await userServices.getSession()
    const userId = data.user.id
    console.log("User ID:", userId)

    const review={
        rating,
        comment,
        userId,
        mealId:id
    }
    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",           
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch orders")
    }

    const data1 = await res.json()
    return { data: data1, error: null }

  } catch (error: any) {
    console.error(error)
    return { data: null, error: error.message || "Something went wrong" }
  }
},







}