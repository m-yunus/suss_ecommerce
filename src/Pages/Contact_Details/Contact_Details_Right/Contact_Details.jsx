import React, { useEffect, useState } from "react";
import "./Contact_Details.css";
import Navbar from "../../../layout/Navbar";
import WishlistSidebar from "../WishlistSidebar/WishlistSidebar";
import arrow from "../../../assets/images/Wishlist-Sidebar/arrow.png";
import Footer from "../../../layout/Footer";
import axios from "axios";

const Contact_Details = () => {
  const [showProductListLeft, setShowProductListLeft] = useState(
    window.innerWidth > 769
  );
  const [showRightSection, setShowRightSection] = useState(true);
  const[addressdetails,setaddressdetail]=useState([])
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

const fetchProducts=async()=>{
  const headers = {
    "x-access-token": sessionStorage.getItem("user-token"),
  };

  try {
    const res=await axios.get(`https://suss.onrender.com/api/user/shipping-address`,{headers})
    setaddressdetail(res.data)
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  

}

useEffect(()=>{
fetchProducts()
},[])
const handleremove=async(address)=>{
  const headers = {
    "x-access-token": sessionStorage.getItem("user-token"),
  };
  try {
    const res=await axios.delete(`https://suss.onrender.com/api/user/shipping-address/${address._id}`,{headers})
    fetchProducts()
  console.log(res);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <>
      <Navbar />
      <div className="contact-details-top mb-8 my-4  px-8 flex items-center gap-2 ">
        <p className="text-gray-400">Home</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-400">My Account</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-800">Personal Info</p>
      </div>
      <div className="contact-details-total flex px-8 ">
        <div>{showProductListLeft && <WishlistSidebar />}</div>

        {showRightSection && (
          <div className="contact-details-right  ">
            <h1>My Info</h1>
            <h2 className="mt-4 ">Contact Details</h2>
            <span className="flex w-full mx-auto flex-col mt-7          ">
              
                <label htmlFor="">Your Name</label>
                <div className="w-full flex  ">
                  <input
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
                    type="text"
                    placeholder="Jhanvi Shah"
                  />
                  <button>Change</button>
                </div>
              
            </span>
            <span className="flex  flex-col mt-5  ">
              <label htmlFor="">Email Address</label>
              <div className="w-full flex">
                <input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
                  type="email"
                  placeholder="Jhanvi@gmail.com"
                />
                <button>Change</button>
              </div>
            </span>
            <span className="flex flex-col mt-5">
              <label htmlFor="">Phone Number</label>
              <div className="w-full flex">
                <input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
                  type="tel"
                  placeholder="8980252445"
                />
                <button>Change</button>
              </div>
            </span>
            <span className="flex flex-col mt-5">
              <label htmlFor="">Password</label>
              <div className="w-full flex">
                <input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
                  type="password"
                  placeholder="........."
                />
                <button>Change</button>
              </div>
            </span>
            <h2 className="mt-7">Address</h2>
            <div className="flex flex-wrap my-4 gap-x-28  gap-y-10 ">
              {addressdetails.map((address)=>(
 <div className="address-contact p-6 ">
 <h3>{address?.first_name}{address?.last_name}</h3>
 <p className="mt-3">{address?.phone}</p>
 <p className="mt-3">
  {address?.company_name} {address?.street_address} {address?.city} {address?.state} {address?.country} {address?.postal_code}
 </p>
 <div className="flex gap-2 mt-4">
   <span>Home</span>
   <span>Default billing address</span>
 </div>
 <div className="flex mt-4 gap-2">
   <button className="border-r " onClick={()=>handleremove(address)}>Remove</button>{" "}
   <button className="border-r">Edit</button>{" "}
   <button>Set as default</button>
 </div>
</div>
              )

              )}
             
             
           
            </div>
          </div>
        )}
      </div>
      <div className="w-full  flex justify-center">
        <button className=" menu-btn-contact" onClick={toggleLeftSection}>
          {showProductListLeft ? "Cancel" : "Menu"}
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default Contact_Details;
