import React, { useEffect, useState } from "react";
import "./Add_Address.css";
import Navbar from "../../layout/Navbar";
import arrow from "../../assets/images/Wishlist-Sidebar/arrow.png";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";

const Add_Address = () => {
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
      <div className="contact-details-top mb-8 my-4  px-8 flex items-center gap-2">
        <p className="text-gray-400">Home</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-400">My Account</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-800">Personal Info</p>
      </div>
      <div className="add-address-main flex  px-8 ">
        <div>{showProductListLeft && <WishlistSidebar />}</div>
        {showRightSection && (
          <div className="add-address-right w-full">
            <h1>My Info</h1>
            <h2 className="mt-4">Add Address</h2>
            <div className="w-full  flex gap-8 my-8 justify-between flex-wrap">
              <span className="flex flex-col  w-[45%]">
                <label htmlFor="">First Name*</label>
                <input
                  className="required"
                  placeholder="First Name"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Last Name*</label>
                <input
                  className="required"
                  placeholder="Last Name"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Country / Region*</label>
                <input
                  className="required"
                  placeholder="Country / Region"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Company Name</label>
                <input placeholder="Company (optional)" type="text" />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Street Address*</label>
                <input
                  className="required"
                  placeholder="House number and street name"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Apt, suite, unit</label>
                <input
                  placeholder="apartment, suite unit, etc. (optional)"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">City*</label>
                <input
                  className="required"
                  placeholder="Town / City"
                  type="text"
                />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">State*</label>
                <select name="" id="">
                  <option value="">State</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Phone*</label>
                <input className="required" placeholder="Phone" type="tel" />
              </span>
              <span className="flex flex-col w-[45%]">
                <label htmlFor="">Postal Code*</label>
                <input
                  className="required"
                  placeholder="Postal Code"
                  type="tel"
                />
              </span>
              <span className="flex flex-col w-full">
                <label htmlFor="">Deliver Instruction</label>
                <textarea
                  placeholder=" Deliver Instruction"
                  className="text-area-delivery h-28"
                />
              </span>
            </div>
            <div className="flex gap-4 items-center mt-6">
              <input type="checkbox" name="" id="" />
              <h5>Set as default shipping address</h5>
            </div>
            <div className="flex gap-4 items-center mt-2">
              <input type="checkbox" name="" id="" />
              <h5>Set as default billing address</h5>
            </div>
            <div className=" save-cancel-brns-add-address flex my-12 gap-6">
              <button className="save-btn">Save</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full  flex justify-center">
        <button className=" menu-btn-contact" onClick={toggleLeftSection}>
          {showProductListLeft ? "Cancel" : "Menu"}
        </button>
      </div>
    </>
  );
};

export default Add_Address;
