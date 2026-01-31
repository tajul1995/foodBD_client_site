import { blogServices } from "@/app/services/blog.service"
import ReviewSection from "@/components/home/foodReviewSection"



import MealCard from "@/components/home/menuCard"


const SingleMenu =async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const {data} = await blogServices.getMealById(id)
   console.log("single" ,data.data)
  const meal=data.data

  return (
    <div>
      <MealCard meal={meal}></MealCard>
      <ReviewSection meal={meal}></ReviewSection>
     
     
      
    </div>
  )
}

export default SingleMenu
