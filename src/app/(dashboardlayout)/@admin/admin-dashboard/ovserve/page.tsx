
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { env } from '@/env'

type Orders={
  id:string
  customerId:string
  status:string
  address:string
  totalAmount:string

}

const NEXT_PUBLIC_ORDER=env.NEXT_PUBLIC_ORDER
// const BACKEND_URL=env.BACKEND_URL

const OvservePage = async() => {
  const res = await fetch(NEXT_PUBLIC_ORDER, {
    credentials: "include",
    cache: "no-store",
    next: {
    tags: ["users"],
  }
    
  } )
  

  if (!res.ok) {
    throw new Error("Failed to fetch ovserve")
  }

  const orders = await res.json()

  console.log(orders.data)

  return (
    <div >
      <Table className="p-4">
 
  <TableHeader>
    <TableRow className="text-xl font-bold italic border-2 border-amber-800">
      <TableHead className="">customerId</TableHead>
      <TableHead>status</TableHead>
      <TableHead>address</TableHead>
      <TableHead>totalAmount</TableHead>
      <TableHead>action</TableHead>
      
     
    </TableRow>
  </TableHeader>
  <TableBody className="border-2 border-amber-800">
    {
      orders.data.map((order:Orders)=><TableRow key={order.id} className="border-2 border-amber-800">
      <TableCell className="font-medium ">{order.customerId}</TableCell>
      <TableCell className="font-medium ">{order.status}</TableCell>
      <TableCell >{order.address}</TableCell>
      <TableCell >TK{order.totalAmount}</TableCell>
     
     
     
      
    </TableRow>)
    }

    
  </TableBody>
</Table>
    </div>
  )
}

export default OvservePage
