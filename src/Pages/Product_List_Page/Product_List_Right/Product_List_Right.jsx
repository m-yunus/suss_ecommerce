import React, { useState, useEffect } from "react";
import "./Product_List_Right.css";
import { ProductData } from "../ProductData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  removedFromWishlist,
  setAddItemtoWishlist,
} from "../../../Redux/WishSlice";
import { useNavigate, useParams } from "react-router-dom";

const Product_List_Right = ({ProductData}) => {
  const [isHeartFilled, setIsHeartFilled] = useState({});

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const wishItems = useSelector((state) => state.Wishlist.WishItems);

  
  useEffect(() => {
    const wishlistFromLocalStorage = JSON.parse(
      localStorage.getItem("Wishlist")
    );
    if (wishlistFromLocalStorage) {
      // Initialize isHeartFilled based on local storage wishlist items
      const heartFilledState = {};
      wishlistFromLocalStorage.forEach((item) => {
        heartFilledState[item._id] = true;
      });
      setIsHeartFilled(heartFilledState);
    }
  }, []);

  // Function to toggle the heart icon and add/remove from the wishlist
  const toggleHeart = (productId) => {
    const producttoWishlist = ProductData.find((data) => data._id === productId);
    if (!producttoWishlist) return;

    const isProductInWishlist = wishItems.some((item) => item._id === productId);

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

  const handlenavigate=(data)=>{
 console.log(data.id);
 navigate(`/product-list-page/${data._id}`)
  }
const data= ProductData.map((items)=>{
  console.log(items?.images?.image1);
})
console.log(data);
  return (
    <>
      <div className="prdct-lst-right w-full px-10 mx-auto mr-14">
        <div className="flex justify-between text-xs sm:text-base md:text-base lg:text-lg xl:text-xl font-semibold">
          <h1>Women’s Clothing</h1>
          <h1>Recommended</h1>
        </div>
        <div className="flex justify-between flex-wrap gap-2 xl:gap-x-[100px]">
          {ProductData.map((data) => (
            <div
              className="max-w-[8rem] sm:max-w-[9rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[15rem] my-6 relative cursor-pointer  "
              key={data._id}
            >
              {" "}
              <img className="h-[12vw]" src={`https://suss.onrender.com/${data?.images?.image1}`} alt="img"  onClick={()=>{handlenavigate(data)}}/>
              <div
                className={`bg-gray-200 min-h-[1rem] max-w-[2rem] absolute top-2 right-2  p-1 rounded-3xl ${
                  isHeartFilled[data.id] ? "filled-heart large" : ""
                }`}
                onClick={() => toggleHeart(data._id)}
              >
                {isHeartFilled[data._id] ? (
                  <AiFillHeart className="heart-celebrating" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <div className="flex  flex-col  mt-6 items-center">
                <div className="w-full min-h-[2rem]">
                  <h2 className="text-xs sm:text-base md:text-lg  ">{data.name}</h2>
                </div>
                <div className="w-full flex items-center">
                <h3 className="text-[8px] md:text-[12px] text-[#807D7E] w-1/2">{data.brand}</h3>
                <button className="w-1/2">{data?.price}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product_List_Right;
