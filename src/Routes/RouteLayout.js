import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Store/ProductStore'
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
import Reset_Password from '../Pages/Reset_Password/Reset_Password'
import Check_Email from '../Pages/Check_Email/Check_Email'
import Verification from '../Pages/Verification/Verification'
import CheckOut from '../Pages/CheckOut/CheckOut'
import Product_List_Page from '../Pages/Product_List_Page/Product_List_Page'

import WishList from '../Pages/WishList/WishList'
import Cart from '../Pages/Cart/Cart'
import CartEmpty from '../Pages/Cart/CartEmpty/CartEmpty'

const RouteLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product-list-page/:id" element={<ProductDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AboutUs />} />

          <Route path="blog" element={<Blog />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="sign" element={<RegSignButton />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="services" element={<Services />} />

          <Route path="order" element={<Order />} />

          <Route path="vendorbutton" element={<VendorButtons />} />

          <Route path="reset-password" element={<Reset_Password />} />
          <Route path="check-email" element={<Check_Email />} />
          <Route path="verification" element={<Verification />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="product-list-page" element={<Product_List_Page />} />
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Cartempty' element={<CartEmpty/>}/>
          <Route path="wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteLayout;
