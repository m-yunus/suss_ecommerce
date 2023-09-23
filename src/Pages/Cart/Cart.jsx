import React from "react";
import Navbar from "../../layout/Navbar";
import Rightarrow from "../../assets/images/Cart/rightArrow.svg";

const Cart = () => {
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
        <div>
            
        </div>
      </div>
    </>
  );
};

export default Cart;
