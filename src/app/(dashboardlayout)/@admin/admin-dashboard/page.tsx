import { redirect } from "next/navigation"


const AdminPage = () => {
  return redirect('/admin-dashboard/users')
}

export default AdminPage
