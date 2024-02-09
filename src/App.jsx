import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import './App.css'
import Projects from './Projects/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App
