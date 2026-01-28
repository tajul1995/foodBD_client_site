import { env } from "@/env"


const  NEXT_PUBLIC_MEALS=env.NEXT_PUBLIC_MEALS
export const blogServices={
    getAllMeals:async()=>{
        try {
            const res= await fetch(NEXT_PUBLIC_MEALS,{cache:"no-store"})
            const data= await res.json()
            console.log("alldata",data)
            return{data:data.data,error:null}
        } catch (error) {
              return {data:null,error:{message:error}}
        }
    }
    
}