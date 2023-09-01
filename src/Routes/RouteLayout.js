import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Store/Store'
import ProductDetails from '../Pages/Product-Details/ProductDetails'
import Products from '../Pages/Products/Products'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Blog from '../Pages/Blog/Blog'
import Vendor from '../Pages/Vendor/Vendor'

import RegSignButton from '../Pages/RegSignButton/RegSignButton'
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'

import Services from "../Pages/Services/Services";

import Order from '../Pages/Order/Order'

import VendorButtons from '../Pages/VendorButtons/VendorButtons'
import SussPage from '../Pages/SussPage/SussPage'


const RouteLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AboutUs />} />


          <Route path="blog" element={<Blog/>} />
          <Route path="vendor" element={<Vendor/>} />
          <Route path="sign" element={<RegSignButton/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage/>} />

          <Route path="services" element={<Services />} />

          <Route path="order" element={<Order />} />

          <Route path="vendorbutton" element={<VendorButtons />} />
          <Route path="suss" element={<SussPage />} />
     </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteLayout;
