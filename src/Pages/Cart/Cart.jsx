import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Rightarrow from "../../assets/images/Cart/rightArrow.svg";
import img1 from "../../assets/images/Cart/img1.png"
import minus from "../../assets/images/Cart/minus.png";
import plus from "../../assets/images/Cart/plus.png";
import {RiDeleteBinLine} from "react-icons/ri"

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  return (
    <>
      <div w-full h-auto>
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
          <table className="w-full">
            <tbody>
              <tr className="bg-[#3C4242] text-white font-medium  text-lg">
                <td className="py-4 ">PRODUCT DETAILS</td>
                <td className="">PRICE</td>
                <td>QUANTITY</td>
                <td>SHIPPING</td>
                <td>SUBTOTAL</td>
                <td>ACTION</td>
              </tr>

              <tr className=" border-b border-[#BEBCBD] ">
                <td className="flex py-8">
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <div className="ms-2">
                    <h1 className="text-[#3C4242] font-bold text-lg">
                      Blue Flower Print Crop Top
                    </h1>
                    <h2 className="text-[#807D7E] font-medium text-sm mt-2">
                      Color : Yellow
                    </h2>
                    <h2 className="text-[#807D7E] font-medium text-sm">
                      Size : M
                    </h2>
                  </div>
                </td>
                <td className="">
                  <p className="text-[#3C4242] font-bold text-lg">$29.00</p>
                </td>
                <td className="">
                  <div className="bg-[#F6F6F6] text-[#3C4242] font-semibold text-base flex items-center gap-2">
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
                  <p className="text-[#BEBCBD] text-lg font-bold">Login to Calculate</p>
                </td>
                <td className="">
                  <p className="text-[#3C4242] font-bold text-lg">$29.00</p>
                </td>
                <td >
                  <RiDeleteBinLine className="w-6 h-6 text-red-500 cursor-pointer"/>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
