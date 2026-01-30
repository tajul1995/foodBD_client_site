import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./app/services/user.services";
import { Roles } from "./constants/roles";


export async function proxy(request:NextRequest){
    let isAuthenticate=false
    let isAdmin=false
    let isprovider=false
    const pathname= request.nextUrl.pathname
    const {data}= await userServices.getSession()
    if(data){
        isAuthenticate=true
        isAdmin=data.user.role===Roles.admin
        isprovider=data.user.role===Roles.PROVIDER
    }
    if(!isAuthenticate){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    if(isAdmin && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/admin-dashboard",request.url))
    }
    if(isprovider && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("/dashboard",request.url))
    }
    if(!isAdmin && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("/customer-dashboard",request.url))
    }
    if(!isprovider && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/customer-dashboard",request.url))
    }
    // console.log('data from proxy',data)
    // console.log(pathname)
    return NextResponse.next()
}

export const config = {
  matcher:["/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/customer-dashboard",
    "/customer-dashboard/:path*"
] 

}