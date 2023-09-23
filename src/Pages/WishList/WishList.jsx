import React from "react";
import "./WishList.css";
import arrow from "../../assets/images/WishList/arrow.png";
import Navbar from "../../layout/Navbar";
import WishlistSidebar from "../WishlistSidebar/WishlistSidebar";
import close from "../../assets/images/WishList/close.png";
import blue from "../../assets/images/WishList/blue.png";
import yellow from "../../assets/images/WishList/yellow.png";
import white from "../../assets/images/WishList/white.png";
const WishList = () => {
  return (
    <>
      <Navbar />
      <div className="wishlist px-16">
        <div className="paths gap-3">
          <p className="wish-home">Home</p>

          <img src={arrow} alt="" className="wish-arrow" />

          <p className="wish-acnt">My Account</p>
          <img src={arrow} alt="" className="wish-arrow" />
          <p className="path-wish">Wishlist</p>
        </div>
        <div className="wish-list gap-10">
         
          <div className="wish-t">
            <p className="Wishlist-title">Wishlist</p>

            <div className="wishlist-order">
              <img className="wishlist-close" src={close} alt="" />
              <img className="wishlist-img" src={blue} alt="" />
              <div className="wishlist-text">
                <p className="wishlist-ttl">Blue Flower Print Crop Top</p>
                <div className="wishlist-color">
                  <p className="list-color">color:</p>
                  <p className="wishlist-clr">Yellow</p>
                </div>
                <div className="wishlist-quantity">
                  <p className="quantity-title">Quantity:</p>
                  <p className="qntity">1</p>
                </div>
              </div>
              <p className="wishlist-rate">$29.00</p>
              <button className="wishlist-addcart-button">Add to cart</button>
            </div>

            <div className="wishlist-order">
              <img className="wishlist-close" src={close} alt="" />
              <img className="wishlist-img" src={yellow} alt="" />
              <div className="wishlist-text">
                <p className="wishlist-ttl">Blue Flower Print Crop Top</p>
                <div className="wishlist-color">
                  <p className="list-color">color:</p>
                  <p className="wishlist-clr">Yellow</p>
                </div>
                <div className="wishlist-quantity">
                  <p className="quantity-title">Quantity:</p>
                  <p className="qntity">1</p>
                </div>
              </div>
              <p className="wishlist-rate">$29.00</p>
              <button className="wishlist-addcart-button">Add to cart</button>
            </div>

            <div className="wishlist-order">
              <img className="wishlist-close" src={close} alt="" />
              <img className="wishlist-img" src={white} alt="" />
              <div className="wishlist-text">
                <p className="wishlist-ttl">Blue Flower Print Crop Top</p>
                <div className="wishlist-color">
                  <p className="list-color">color:</p>
                  <p className="wishlist-clr">Yellow</p>
                </div>
                <div className="wishlist-quantity">
                  <p className="quantity-title">Quantity:</p>
                  <p className="qntity">1</p>
                </div>
              </div>
              <p className="wishlist-rate">$29.00</p>
              <button className="wishlist-addcart-button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
