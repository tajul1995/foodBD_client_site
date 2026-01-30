

import OrderStatusDropdown from "@/components/dashboard/dropDownMenu";

import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { OrderStatus } from "@/types/order.type";

type Users={
    id:string
  name :String
  email:String
  
  image?:String
  role:string
  
  phone?: string
  status:string 


}


export default async function UserPage() {
 const res = await fetch("http://localhost:5000/api/users", {
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
      <TableHead>email</TableHead>
      <TableHead>status</TableHead>
      <TableHead>role</TableHead>
      <TableHead>updateStatus</TableHead>
     
    </TableRow>
  </TableHeader>
  <TableBody className="border-2 border-amber-800">
    {
      orders.data.map((order:Users)=><TableRow key={order.id} className="border-2 border-amber-800">
      <TableCell className="font-medium ">{order.name}</TableCell>
      <TableCell className="font-medium ">{order.email}</TableCell>
      <TableCell >{order.status}</TableCell>
      <TableCell >{order.role}</TableCell>
     
      <TableCell> <OrderStatusDropdown   userId={order.id}   currentRole={order.role }></OrderStatusDropdown></TableCell>
     
      
    </TableRow>)
    }

    
  </TableBody>
</Table>
    </div>
  )
}
