import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import arrow from "../../../src/assets/images/Wishlist-Sidebar/arrow.png";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";
import product1 from "../../assets/images/My-Orders/product1.png"
import product2 from "../../assets/images/My-Orders/product2.png";

const My_Order = () => {
  const [activeTab, setActiveTab] = useState("Active");
  let content;
  switch (activeTab) {
    case "Active":
      content = (
        <div className="mt-4">
          <div className="my-10">
            <div className="bg-[#F6F6F6] w-full rounded-lg flex justify-between p-5">
              <div>
                <h1 className="text-[#3C4242] font-semibold text-lg">
                  Order no: #123456789
                </h1>
                <span className="flex items-center gap-1 mt-3">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Order Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Estimated Delivery Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    8 June 2023
                  </h3>
                </span>
              </div>
              <div className="flex flex-col  ">
                <div className="flex-grow"></div>
                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Order Status :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    Inprogress
                  </h3>
                </span>

                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Payment Method :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    Cash on delivery
                  </h3>
                </span>
              </div>
            </div>
            <div className="my-1 p-5 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={product1} alt="" />
                <div>
                  <h1 className="text-[#3C4242] text-base font-semibold">
                    Black Printed T-shirt
                  </h1>
                  <span className="flex gap-1 items-center mt-1">
                    <h2 className="text-[#3C4242] font-semibold text-sm">
                      Colour :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-sm font-semibold">
                      Pink
                    </h3>
                  </span>
                  <span className="flex gap-1 items-center">
                    <h2 className="text-[#3C4242] font-semibold text-sm">
                      Qty :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-sm font-semibold">1</h3>
                  </span>
                  <h4 className="text-[#807D7E] text-sm font-semibold">
                    Total : $23.00
                  </h4>
                </div>
              </div>
              <div>
                <button className="bg-[#FD7B85] text-white text-lg font-medium px-5 py-2 rounded-lg ">
                  View Detail
                </button>
              </div>
            </div>
            <hr className="mt-4" />
          </div>
          <div className="my-10">
            <div className="bg-[#F6F6F6] w-full rounded-lg flex justify-between p-5">
              <div>
                <h1 className="text-[#3C4242] font-semibold text-lg">
                  Order no: #123456789
                </h1>
                <span className="flex items-center gap-1 mt-3">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Order Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Estimated Delivery Date :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    2 June 2023 2:40 PM
                  </h3>
                </span>
              </div>
              <div className="flex flex-col  ">
                <div className="flex-grow"></div>
                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Order Status :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    Shipped
                  </h3>
                </span>

                <span className="flex items-center gap-1 ">
                  <h2 className="text-[#807D7E] text-sm font-semibold">
                    Payment Method :
                  </h2>{" "}
                  <h3 className="text-[#BEBCBD] font-normal text-sm ">
                    {" "}
                    Cash on delivery
                  </h3>
                </span>
              </div>
            </div>
            <div className="my-1 p-5 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={product2} alt="" />
                <div>
                  <h1 className="text-[#3C4242] text-base font-semibold">
                    Printed blue & white Cote
                  </h1>
                  <span className="flex gap-1 items-center mt-1">
                    <h2 className="text-[#3C4242] font-semibold text-sm">
                      Colour :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-sm font-semibold">
                      White
                    </h3>
                  </span>
                  <span className="flex gap-1 items-center">
                    <h2 className="text-[#3C4242] font-semibold text-sm">
                      Qty :
                    </h2>{" "}
                    <h3 className="text-[#BEBCBD] text-sm font-semibold">1</h3>
                  </span>
                  <h4 className="text-[#807D7E] text-sm font-semibold">
                    Total : $143.00
                  </h4>
                </div>
              </div>
              <div>
                <button className="bg-[#FD7B85] text-white text-lg font-medium px-5 py-2 rounded-lg ">
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
      content = <h1>.....</h1>;
      break;
    case "Completed":
      content = <h1>...</h1>;
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
      <div className="px-6 flex">
        <WishlistSidebar />
        <div className="w-full px-4">
          <h1 className="text-[#3C4242] font-bold  text-2xl">My Orders</h1>
          <div className=" flex justify-between text-[#3C4242 ]  text-xl font-normal mt-6">
            <button
              className={`w-[10rem] h-[3rem] ${
                activeTab === "Active"
                  ? "border-b-2 border-black bg-[#F6F6F6]"
                  : ""
              }`}
              onClick={() => setActiveTab("Active")}
            >
              Active
            </button>
            <button
              className={`w-[10rem] h-[3rem] ${
                activeTab === "Cancelled"
                  ? "border-b-2 border-black bg-[#F6F6F6]"
                  : ""
              }`}
              onClick={() => setActiveTab("Cancelled")}
            >
              Cancelled
            </button>
            <button
              className={`w-[10rem] h-[3rem] ${
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
      </div>
      <Footer />
    </>
  );
};

export default My_Order;
