import { redirect } from "next/navigation"


const CustomerPage = () => {
  return redirect('/customer-dashboard/order')
}

export default CustomerPage
