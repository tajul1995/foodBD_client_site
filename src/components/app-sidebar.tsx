"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarRail,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Route } from "@/types/routes.type"
import { Roles } from "@/constants/roles"
import { providerRoutes } from "@/routes/providerRoutes"
import { adminRoutes } from "@/routes/adminRoutes"
import { customerRoutes } from "@/routes/customerRoutes"

export function AppSidebar({user}:{user:{role:string}}) {
  const pathname = usePathname()
let route:Route[]=[]
  switch (user.role) {
    case Roles.admin:
      route=adminRoutes
      
      break;
      case Roles.PROVIDER:
      route=providerRoutes
      
      break;
      case Roles.customer:
      route=customerRoutes
      
      break;
  
    default:
      route=[]
      break;
  }
  console.log(route)
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 py-3 font-semibold">
        My App
      </SidebarHeader>

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {route.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
