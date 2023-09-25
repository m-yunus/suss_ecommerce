import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import arrow from "../../../src/assets/images/Wishlist-Sidebar/arrow.png";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";

const My_Order = () => {
    const [activeTab, setActiveTab] = useState("Active");
    let content;
    switch (activeTab) {
      case "Active":
        content = <h1>hellooo</h1>;
        break;
      case "Cancelled":
        content = <h1>Akshay</h1>;
        break;
      case "Completed":
        content = <h1>Panampatta</h1>;
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
        <p className="text-gray-800">Personal Info</p>
      </div>
      <div className="px-6 flex">
        <WishlistSidebar />
        <div className="w-full px-4">
          <div className=" flex justify-between text-[#3C4242 ]  text-xl font-normal">
            <button
              className={`w-[10rem] h-[3rem] ${
                activeTab === "Active" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveTab("Active")}
            >
              Active
            </button>
            <button
              className={`w-[10rem] h-[3rem] ${
                activeTab === "Cancelled" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveTab("Cancelled")}
            >
              Cancelled
            </button>
            <button
              className={`w-[10rem] h-[3rem] ${
                activeTab === "Completed" ? "border-b-2 border-black" : ""
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
