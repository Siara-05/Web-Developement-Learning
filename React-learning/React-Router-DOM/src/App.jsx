import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import { Routes,Route } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App