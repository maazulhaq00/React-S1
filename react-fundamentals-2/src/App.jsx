import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State1 from './pages/State1'
import State2 from './pages/State2'
import State3 from './pages/State3'
import State4 from './pages/State4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <State1 /> */}
    {/* <State2 /> */}
    {/* <State3 /> */}
    <State4 />
    </>
  )
}

export default App
