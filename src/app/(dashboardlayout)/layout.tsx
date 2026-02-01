import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { userServices } from "../services/user.services";
import { redirect } from "next/navigation";


export default async function Layout({ admin,provider,customer }: { admin: React.ReactNode,provider: React.ReactNode,customer: React.ReactNode }) {
   const {data}= await userServices.getSession()
   console.log(data)
   if(!data.user){
    redirect('/login')
   }
    const userInfo=data.user
  //  const userInfo="ADMIN"
  return (
    <div className="w-full ">
      <SidebarProvider>
      <AppSidebar user={userInfo} />
      <main className="w-5xl mx-auto mt-12">
        <SidebarTrigger />
        {admin}
        {provider}
        {customer}
      </main>
    </SidebarProvider>
    </div>
    
  )
}