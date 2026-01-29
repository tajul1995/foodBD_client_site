import { env } from "@/env"

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
    
}