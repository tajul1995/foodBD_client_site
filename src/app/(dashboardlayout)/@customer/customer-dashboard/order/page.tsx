import { blogServices } from "@/app/services/blog.service"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
type Order={
  id:string
  customerId:string
  status:string
   address:string
  totalAmount:number


}

const OrderePage =async () => {
    const {data}= await blogServices.getorderById()
    console.log(data.data)
    
  return (
    <div>
      <Table className="border-2 text-amber-700 p-3">
 
  <TableHeader >
    <TableRow className="border-2 ">
      <TableHead  className="italic font-bold ">customerId</TableHead>
      <TableHead  className="italic font-bold ">address</TableHead>
      <TableHead className="italic font-bold ">status</TableHead>
      <TableHead className="italic font-bold ">amount</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
{
  data.data.map((item:Order)=><TableRow key={item.id} >
      <TableCell >{item.customerId}</TableCell>
      <TableCell >{item.address}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>{item.totalAmount}</TableCell>
      <TableCell>
        
      </TableCell>
      
    </TableRow>)
}

    
  </TableBody>
</Table>
    </div>
  )
}

export default OrderePage
