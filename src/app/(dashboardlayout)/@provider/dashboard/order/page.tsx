


import OrderDropdown from "@/components/dashboard/providerDropDownMenu";
import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { env } from "@/env";
import { OrderStatus } from "@/types/order.type";

type Order={
  id:string
  customerId:string,
  address:string,
  status:OrderStatus,
  totalAmount:number


}
// const BACKEND_URL=env.BACKEND_URL
const NEXT_PUBLIC_ORDER=env.NEXT_PUBLIC_ORDER
export default async function OrderPage() {
 const res = await fetch(NEXT_PUBLIC_ORDER, {
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
      <TableHead className="">customerId</TableHead>
      <TableHead>address</TableHead>
      <TableHead>status</TableHead>
      <TableHead>updateStatus</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="border-2 border-amber-800">
    {
      orders.data.map((order:Order)=><TableRow key={order.id} className="border-2 border-amber-800">
      <TableCell className="font-medium ">{order.customerId}</TableCell>
      <TableCell >{order.address}</TableCell>
      <TableCell> {order.status}</TableCell>
      <TableCell> <OrderDropdown  orderId={order.id}   currentstatus={order.status }></OrderDropdown></TableCell>
     
      <TableCell className="text-right">tk{order.totalAmount}</TableCell>
    </TableRow>)
    }

    
  </TableBody>
</Table>
    </div>
  )
}
