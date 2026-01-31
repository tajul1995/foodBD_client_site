import { reddit } from "better-auth"
import { redirect } from "next/navigation"





const ConfermOrder =async () => {
  // const {data}=await userServices.getSession()
  // console.log("cart" ,data.session.data)
  return redirect('/menu')
}

export default ConfermOrder
