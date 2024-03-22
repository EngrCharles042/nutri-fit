import { Footer } from "../../../utils/Footer"
import { Header } from "../../../utils/Header"
import { Choice } from "./Choice"
import { Fitness } from "./Fitness"
import { Cover } from "./Cover"
import { Instructors } from "./FitnessInstructors"
import { Yoga } from "./Yoga"
import { YogaInstructors } from "./YogaInstructors"
import { Pilates } from "./Pilates"
import { PilateInstructors } from "./PilateInstructors"

const ExercisePage = () => {
    return (
      <>
          <div className="m-auto bg-yellow-50">
            <Header />
            <Cover />
            <Choice />
            <Fitness />
            <Instructors />
            <Yoga />
            <YogaInstructors />
            <Pilates />
            <PilateInstructors />
            <Footer />
          </div>
        </>
    )
  }
  
  export default ExercisePage