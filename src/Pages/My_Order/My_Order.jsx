import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import "./My_Order.css"

import arrow from "../../../src/assets/images/Wishlist-Sidebar/arrow.png";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";
import product1 from "../../assets/images/My-Orders/product1.png"
import product2 from "../../assets/images/My-Orders/product2.png";

const My_Order = () => {

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



  const [activeTab, setActiveTab] = useState("Active");
  let content;
  switch (activeTab) {
    case "Active":
      content = (
        <div className="mt-4">
          <div className="my-10">
            <div className="bg-[#f3f3f3] w-full rounded-lg flex  flex-col sm:flex-row justify-between p-1 sm:p-5">
              <div>
                <h1 className="text-[#3C4242] font-semibold text-base sm:text-lg">
                  Order no: #123456789
                </h1>
                <span className="flex items-center gap-1 mt-3  mb-1">
                  <h2
                    className="text-[#807D7E]  text-xs
                  sm:text-sm font-semibold"
                  >
                    Order Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
                <span className="flex items-center gap-1 mb-1">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Estimated Delivery Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    8 June 2023
                  </h3>
                </span>
              </div>
              <div className="flex flex-col  ">
                <div className="flex-grow"></div>
                <span className="flex items-center gap-1 mb-1">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Order Status :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    Inprogress
                  </h3>
                </span>

                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Payment Method :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    Cash on delivery
                  </h3>
                </span>
              </div>
            </div>
            <div className="my-1 p-1 sm:p-5 flex justify-between  flex-col sm:flex-row  items-center">
              <div className="flex gap-4 items-center">
                <img src={product1} alt="" />
                <div>
                  <h1 className="text-[#3C4242] text-sm sm:text-base font-semibold">
                    Black Printed T-shirt
                  </h1>
                  <span className="flex gap-1 items-center mt-1">
                    <h2 className="text-[#3C4242] font-semibold text-xs sm:text-sm">
                      Colour :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-xs sm:text-sm font-semibold">
                      Pink
                    </h3>
                  </span>
                  <span className="flex gap-1 items-center">
                    <h2 className="text-[#3C4242] font-semibold text-xs sm:text-sm">
                      Qty :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-xs sm:text-sm font-semibold">
                      1
                    </h3>
                  </span>
                  <h4 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Total : $23.00
                  </h4>
                </div>
              </div>
              <div>
                <button className="bg-[#FD7B85] text-white text-sm sm:text-lg px-2 py-1 mt-2 sm:mt-0 font-medium sm:px-5 sm:py-2 rounded-lg ">
                  View Detail
                </button>
              </div>
            </div>
            <hr className="mt-4" />
          </div>

          <div className="my-10">
            <div className="bg-[#f3f3f3] w-full rounded-lg flex  flex-col sm:flex-row justify-between p-1 sm:p-5">
              <div>
                <h1 className="text-[#3C4242] font-semibold text-base sm:text-lg">
                  Order no: #123456789
                </h1>
                <span className="flex items-center gap-1 mt-3  mb-1">
                  <h2
                    className="text-[#807D7E]  text-xs
                  sm:text-sm font-semibold"
                  >
                    Order Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
                <span className="flex items-center gap-1 mb-1">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Estimated Delivery Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
              </div>
              <div className="flex flex-col  ">
                <div className="flex-grow"></div>
                <span className="flex items-center gap-1 mb-1">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Order Status :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    Shipped
                  </h3>
                </span>

                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Payment Method :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-xs sm:text-sm ">
                    {" "}
                    Cash on delivery
                  </h3>
                </span>
              </div>
            </div>
            <div className="my-1 p-1 sm:p-5 flex justify-between  flex-col sm:flex-row  items-center">
              <div className="flex gap-4 items-center">
                <img src={product2} alt="" />
                <div>
                  <h1 className="text-[#3C4242] text-sm sm:text-base font-semibold">
                    Printed blue & white Cote
                  </h1>
                  <span className="flex gap-1 items-center mt-1">
                    <h2 className="text-[#3C4242] font-semibold text-xs sm:text-sm">
                      Colour :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-xs sm:text-sm font-semibold">
                      White
                    </h3>
                  </span>
                  <span className="flex gap-1 items-center">
                    <h2 className="text-[#3C4242] font-semibold text-xs sm:text-sm">
                      Qty :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-xs sm:text-sm font-semibold">
                      1
                    </h3>
                  </span>
                  <h4 className="text-[#807D7E] text-xs sm:text-sm font-semibold">
                    Total : $143.00
                  </h4>
                </div>
              </div>
              <div>
                <button className="bg-[#FD7B85] text-white text-sm sm:text-lg px-2 py-1 mt-2 sm:mt-0 font-medium sm:px-5 sm:py-2 rounded-lg ">
                  View Detail
                </button>
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        </div>
      );
      
      break;
    case "Cancelled":
      content = <h1>Cancelled Items</h1>;
      break;
    case "Completed":
      content = <h1>Completed Items</h1>;
      break;
    default:
      content = null;
  }
  return (
    <>
      <Navbar />
      <div className="contact-details-top mb-8 my-4  px-8 flex items-center gap-2 ">
        <p className="text-gray-400">Home</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-400">My Account</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-800">My Orders</p>
      </div>
      <div className="my-order-total sm:px-6 flex ">
        <div>{showProductListLeft && <WishlistSidebar />}</div>

        {showRightSection && (
          <div className=" my-order-right-section w-full px-1 sm:px-4 ">
            <h1 className="text-[#3C4242] font-bold  text-xl sm:text-2xl">My Orders</h1>
            <div className=" flex justify-between text-[#3C4242 ]   text-xl font-normal mt-6">
              <button
                className={`w-[6rem] text-base sm:text-xl sm:w-[10rem] h-[3rem] ${
                  activeTab === "Active"
                    ? "border-b-2 border-black bg-[#F6F6F6]"
                    : ""
                }`}
                onClick={() => setActiveTab("Active")}
              >
                Active
              </button>
              <button
                className={`w-[6rem] text-base sm:text-xl sm:w-[10rem] h-[3rem] ${
                  activeTab === "Cancelled"
                    ? "border-b-2 border-black bg-[#F6F6F6]"
                    : ""
                }`}
                onClick={() => setActiveTab("Cancelled")}
              >
                Cancelled
              </button>
              <button
                className={`w-[6rem]  text-base sm:text-xl sm:w-[10rem] h-[3rem] ${
                  activeTab === "Completed"
                    ? "border-b-2 border-black bg-[#F6F6F6]"
                    : ""
                }`}
                onClick={() => setActiveTab("Completed")}
              >
                Completed
              </button>
            </div>
            <hr className=" bg-[#F6F6F6]  " />

            {content}
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

export default My_Order;
