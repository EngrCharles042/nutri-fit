import { Footer } from "../../../utils/Footer"
import { Header } from "../../../utils/Header"
import { Cover } from "./Cover"
import { RecipeCat } from "./RecipeCat"


const AllergyFriendlyRecipePage = () => {
    return (
      <>
          <div className="m-auto bg-yellow-50">
            <Header />
            <Cover />
            <RecipeCat />
            <Footer />
          </div>
        </>
    )
  }
  
  export default AllergyFriendlyRecipePage