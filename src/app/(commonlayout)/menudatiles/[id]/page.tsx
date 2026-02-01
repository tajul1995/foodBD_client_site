import { blogServices } from "@/app/services/blog.service"
import { userServices } from "@/app/services/user.services"
import ReviewSection from "@/components/home/foodReviewSection"



import MealCard from "@/components/home/menuCard"
type Review={
id:string
comment:string,
rating:string
}


const SingleMenu =async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const {data} = await blogServices.getMealById(id)
  const {data:userDetails}=await userServices.getSession()
  // console.log("review",userDetails)
    // console.log("single" ,data,id)
  const meal=data.data
  // console.log(meal.reviews)

  return (
    <div>
      <MealCard meal={meal}></MealCard>
      <ReviewSection meal={meal}></ReviewSection>
      <h2 className="text-2xl font-bold text-center text-amber-600 my-3"> costomer review</h2>
     <div className="bg-amber-500 rounded-3xl">
      {
        meal.reviews.map((review:Review)=>
          <div key={review.id} className="text-black p-5 font-extrabold">
            <p> name: {userDetails?.user?.name}</p>
            <p> reting: {review.rating}</p>
            <h2>comment: {review.comment}</h2>


          </div>
        )
      }
     </div>
     
     
      
    </div>
  )
}

export default SingleMenu
