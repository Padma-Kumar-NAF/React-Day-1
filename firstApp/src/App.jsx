import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeList from "./components/RecipeList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <h1>Recipe Explorer</h1>
      <RecipeList />
    </div>
    </>
  )
}

export default App
