import { redirect } from "next/navigation"

export const dynamic = "force-dynamic";
const CustomerPage = () => {
  return redirect('/customer-dashboard/order')
}

export default CustomerPage
