import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
