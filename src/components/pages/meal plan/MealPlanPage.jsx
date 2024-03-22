import { Footer } from "../../../utils/Footer"
import { Header } from "../../../utils/Header"
import { Cover } from "./Cover"
import { HealthyMeals } from "./HealthyMeals"
import { Nutritionists } from "./Nutritionists"


const MealPlanPage = () => {
    return (
      <>
          <div className="m-auto bg-yellow-50">
            <Header />
            <Cover />
            <HealthyMeals />
            <Nutritionists />
            <Footer />
          </div>
        </>
    )
  }
  
  export default MealPlanPage