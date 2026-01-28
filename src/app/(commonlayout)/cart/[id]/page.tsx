import OrderConfirmForm from "@/components/home/modal"




const ConfermOrder =async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
   const { id } = await params
   const price=Number(id)
    

  return (
    <div>
      <OrderConfirmForm price={price}></OrderConfirmForm>
    </div>
  )
}

export default ConfermOrder
