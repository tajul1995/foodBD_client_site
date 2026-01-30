import { blogServices } from "@/app/services/blog.service"
import { Meal } from "@/components/home/dynamicMenu"
import OrderConfirmForm from "@/components/home/modal"




const ConfermOrder =async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
   const { id } = await params
  const res= await blogServices.getMealById(id)
  // console.log("data",res.data.data)
  const meal=res.data.data
  
    

  return (
    <div>
      <OrderConfirmForm meal={meal}></OrderConfirmForm>
    </div>
  )
}

export default ConfermOrder
