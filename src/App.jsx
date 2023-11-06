import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopFixedBannner from './Components/TopFixedBannner/TopFixedBannner'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopFixedBannner/> 
      <About/>
    </>
  )
}

export default App
