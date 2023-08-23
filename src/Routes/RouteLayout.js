import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'

import Products from '../Pages/Products/Products'
const RouteLayout = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>

     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteLayout