import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Store/Store'
const RouteLayout = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='store' element={<Store/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteLayout