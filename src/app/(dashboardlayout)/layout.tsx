import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { userServices } from "../services/user.services";


export default async function Layout({ admin,provider }: { admin: React.ReactNode,provider: React.ReactNode }) {
   const {data}= await userServices.getSession()
   console.log(data)
   const userInfo=data.user
  return (
    <SidebarProvider>
      <AppSidebar user={userInfo}/>
      <main>
        <SidebarTrigger />
        {admin}
        {provider}
      </main>
    </SidebarProvider>
  )
}