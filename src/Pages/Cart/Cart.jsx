import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Rightarrow from "../../assets/images/Cart/rightArrow.svg";
import img1 from "../../assets/images/Cart/img1.png";

import minus from "../../assets/images/Cart/minus.png";
import plus from "../../assets/images/Cart/plus.png";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";
import Footer from "../../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCartTotalAmount, selectTotalAmount, setDecreaseQty, setGetTotals, setIncreaseQty, setRemoveItem } from "../../Redux/CartSlice";
import CartEmpty from "./CartEmpty/CartEmpty";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [CartListItems, setCartListItems] = useState([]);
  const [mobviewitems,setmobviewitems]=useState([])
  const dispatch=useDispatch()
  const CartItems = useSelector((state) => state.Cart.CartItems);
  const navigate=useNavigate()
  const totalAmount=useSelector(selectCartTotalAmount)
 console.log(totalAmount);
 
  const DecreaseQuantity = (items) => {
    console.log(items);
  dispatch(setDecreaseQty(items))
  };
  const Increasequantity=(items)=>{
    dispatch(setIncreaseQty(items))
  }
 

  const fetchCartItems = async () => {
   
    
   console.log(CartItems);
    const headers = {
      'x-access-token': sessionStorage.getItem('user-token'),
    };
  
    try {
      const res = await axios.get('https://suss.onrender.com/api/user/cart', { headers });
      console.log(res);
  
  
      // Set response data into localStorage
      localStorage.setItem('cart', JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchCartItems()
  },[])
  useEffect(() => {
    const Cartmapping = CartItems.map((items) => (
      <tr className=" border-b border-[#BEBCBD]  " key={items._id}>
        <td className="flex py-8  ">
          <div className="w-2/3">
            <img className="w-2/3 h-full" src={`https://suss.onrender.com/${items?.images.image1}`} alt="img" />
          </div>
          <div className="">
            <h1 className="text-[#3C4242] font-bold text-lg">{items?.product?.name || items?.name}</h1>
            <h2 className="text-[#807D7E] font-medium text-sm mt-2">
              Color : {items?.variation?.color}
            </h2>
            <h2 className="text-[#807D7E] font-medium text-sm">Size : {items?.variation?.size}</h2>
          </div>
        </td>
        <td className="">
          <div className="flex justify-center">
            <p className="text-[#3C4242] font-bold text-lg">{items?.variation?.offer_price || items?.price}</p>
          </div>
        </td>
        <td className=" ">
          <div className=" justify-center bg-[#F6F6F6] text-[#3C4242] font-semibold text-base flex items-center gap-2">
            <button onClick={()=>DecreaseQuantity(items)}>
              <img src={minus} alt="" />
            </button>{" "}
            {items?.count}
            <button onClick={()=>Increasequantity(items)}>
              <img src={plus} alt="" />
            </button>
          </div>
        </td>
        <td className="">
          <div className="flex justify-center">
            <p className="text-[#BEBCBD] text-lg font-bold">
              Login to Calculate
            </p>
          </div>
        </td>
        <td className="">
          <div className="flex justify-center">
            <p className="text-[#3C4242] font-bold text-lg">{items?.variation?.offer_price || items?.price * items?.count}</p>
          </div>
        </td>
        <td>
          <div className="flex justify-center">
            <RiDeleteBinLine className="w-6 h-6 text-red-500 cursor-pointer" onClick={()=>handleDelete(items)} />
          </div>
        </td>
      </tr>
    ));
    
    setCartListItems(Cartmapping);
    const mobview=CartItems.map((items) => (  
      <div className=" cart-mobile px-4 w-full    flex ">
      <div className=" mx-auto flex   items-center">
        <div className="flex  mx-auto items-center gap-6">
          <img
            className="w-[140px]  object-contain h-[200px]"
            src={`https://suss.onrender.com/${items?.images.image1}`}
            alt=""
          />
          <div className="w-auto  ">
            <h1 className="text-[#3C4242] font-bold text-base">
             {items?.title} 
            </h1>
            <h2 className="text-[#807D7E] font-medium text-sm ">
              Color : Levender
            </h2>
            <h2 className="text-[#807D7E] font-medium text-sm">
              Size : XXL
            </h2>
            <p className="text-[#3C4242] font-bold text-sm  text-left mt-2">
              Price : {items?.price}
            </p>
            <div className="  bg-[#F6F6F6] text-[#3C4242] font-semibold text-sm flex items-center gap-2">
              <button onClick={()=>DecreaseQuantity(items)}>
                <img src={minus} alt="" />
              </button>{" "}
              {items?.cartQuantity}
              <button onClick={()=>Increasequantity(items)}>
                <img src={plus} alt="" />
              </button>
            </div>
            <p className="text-[#3C4242] font-bold text-sm text-left">
              SUB TOTAL : {items?.price * items?.cartQuantity}
            </p>
            <div className="flex mt-2">
              <RiDeleteBinLine className="w-6 h-6  text-red-500 cursor-pointer" onClick={()=>handleDelete(items)}  />
            </div>
          </div>
        </div>
      </div>
    </div>
    ));
    setmobviewitems(mobview)
  }, [CartItems]);
  useEffect(()=>{
    dispatch(setGetTotals())
  },[dispatch,CartItems])
  const handleDelete=async(items)=>{
    console.log(items?.variation);
    const headers = {
      'x-access-token': sessionStorage.getItem('user-token'),
    };
    
    try {
      const res= await axios.post(`https://suss.onrender.com/api/user/remove-cart-item`,{variationId :items?.variation?._id},{headers})
      console.log(res.data);
     
      dispatch(setRemoveItem(items))
      fetchCartItems()
    } catch (error) {
      if(error.response.status === 401){
        dispatch(setRemoveItem(items))
      }else{
        toast.error("error occured")
      }
     
    }
       
      }
  return (
    <>
      <div className="" w-full h-auto>
        <Navbar />
        <div className={CartItems.length === 0 ? "hidden" : ` px-6 py-4 flex flex-col gap-4`}>
          <div className="flex gap-3 items-center">
            <h2 className="text-[#807D7E] font-medium">Home</h2>
            <img src={Rightarrow} alt="" className="" />
            <h2 className="text-[#3C4242]">Add To Cart</h2>
          </div>
          <div>
            <h2 className="text-xs text-[#807D7E]">
              Please fill in the fields below and click place order to complete
              your purchase!
            </h2>
            <h2 className="text-[#807D7E] text-xs py-1">
              Already registered?{" "}
              <span className="text-[#FD7B85] font-semibold text-xs">
                Please login here
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className="px-6">
          <table className="cart-table w-full">
            <tbody>
              <tr className={CartItems.length===0 ? "hidden" :` bg-[#3C4242] text-white font-medium  text-center text-lg`   }>
                <td className="py-4  w-[30%] ">PRODUCT DETAILS</td>
                <td className="  ">PRICE</td>
                <td className="   ">QUANTITY</td>
                <td className="">SHIPPING</td>
                <td className="">SUBTOTAL</td>
                <td className="">ACTION</td>
              </tr>

              {CartItems.length !==0 ? CartListItems : <CartEmpty/> }
              {/* <tr className=" border-b border-[#BEBCBD]  ">
                <td className="flex py-8 ms-4">
                  <div>
                    <img src={img2} alt="" />
                  </div>
                  <div className="ms-2">
                    <h1 className="text-[#3C4242] font-bold text-lg">
                      Levender Hoodie
                    </h1>
                    <h2 className="text-[#807D7E] font-medium text-sm mt-2">
                      Color : Levender
                    </h2>
                    <h2 className="text-[#807D7E] font-medium text-sm">
                      Size : XXL
                    </h2>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#3C4242] font-bold text-lg">$119.00</p>
                  </div>
                </td>
                <td className=" ">
                  <div className=" justify-center bg-[#F6F6F6] text-[#3C4242] font-semibold text-base flex items-center gap-2">
                    <button onClick={decreaseQuantity}>
                      <img src={minus} alt="" />
                    </button>{" "}
                    {quantity}
                    <button onClick={increaseQuantity}>
                      <img src={plus} alt="" />
                    </button>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#BEBCBD] text-lg font-bold">
                      Login to Calculate
                    </p>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#3C4242] font-bold text-lg">$219.00</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <RiDeleteBinLine className="w-6 h-6 text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr> */}

              {/* <tr className=" border-b border-[#BEBCBD] justify-center ">
                <td className="flex py-8 ms-4">
                  <div>
                    <img src={img3} alt="" />
                  </div>
                  <div className="ms-2">
                    <h1 className="text-[#3C4242] font-bold text-lg">
                      Black Sweatshirt
                    </h1>
                    <h2 className="text-[#807D7E] font-medium text-sm mt-2">
                      Color : Black
                    </h2>
                    <h2 className="text-[#807D7E] font-medium text-sm">
                      Size : XXL
                    </h2>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#3C4242] font-bold text-lg">$123.00</p>
                  </div>
                </td>
                <td className=" ">
                  <div className=" justify-center bg-[#F6F6F6] text-[#3C4242] font-semibold text-base flex items-center gap-2">
                    <button onClick={decreaseQuantity}>
                      <img src={minus} alt="" />
                    </button>{" "}
                    {quantity}
                    <button onClick={increaseQuantity}>
                      <img src={plus} alt="" />
                    </button>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#BEBCBD] text-lg font-bold">
                      Login to Calculate
                    </p>
                  </div>
                </td>
                <td className="">
                  <div className="flex justify-center">
                    <p className="text-[#3C4242] font-bold text-lg">$123.00</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <RiDeleteBinLine className="w-6 h-6 text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>

        {/* MOBILE - VIEW */}

       {mobviewitems}

        <div className={CartItems.length===0 ? "hidden" :" cart-bottom  w-full flex px-20 py-10 justify-between   bg-[#F6F6F6]"}>
          <div className="cart-btm-1">
            <h1 className="text-[#3C4242]   text-2xl font-semibold">
              Discount Codes
            </h1>
            <p className="text-[#807D7E] text-base mt-2 text-left">
              Enter your coupon code if you have one
            </p>
            <div className="  coupon-code-cart flex mt-6 border border-[#BEBCBD] rounded-xl w-[330px]">
              <input
                type="text"
                className="border-none rounded-xl px-3 "
                placeholder="Enter coupon code"
              />
              <button className="bg-[#FD7B85] text-white p-2 w-[130px] text-base font-semibold rounded-xl rounded-l-none">
                Apply Coupon
              </button>
            </div>
            <div className="cntn-shopping  mt-6  mx-auto px-auto">
              <button className="bg-white border mx-auto text-[#3C4242] font-semibold text-base border-[#BEBCBD]  px-4 py-2 rounded-xl">
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="cart-calculation">
            <div className="flex  text-[#3C4242] text-xl font-medium">
              <h1 className="w-40 ">Sub Total </h1>
              <h1>${totalAmount.toFixed(2)}</h1>
            </div>
            <div className="flex  text-[#3C4242] text-xl font-medium mt-2">
              <h1 className="w-40 ">Shipping </h1>
              <h1>$5.00 </h1>
            </div>
            <div className="flex  text-[#3C4242] text-xl font-bold mt-6">
              <h1 className="w-40 ">Grand Total </h1>
              <h1>${totalAmount.toFixed(2)}</h1>
            </div>
            <hr className="my-4  bg-[#BEBCBD]" />
         <Link to="/checkout" className=" prcd-cart bg-[#FD7B85] rounded-lg px-2 py-2 text-white  font-semibold text-lg">
              Proceed to Checkout{" "}
              </Link>   
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
