import { redirect } from "next/navigation"

export const dynamic = "force-dynamic";
const AdminPage = () => {
  return redirect('/admin-dashboard/users')
}

export default AdminPage
