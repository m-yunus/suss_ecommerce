import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Rightarrow from "../../assets/images/Cart/rightArrow.svg";
import img1 from "../../assets/images/Cart/img1.png";
import img2 from "../../assets/images/Cart/img2.png";
import img3 from "../../assets/images/Cart/img3.png";
import minus from "../../assets/images/Cart/minus.png";
import plus from "../../assets/images/Cart/plus.png";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Cart.css";
import Footer from "../../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setRemoveItem } from "../../Redux/CartSlice";
import CartEmpty from "./CartEmpty/CartEmpty";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [CartListItems, setCartListItems] = useState([]);
  const dispatch=useDispatch()
  const CartItems = useSelector((state) => state.Cart.CartItems);
 
 
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleDelete=(items)=>{
    dispatch(setRemoveItem(items))
  }
  useEffect(() => {
    const Cartmapping = CartItems.map((items) => (
      <tr className=" border-b border-[#BEBCBD]  ">
        <td className="flex py-8  ms-4">
          <div>
            <img className="" src={items?.image} alt="" />
          </div>
          <div className="ms-2">
            <h1 className="text-[#3C4242] font-bold text-lg">{items?.title}</h1>
            <h2 className="text-[#807D7E] font-medium text-sm mt-2">
              Color : Yellow
            </h2>
            <h2 className="text-[#807D7E] font-medium text-sm">Size : M</h2>
          </div>
        </td>
        <td className="">
          <div className="flex justify-center">
            <p className="text-[#3C4242] font-bold text-lg">{items?.price}</p>
          </div>
        </td>
        <td className=" ">
          <div className=" justify-center bg-[#F6F6F6] text-[#3C4242] font-semibold text-base flex items-center gap-2">
            <button onClick={decreaseQuantity}>
              <img src={minus} alt="" />
            </button>{" "}
            {items?.cartQuantity}
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
            <p className="text-[#3C4242] font-bold text-lg">{items?.price}</p>
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
  }, [CartItems]);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
      <div className="" w-full h-auto>
        <Navbar />
        <div className="px-6 py-4 flex flex-col gap-4">
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
              <tr className="bg-[#3C4242] text-white font-medium  text-center text-lg   ">
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

        <div className=" cart-mobile px-4 w-full    flex ">
          <div className=" mx-auto flex   items-center">
            <div className="flex  mx-auto items-center gap-6">
              <img
                className="w-[140px]  object-contain h-[200px]"
                src={img1}
                alt=""
              />
              <div className="w-auto  ">
                <h1 className="text-[#3C4242] font-bold text-base">
                  Levender Hoodie
                </h1>
                <h2 className="text-[#807D7E] font-medium text-sm ">
                  Color : Levender
                </h2>
                <h2 className="text-[#807D7E] font-medium text-sm">
                  Size : XXL
                </h2>
                <p className="text-[#3C4242] font-bold text-sm  text-left mt-2">
                  Price : $29.00
                </p>
                <div className="  bg-[#F6F6F6] text-[#3C4242] font-semibold text-sm flex items-center gap-2">
                  <button onClick={decreaseQuantity}>
                    <img src={minus} alt="" />
                  </button>{" "}
                  {quantity}
                  <button onClick={increaseQuantity}>
                    <img src={plus} alt="" />
                  </button>
                </div>
                <p className="text-[#3C4242] font-bold text-sm text-left">
                  SUB TOTAL : $29.00
                </p>
                <div className="flex mt-2">
                  <RiDeleteBinLine className="w-6 h-6  text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-bottom  w-full flex px-20 py-10 justify-between   bg-[#F6F6F6]">
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
              <h1>$513.00 </h1>
            </div>
            <div className="flex  text-[#3C4242] text-xl font-medium mt-2">
              <h1 className="w-40 ">Shipping </h1>
              <h1>$5.00 </h1>
            </div>
            <div className="flex  text-[#3C4242] text-xl font-bold mt-6">
              <h1 className="w-40 ">Grand Total </h1>
              <h1>$518.00 </h1>
            </div>
            <hr className="my-4  bg-[#BEBCBD]" />
            <button className=" prcd-cart bg-[#FD7B85] rounded-lg px-2 py-2 text-white  font-semibold text-lg">
              Proceed to Checkout{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
