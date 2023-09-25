import React from 'react'
import './WishlistSide.css'

import order from '../../../assets/images/Wishlist-Sidebar/order.png'
import heart from '../../../assets/images/Wishlist-Sidebar/heart.png'
import user from '../../../assets/images/Wishlist-Sidebar/user.png'
import sign from '../../../assets/images/Wishlist-Sidebar/sign.png'
const WishlistSidebar = () => {
  return (
    <>
    <div className="wish-sidebar">
        <div className="wish-head gap-3">
            <div className="wish-head-line"></div>
            <p className="wish-head-title">Hello Jhanvi</p>
        </div>
        <p className="wish-sub-text px-3">Welcome to your Account</p>

        <div className="wish-sidebar-list px-4">
            <div className="wish-orders gap-3">
                <img src={order} alt="" className="wish-ordr-img" />
                <p className="wish-ordr-title">My Orders</p>
            </div>
            <div className="wish-wishlist gap-3">
            <img src={heart} alt="" className="wish-wish-img" />
                <p className="wish-wish-title">Wishlist</p>
            </div>
            <div className="wish-myinfo gap-3">
            <img src={user} alt="" className="wish-info-img" />
                <p className="wish-info-title">My Info</p>
            </div>
            <div className="wish-signout gap-3">
            <img src={sign} alt="" className="wish-sign-img" />
                <p className="wish-sign-title">Sign Out</p>
            </div>
        </div>

    </div>
 
      
    </>
  )
}

export default WishlistSidebar
