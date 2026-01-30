import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { userServices } from "../services/user.services";


export default async function Layout({ admin,provider }: { admin: React.ReactNode,provider: React.ReactNode }) {
   const {data}= await userServices.getSession()
   console.log(data)
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
      </main>
    </SidebarProvider>
    </div>
    // <SidebarProvider>
    //   <AppSidebar user={userInfo}/>
    //   <main>
    //     <SidebarTrigger />
    //     {admin}
    //     {provider}
    //   </main>
    // </SidebarProvider>
  )
}