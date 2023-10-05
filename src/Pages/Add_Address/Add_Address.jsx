import React, { useEffect, useState } from "react";
import "./Add_Address.css";
import Navbar from "../../layout/Navbar";
import arrow from "../../assets/images/Wishlist-Sidebar/arrow.png";
import WishlistSidebar from "../Contact_Details/WishlistSidebar/WishlistSidebar";
import Footer from "../../layout/Footer";
import axios from "axios";

const Add_Address = () => {
  const [showProductListLeft, setShowProductListLeft] = useState(
    window.innerWidth > 769
  );
  const [showRightSection, setShowRightSection] = useState(true);

  const [formdata, setFormData] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    apt_suite_unit: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    phone: "",
    company_name: "",
    delivery_instruction: "",
   
  });

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    const headers = {
      "x-access-token": sessionStorage.getItem("user-token"),
    };

   try {
    const res=await axios.post("https://suss.onrender.com/api/user/shipping-address",formdata,{headers})
    console.log(res);
   } catch (error) {
    console.log(error);
   }
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
            <form onSubmit={handleSubmit}>
              <h1>My Info</h1>
              <h2 className="mt-4">Add Address</h2>
              <div className="w-full  flex gap-8 my-8 justify-between flex-wrap">
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="first_name">First Name*</label>
                  <input
                    className="required"
                    placeholder="First Name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formdata.first_name}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="last_name">Last Name*</label>
                  <input
                    className="required"
                    placeholder="Last Name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formdata.last_name}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="country">Country / Region*</label>
                  <input
                    className="required"
                    placeholder="Country"
                    type="text"
                    id="country"
                    name="country"
                    value={formdata.country}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    className="required"
                    placeholder="Company Name"
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={formdata.company_name}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="street_address">Street Address*</label>
                  <input
                    className="required"
                    placeholder="Street Address"
                    type="text"
                    id="street_address"
                    name="street_address"
                    value={formdata.street_address}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="apt_suite_unit">Apt, suite, unit</label>
                  <input
                    className="required"
                    placeholder="Apt, suite"
                    type="text"
                    id="apt_suite_unit"
                    name="apt_suite_unit"
                    value={formdata.apt_suite_unit}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="city">City*</label>
                  <input
                    className="required"
                    placeholder="City"
                    type="text"
                    id="city"
                    name="city"
                    value={formdata.city}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="state">State*</label>
                  <select
                    name="state"
                    value={formdata.state}
                    onChange={handleChange}
                    id="state"
                  >
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                  </select>
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    className="required"
                    placeholder="Phone"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-[45%]">
                  <label htmlFor="postal_code">Postal Code*</label>
                  <input
                    className="required"
                    placeholder="Postal Code"
                    type="tel"
                    id="postal_code"
                    name="postal_code"
                    value={formdata.postal_code}
                    onChange={handleChange}
                  />
                </span>
                <span className="flex flex-col w-full">
                  <label htmlFor="delivery_instruction">
                    Delivery Instruction
                  </label>
                  <textarea
                    placeholder="Delivery Instruction"
                    className="text-area-delivery h-28"
                    id="delivery_instruction"
                    name="delivery_instruction"
                    value={formdata.delivery_instruction}
                    onChange={handleChange}
                  />
                </span>
              </div>
              <div className="flex gap-4 items-center mt-6">
                <input
                  type="checkbox"
                  id="default_shipping"
                  name="default_shipping"
                  checked={formdata.default_shipping}
                  onChange={handleChange}
                />
                <label htmlFor="default_shipping">
                  Set as default shipping address
                </label>
              </div>
              <div className="flex gap-4 items-center mt-2">
                <input
                  type="checkbox"
                  id="default_billing"
                  name="default_billing"
                  checked={formdata.default_billing}
                  onChange={handleChange}
                />
                <label htmlFor="default_billing">
                  Set as default billing address
                </label>
              </div>
              <div className="save-cancel-brns-add-address flex my-12 gap-6">
                <button className="save-btn" type="submit">
                  Save
                </button>
                <button className="cancel-btn" type="reset">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center">
        <button className="menu-btn-contact" onClick={toggleLeftSection}>
          {showProductListLeft ? "Cancel" : "Menu"}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Add_Address;
