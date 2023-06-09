// Liabrary Or Modules
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"
import WebFont from "webfontloader";
/**
 * Pages 
 */
import Home from './pages/user/Home';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import ErrorPage from './pages/user/ErrorPage';
import Products from './pages/user/Products';
import Singleproduct from './pages/user/Singleproduct';
import ForgotPassword from './pages/user/ForgotPassword';
import ResetPassword from './pages/user/ResetPassword';
import Faq from './pages/user/Faq';

import Otp from './pages/user/Otp';

// testing components
import ProductCard from './components/ProductCard';

// import SubCategorySlider from './Layouts/SubCategorySlider/SubCategorySlider';


function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  //get api key for payment 
  async function GetApiKey(){
 const {data}=await axios.get("/api/v1/stripeapikey")
 setStripeApiKey(data.stripeApiKey)
  }
  // benifits of loading fonts in app.js
  useEffect(()=>{
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }})
  })
  return (
<Router>
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='*' element={<ErrorPage/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
<Route exact path='/password/forgot' element ={<ForgotPassword/>}/>
<Route exact path='/password/reset/:token' element={<ResetPassword/>}/>
<Route path='/password/otp/:token' element={<Otp/>} />
{/* 404 page  */}
<Route path='/product' element={<ProductCard/>} />
<Route path='/product/:id' element={<Singleproduct/>} />
<Route path='/cart'/>
{/* User Routes */}
<Route path='/about' element={<Faq/>}/>



{/* protected Routes are down below */}
  </Routes>
</Router>

  )
}

export default App;
