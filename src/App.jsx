import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/Chat'


function App() {


  return (
    <>
   
   <div>
    <Navbar/>
   </div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Product/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />

     </Routes>
     <WhatsAppFloat/>
     <Footer/>
    </>
  )
}

export default App
