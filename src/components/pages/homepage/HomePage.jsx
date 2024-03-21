import {Header} from "../../../utils/Header"
import {Footer} from "../../../utils/Footer"
import { Cover } from "./Cover"
import { About } from "./About"
import { Featured } from "./Featured"
import { Why } from "./Why"
import { Clients } from "./Clients"
import { Faq } from "./Faq"
import { Contact } from "./Contact"
import { Users } from "./Users"

const HomePage = () => {
  return (
    <>
        <div className="m-auto bg-yellow-50">
          <Header />
          <Cover />
          <About />
          <Featured />
          <Why />
          <Clients />
          <Users />
          <Faq />
          <Contact />
          <Footer />
        </div>
      </>
  )
}

export default HomePage