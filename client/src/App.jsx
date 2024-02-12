import { useState } from 'react'
import Navbar from './Navbar/Navbar'

import './App.css'
import {Routes,Route } from 'react-router-dom'
import HomeComps from './HomeComps'
import Blog from './Blog/Blog'
import BlogData from './Blog/BlogData'


function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<HomeComps/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/view' element={<BlogData/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
