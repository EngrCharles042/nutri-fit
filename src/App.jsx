import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './components/pages/homepage/HomePage'
import ExercisePage from './components/pages/exercise/ExercisePage'
import AllergyFriendlyRecipePage from './components/pages/allergy-friendly recipe/AllergyFriendlyRecipePage'
import MealPlanPage from './components/pages/meal plan/MealPlanPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/exercise" element={<ExercisePage/>} />
        <Route path="/allergy-friendly-recipe" element={<AllergyFriendlyRecipePage/>} />
        <Route path="/meal-plan" element={<MealPlanPage/>} />
      </Routes>
    </>
  )
}

export default App