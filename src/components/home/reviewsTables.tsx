"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { env } from "@/env"
import { useRouter } from "next/navigation"

type Comments = {
  id: string
  comment: string
  user: {
    name: string
    email: string
  }
}
type ReviewsResponse = {
  data: Comments[]
}
 const NEXT_PUBLIC_REVIEWS=env.NEXT_PUBLIC_REVIEWS
// const BACKENDURL=env.BACKEND_URL

export default function ReviewsTable({ orders }: { orders: ReviewsResponse }) {
  const router = useRouter()

  const handleToDelete = async (id: string) => {
    console.log("delete",id)
    const res = await fetch(`${NEXT_PUBLIC_REVIEWS}/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
console.log(res)
    if (!res.ok) {
      alert("Failed to delete review")
      return
    }

    
    router.refresh()
  }

  return (
    <Table className="p-4">
      <TableHeader>
        <TableRow className="text-xl font-bold italic border-2 border-amber-800">
          <TableHead>Name</TableHead>
          <TableHead>Comment</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="border-2 border-amber-800">
        {orders?.data.map((order:Comments) => (
          <TableRow key={order.id} className="border-2 border-amber-800">
             <TableCell>{order.user.name}</TableCell> 
            <TableCell>{order.comment}</TableCell>
            <TableCell>{order.user.email}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                onClick={() => handleToDelete(order.id)}
              >
                DELETE
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
