import React from 'react'
import './Order.css'
import Navbar from '../../layout/Navbar'
import profile from '../Order/Orderimages/profile.png'

const Order = () => {
  return (
    <>
    <Navbar/>
   
    <div className="order px-10">
    <div className="ord-cards">
        <h2 className="ord-card-title">Order</h2>
        <div className="ord-main-card gap-10 mt-7">
        <div className="ord-card ">
        <div className="ord-card1 ">
            <img src="" alt="" />
          
        </div>
        <h2 className='ord-card-text'>jxhfkjdhkg</h2>
        </div>
        <div className="ord-card">
        <div className="ord-card2">
            <img src="" alt="" />
        </div>
        <h2 className='ord-card-text'>sljfhkjhgkd</h2>
        </div>
        </div>
       
    </div>
        <div className="name-icon gap-3">
            <img className='pr-icon' src={profile} alt="" />
            <h2 className='name-title'>Name</h2>
        </div>
        <div className="order-sidebar">
            
            <div className="first-bar">
                <h2 className='ordr-text1'>Order</h2>
                <h2 className="order-text2">Order and Return</h2>
            </div>
           
          
            <div className='secnd-bar'>
                <h2 className="ordr-text3">Your Stylists</h2>
      
            </div>
            <hr className="hr2" />
         
            
           
            <div className="thrd-bar">
                <h2 className="ordr-text4">Coupons</h2>
                <hr className="hr3" />
                <h2 className="ordr-text5">Credits</h2>
                <hr className="hr4" />
                <h2 className="ordr-text6">Pay later</h2>
                <hr className="hr5" />
            </div>
           
           
            
        </div>




    </div>
   
  
      
    </>
  )
}

export default Order
