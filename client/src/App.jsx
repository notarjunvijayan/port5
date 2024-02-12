import { useState } from 'react'
import Navbar from './Navbar/Navbar'

import './App.css'
import {Routes,Route } from 'react-router-dom'
import HomeComps from './HomeComps'
import Blog from './Blog/Blog'


function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<HomeComps/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
