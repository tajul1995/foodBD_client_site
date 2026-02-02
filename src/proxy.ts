// import { NextRequest, NextResponse } from "next/server";
// import { userServices } from "./app/services/user.services";
// import { Roles } from "./constants/roles";


// export async function proxy(request:NextRequest){
//     let isAuthenticate=false
//     let isAdmin=false
//     let isprovider=false
//     const pathname= request.nextUrl.pathname
//     const {data}= await userServices.getSession()
//     if(data){
//         isAuthenticate=true
//         isAdmin=data.user.role===Roles.admin
//         isprovider=data.user.role===Roles.PROVIDER
//     }
//     if(!isAuthenticate){
//         return NextResponse.redirect(new URL('/login',request.url))
//     }
//     if(isAdmin && pathname.startsWith("/dashboard")){
//         return NextResponse.redirect(new URL("/admin-dashboard/users",request.url))
//     }
//      if(isAdmin && pathname.startsWith("/customer-dashboard")){
//          return NextResponse.redirect(new URL("/admin-dashboard/users",request.url))
//     }
//     if(isprovider && pathname.startsWith("/admin-dashboard")){
//         return NextResponse.redirect(new URL("/dashboard/menu",request.url))
//     }
//     if(isprovider && pathname.startsWith("/customer-dashboard")){
//         return NextResponse.redirect(new URL("/dashboard/menu",request.url))
//     }
//     if(!isAdmin && pathname.startsWith("/admin-dashboard")){
//         return NextResponse.redirect(new URL("/customer-dashboard/order",request.url))
//     }
//     if(!isprovider && pathname.startsWith("/dashboard")){
//         return NextResponse.redirect(new URL("/customer-dashboard/order",request.url))
//     }
//     // console.log('data from proxy',data)
//     // console.log(pathname)
//     return NextResponse.next()
// }

// export const config = {
//   matcher:[
//     "/dashboard/:path*",
    
//     "/admin-dashboard/:path*",
   
//     "/customer-dashboard/:path*"
// ] 

// }
// matcher:["/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard",
//     "/admin-dashboard/:path*",
//     "/customer-dashboard",
//     "/customer-dashboard/:path*"
// ]
import { NextRequest, NextResponse } from "next/server"
import { userServices } from "./app/services/user.services"
import { Roles } from "./constants/roles"
// import { userServices } from "./app/services/user.services"
// import { Roles } from "./constants/roles"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const { data } = await userServices.getSession()

  
  if (!data) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    )
  }

  const role = data.user.role
  const isAdmin = role === Roles.admin
  const isProvider = role === Roles.PROVIDER

  

  if (isAdmin) {
    if (
      pathname.startsWith("/dashboard") ||
      pathname.startsWith("/customer-dashboard")
    ) {
      return NextResponse.redirect(
        new URL("/admin-dashboard/users", request.url)
      )
    }
  }

 
  if (isProvider) {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/customer-dashboard")
    ) {
      return NextResponse.redirect(
        new URL("/dashboard/menu", request.url)
      )
    }
  }

  

  if (!isAdmin && !isProvider) {
    if (
      pathname.startsWith("/admin-dashboard") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(
        new URL("/customer-dashboard/order", request.url)
      )
    }
  }

  return NextResponse.next()
}



export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/customer-dashboard/:path*",
  ],
}
