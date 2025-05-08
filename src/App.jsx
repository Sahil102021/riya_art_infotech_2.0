import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RouteLoader from "./componate/ul/RouteLoader";
import './App.css'
import Product from './pages/Product'
import ProductPage from './pages/ProductPage'
import Footer from './componate/Footer'
import Header from './componate/Header'

function App() {

  return (
    <div>
    <RouteLoader />
    <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default App
