import React, { useState, useEffect } from "react";
import "./Product_List_Right.css";
import { ProductData } from "../ProductData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  removedFromWishlist,
  setAddItemtoWishlist,
} from "../../../Redux/WishSlice";

const Product_List_Right = () => {
  const [isHeartFilled, setIsHeartFilled] = useState({});
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.Wishlist.WishItems);

  
  useEffect(() => {
    const wishlistFromLocalStorage = JSON.parse(
      localStorage.getItem("Wishlist")
    );
    if (wishlistFromLocalStorage) {
      // Initialize isHeartFilled based on local storage wishlist items
      const heartFilledState = {};
      wishlistFromLocalStorage.forEach((item) => {
        heartFilledState[item.id] = true;
      });
      setIsHeartFilled(heartFilledState);
    }
  }, []);

  // Function to toggle the heart icon and add/remove from the wishlist
  const toggleHeart = (productId) => {
    const producttoWishlist = ProductData.find((data) => data.id === productId);
    if (!producttoWishlist) return;

    const isProductInWishlist = wishItems.some((item) => item.id === productId);

    if (isProductInWishlist) {
      dispatch(removedFromWishlist(producttoWishlist));
    } else {
      dispatch(setAddItemtoWishlist(producttoWishlist));
    }

    setIsHeartFilled((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <>
      <div className="prdct-lst-right w-full px-10 mx-auto mr-14">
        <div className="flex justify-between">
          <h1>Womens Clothing</h1>
          <h1>Recommended</h1>
        </div>
        <div className="flex justify-between flex-wrap gap-6 xl:gap-x-[100px]">
          {ProductData.map((data) => (
            <div
              className="plr-set my-6 relative cursor-pointer mx-auto "
              key={data.id}
            >
              {" "}
              <img src={data.image} alt="" />
              <div
                className={`bg-gray-200 min-h-[1rem] max-w-[2rem] absolute top-2 right-2  p-1 rounded-3xl ${
                  isHeartFilled[data.id] ? "filled-heart large" : ""
                }`}
                onClick={() => toggleHeart(data.id)}
              >
                {isHeartFilled[data.id] ? (
                  <AiFillHeart className="heart-celebrating" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <div className="flex w-100 mt-6 items-center">
                <div className="w-3/4">
                  <h2>{data.title}</h2>
                  <h3>{data.brand}</h3>
                </div>
                <button>{data.price}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product_List_Right;
