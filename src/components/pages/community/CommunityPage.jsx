import { Footer } from "../../../utils/Footer"
import { Header } from "../../../utils/Header"
import { Announcement } from "./Announcement"
import { Cover } from "./Cover"
import { Forums } from "./Forums"
import { Trends } from "./Trends"

const Community = () => {
    return (
      <>
          <div className="m-auto bg-yellow-50">
            <Header />
            <Cover />
            <Forums />
            <Announcement />
            <Trends />
            <Footer />
          </div>
        </>
    )
  }
  
  export default Community