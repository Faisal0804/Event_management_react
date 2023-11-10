import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopFixedBannner from './Components/TopFixedBannner/TopFixedBannner'
import About from './Components/About/About'
import TopNavigation from './Components/TopNavigation/TopNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation/>
      <TopFixedBannner/> 
      <About/>
    </>
  )
}

export default App
