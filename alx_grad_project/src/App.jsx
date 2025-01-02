import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './components/navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/place-order" element={<PlaceOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
