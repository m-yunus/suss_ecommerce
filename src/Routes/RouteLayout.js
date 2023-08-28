import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Store/Store'
import ProductDetails from '../Pages/Product-Details/ProductDetails'
import Products from '../Pages/Products/Products'

import AboutUs from '../Pages/AboutUs/AboutUs'

import Blog from '../Pages/Blog/Blog'

const RouteLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product-details" element={<ProductDetails/>} />
          <Route path="products" element={<Products />} />

          <Route path="about" element={<AboutUs />} />


          <Route path="blog" element={<Blog/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteLayout