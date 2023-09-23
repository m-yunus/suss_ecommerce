import React, { useEffect, useState } from "react";
import "./WishList.css";
import arrow from "../../assets/images/WishList/arrow.png";
import Navbar from "../../layout/Navbar";

import close from "../../assets/images/WishList/close.png";
import { useDispatch, useSelector } from "react-redux";
import { removedFromWishlist } from "../../Redux/WishSlice";

const WishList = () => {
  const wishItems = useSelector((state) => state.Wishlist.WishItems);
  const dispatch = useDispatch();
  const [wishlistItems, setWishlistItems] = useState([]);
  console.log(wishItems);
  const removeistitems = (productId) => {
    dispatch(removedFromWishlist(productId));
  };
  useEffect(() => {
    // You can use map to generate JSX elements for each item in the wishlist
    const wishlistItems = wishItems.map((item, index) => (
      <div className="wishlist-order" key={index}>
        <img
          className="wishlist-close cursor-pointer"
          src={close}
          alt=""
          onClick={() => removeistitems(item)}
        />
        <img className="wishlist-img" src={item.image} alt="" />
        <div className="wishlist-text">
          <p className="wishlist-ttl">{item.title}</p>{" "}
          {/* Use item.title here */}
          <div className="wishlist-color">
            <p className="list-color">color:</p>
            <p className="wishlist-clr">{item.color}</p>{" "}
            {/* Use item.color here */}
          </div>
          <div className="wishlist-quantity">
            <p className="quantity-title">Quantity:</p>
            <p className="qntity">{item.quantity}</p>{" "}
            {/* Use item.quantity here */}
          </div>
        </div>
        <p className="wishlist-rate">{`${item.price}`}</p>{" "}
        {/* Use item.price here */}
        <button className="wishlist-addcart-button">Add to cart</button>
      </div>
    ));

    setWishlistItems(wishlistItems);
  }, [wishItems]);

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
            {wishlistItems} 
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
