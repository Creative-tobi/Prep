// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './components/card'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Navbar />
    <Home/>
    <About />
    <Contact/>
    </>
  )
}

export default App
