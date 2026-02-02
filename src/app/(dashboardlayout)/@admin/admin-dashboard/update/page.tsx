 import ReviewsTable from "@/components/home/reviewsTables"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { env } from "@/env"





 export type Comments={
  id:string
  comment:string
  user:{
    name:string
    email:string
  }
}
export const dynamic = "force-dynamic";
// const BACKEND_URL=env.BACKEND_URL
const NEXT_PUBLIC_REVIEWS=env.NEXT_PUBLIC_REVIEWS
const UpdatePage =async () => {
  const res = await fetch(NEXT_PUBLIC_REVIEWS, {
     credentials: "include",
    cache: "no-store",
    // next: {
    // tags: ["users"],
  }
    
    )
  

  // if (!res.ok) {
  //   throw new Error("Failed to fetch update")
  // }

  const orders = await res.json()

  console.log(orders)
 

// const handleToDelete = async (id: string) => {
//     const res = await fetch(`http://localhost:5000/api/reviews/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     })

//     if (!res.ok) {
//       alert("Failed to delete review")
//       return
//     }

//     // Refresh server data
//     router.refresh()
//   }


  return (
   
     <div>
      <ReviewsTable orders={orders}></ReviewsTable> 
     </div>
     
  )}

  

export default UpdatePage
