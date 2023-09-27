import React, { useEffect, useState } from "react";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import arrow from "../../../src/assets/images/Wishlist-Sidebar/arrow.png";
import close from "../../../src/assets/images/Order-Details/close.png";
import product1 from "../../../src/assets/images/Order-Details/product1.png";
import product2 from "../../../src/assets/images/Order-Details/product2.png";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { BsCircleFill } from "react-icons/bs";

const Order_Details = () => {
  const [showProductListLeft, setShowProductListLeft] = useState(
    window.innerWidth > 769
  );
  const [showRightSection, setShowRightSection] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowProductListLeft(window.innerWidth > 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleLeftSection = () => {
    setShowProductListLeft(!showProductListLeft);
    setShowRightSection(showProductListLeft);
  };

  return (
    <>
      <Navbar />
      <div className="contact-details-top mb-8 my-4  px-8 flex items-center gap-2 ">
        <p className="text-gray-400">Home</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-400">My Account</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-800">Order Details</p>
      </div>
      <div className="my-order-total sm:px-6 flex ">
        <div>{showProductListLeft && <WishlistSidebar />}</div>

        {showRightSection && (
          <div className="w-full px-1">
            <div className="px-1 sm:px-4 flex items-center gap-2">
              <LiaAngleLeftSolid />
              <h1 className="text-[#3C4242] font-bold  text-xl sm:text-2xl">
                Order Details
              </h1>
            </div>
            <div className="bg-[#f6f6f6] p-4  mt-2 w-full  flex justify-between flex-col sm:flex-row ">
              <span className="flex  flex-col gap-1   mb-1">
                <h1 className="text-[#3C4242] font-semibold text-sm sm:text-xl">
                  Order no: #123456789
                </h1>
                <h2
                  className="text-[#807D7E]  text-xs
                  sm:text-base font-semibold"
                >
                  Placed On 2 June 2023 2:40 PM
                </h2>{" "}
              </span>
              <span className="flex gap-1 items-center">
                <h2
                  className="text-[#807D7E]  text-sm
                  sm:text-lg font-semibold"
                >
                  Total :
                </h2>{" "}
                <h3 className=" font-semibold text-sm sm:text-lg text-[#3C4242]">
                  $143.00
                </h3>
              </span>
            </div>

            <div className="w-full px-1 sm:px-4 flex items-center relative justify-between my-10  sm:my-16">
              <div className="flex flex-col items-center">
                <BsCircleFill className="text-[#3C4242]" />
                <h1 className="text-xs sm:text-sm font-semibold text-[#000]">
                  Order placed
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="absolute h-0.5 w-[54%] bg-[#BEBCBD] top-1/4 transform -translate-y-1/2 sm:w-[58%]"></div>
                <BsCircleFill className="text-[#BEBCBD]" />
                <h1 className="text-xs sm:text-sm font-semibold text-[#000]">
                  Inprogress
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <div className="absolute h-0.5 w-[45%] bg-[#BEBCBD] top-1/4 transform -translate-y-1/2 sm:w-[55%]"></div>
                <BsCircleFill className="text-[#BEBCBD]" />
                <h1 className=" sm:text-sm text-xs font-semibold text-[#000]">
                  Shipped
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <BsCircleFill className="text-[#BEBCBD]" />
                <h1 className="text-xs sm:text-sm font-semibold text-[#BEBCBD]">
                  Delivered
                </h1>
              </div>
            </div>

            <div className="bg-[#F6F6F6] flex items-center my-10 px-1 py-2 sm:p-5 gap-2">
              <h1 className="text-[#807D7E] text-xs sm:text-base font-semibold">
                8 June 2023 3:40 PM
              </h1>
              <h1 className="text-[#3C4242] text-xs sm:text-base font-semibold">
                Your order has been successfully verified.
              </h1>
            </div>

            <div className="bg-[#f6f6f6] p-1 sm:p-6">
              <div className="flex justify-between ">
                <div className="flex ">
                  <img src={product1} alt="" />
                  <span className="flex flex-col ms-2 sm:ms-4 ">
                    <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                      Men Blue Shirt
                    </h1>
                    <span className="flex  mt-2 sm:mt-0">
                      <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                        Color :{" "}
                      </h1>
                      <h1 className="text-[#807D7E] sm:text-lg text-sm font-bold">
                        Blue
                      </h1>
                    </span>
                  </span>
                </div>
                <div className="flex  sm:flex-row flex-col">
                  <span className="flex ">
                    <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                      Qty :
                    </h1>
                    <h1 className="text-[#807D7E] sm:text-lg text-sm font-bold">
                      1
                    </h1>
                  </span>
                  <h1 className="sm:text-lg text-sm font-bold mt-2 sm:mt-0  text-[#807D7E]">
                    $29.00
                  </h1>
                </div>

                <span>
                  <img src={close} alt="" className=" cursor-pointer" />
                </span>
              </div>

              <hr className="my-6" />

              <div className="flex justify-between ">
                <div className="flex ">
                  <img src={product2} alt="" />
                  <span className="flex flex-col ms-2 sm:ms-4 ">
                    <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                      Men Blue Shirt
                    </h1>
                    <span className="flex  mt-2 sm:mt-0">
                      <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                        Color :{" "}
                      </h1>
                      <h1 className="text-[#807D7E] sm:text-lg text-sm font-bold">
                        Blue
                      </h1>
                    </span>
                  </span>
                </div>
                <div className="flex  sm:flex-row flex-col">
                  <span className="flex ">
                    <h1 className=" sm:text-lg text-sm font-bold text-[#3C4242]">
                      Qty :
                    </h1>
                    <h1 className="text-[#807D7E] sm:text-lg text-sm font-bold">
                      1
                    </h1>
                  </span>
                  <h1 className="sm:text-lg text-sm font-bold mt-2 sm:mt-0  text-[#807D7E]">
                    $29.00
                  </h1>
                </div>

                <span>
                  <img src={close} alt="" className=" cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />

      <div className="w-full  flex justify-center">
        <button className=" menu-btn-contact" onClick={toggleLeftSection}>
          {showProductListLeft ? "Cancel" : "Menu"}
        </button>
      </div>
    </>
  );
};

export default Order_Details;
