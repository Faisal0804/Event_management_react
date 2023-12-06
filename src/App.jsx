import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopFixedBannner from './Components/TopFixedBannner/TopFixedBannner'
import About from './Components/About/About'
import TopNavigation from './Components/TopNavigation/TopNavigation'
import Features from './Components/Features/Features'
import Summary from './Components/Summary/Summary'
import Analysis from './Components/Analysis/Analysis'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation/>
      <TopFixedBannner/> 
      <About/>
      <Analysis/>
      <Testimonial/>
    </>
  )
}

export default App
