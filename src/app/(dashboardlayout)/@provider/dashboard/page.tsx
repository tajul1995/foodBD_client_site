
import { redirect } from 'next/navigation'

export const dynamic = "force-dynamic";
const DashboardPage =async () => {
  
  return redirect('/dashboard/menu')
}

export default DashboardPage
