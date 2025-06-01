import React, { useEffect, useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
//import About from './components/about'
import Cart from './components/cart/Cart'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import CheckOut from './components/checkout/CheckOut'
import PaymentConfirmation from './components/checkout/PaymentConfirmation'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart from localStorage on app start
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path="/products/*" element={<Products />} />
          <Route path='/about/'  element= {<About />} />
          <Route path='/contact/'  element= {<Contact />} />
          <Route path='/cart/'  element= {<Cart />} />
          <Route path='/' element={<PrivateRoute />} >
               <Route path='/checkout/'  element= {<CheckOut />} />
               <Route path='/order-confirm/'  element= {<PaymentConfirmation />} />
          </Route>
          <Route path="/" element={<PrivateRoute publicPage />} >
              <Route path='/login/'  element= {<LogIn />} />
              <Route path='/register/'  element= {<Register />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position='bottom-center' />
    </React.Fragment>
  )
}

export default App
