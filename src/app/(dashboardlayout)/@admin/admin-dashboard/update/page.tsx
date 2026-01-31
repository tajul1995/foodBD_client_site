import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"




type Comments={
  id:string
  comment:string
  user:{
    name:string
    email:string
  }
}

const UpdatePage =async () => {
  const res = await fetch("http://localhost:5000/api/reviews", {
    credentials: "include",
    cache: "no-store",
    next: {
    tags: ["users"],
  }
    
  } )
  

  if (!res.ok) {
    throw new Error("Failed to fetch orders")
  }

  const orders = await res.json()

  console.log(orders.data)

  return (
    <div >
      <Table className="p-4">
 
  <TableHeader>
    <TableRow className="text-xl font-bold italic border-2 border-amber-800">
      <TableHead className="">name</TableHead>
      <TableHead>comment</TableHead>
      <TableHead>email</TableHead>
     
      <TableHead>action</TableHead>
      
     
    </TableRow>
  </TableHeader>
  <TableBody className="border-2 border-amber-800">
    {
      orders.data.map((order:Comments)=><TableRow key={order.id} className="border-2 border-amber-800">
      <TableCell className="font-medium ">{order.user.name}</TableCell>
      <TableCell className="font-medium ">{order.comment}</TableCell>
      <TableCell >{order.user.email}</TableCell>
      <TableCell >
        <Button>DELETE</Button>
        
      </TableCell>
     
     
     
      
    </TableRow>)
    }

    
  </TableBody>
</Table>
    </div>
  )
}

export default UpdatePage
