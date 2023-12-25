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
import Reviews from './Components/Reviews/Reviews'
import SideBar from './Components/SideBar/SideBar'
import Contact from './Components/Contact/Contact'
import { Loader } from './Components/Loader/Loader'
import DataFatch from './Components/DataFatch/DataFatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation/>
      <TopFixedBannner/>
      
    </>
  )
}

export default App
