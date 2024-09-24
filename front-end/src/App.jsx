import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOder/PlaceOder'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {

 const[showLogin,setShowLogin] =useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
