import { blogServices } from "@/app/services/blog.service"
import FoodMenuDynamic from "@/components/home/dynamicMenu"


const MenuPage =async () => {
    const {data}= await blogServices.getAllMeals()
    console.log("menu",data)
  return (
    <div>
      <FoodMenuDynamic></FoodMenuDynamic>
    </div>
  )
}

export default MenuPage
