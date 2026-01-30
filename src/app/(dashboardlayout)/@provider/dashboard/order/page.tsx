

import OrderStatusDropdown from "@/components/dashboard/dropDownMenu";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { OrderStatus } from "@/types/order.type";

type Order={
  id:string
  customerId:string,
  address:string,
  status:OrderStatus,
  totalAmount:number


}


export default async function OrderPage() {
 const res = await fetch("http://localhost:5000/api/orders", {
    credentials: "include",
    cache: "no-store"
    
  } )
  

  if (!res.ok) {
    throw new Error("Failed to fetch orders")
  }

  const orders = await res.json()

  console.log(orders.data)

  return (
    <div >
      <Table className="p-4">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow className="text-xl font-bold italic border-2 border-amber-800">
      <TableHead className="w-[200px]">customerId</TableHead>
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
      <TableCell> <OrderStatusDropdown   orderId={order.id}   currentStatus={order.status }></OrderStatusDropdown></TableCell>
     
      <TableCell className="text-right">{order.totalAmount}</TableCell>
    </TableRow>)
    }

    
  </TableBody>
</Table>
    </div>
  )
}
