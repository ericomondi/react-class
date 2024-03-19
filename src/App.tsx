import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeUpdate from './assets/newComponent'
import Counters from './assets/counters'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoApp from './assets/TodoApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <TodoApp/>

      
      
    </>
  )
}

export default App
