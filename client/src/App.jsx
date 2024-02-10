import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import './App.css'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
