import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import "./Product_List_Page.css"
import filter from "../../assets/images/Product-List-Page/filter.png"
import {FaAngleRight} from "react-icons/fa"

const Product_List_Page = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
     const toggleDropdown = (dropdownName) => {
       if (openDropdown === dropdownName) {
       
         setOpenDropdown(null);
       } else {
         
         setOpenDropdown(dropdownName);
       }
     };

  return (
    <>
      <Navbar />
      <div className="w-full px-10 product-list-page">
        <div className="left-section-product-list  px-4  relative ">
          <h5 className="flex justify-between my-2 items-center">
            Filter <img className=" h-4" src={filter} alt="" />
          </h5>
          <hr />
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("printedTshirt")}
            >
              Printed T-shirt <FaAngleRight />
            </button>
            {openDropdown === "printedTshirt" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            {" "}
            <button
              className="relative flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("plainTshirt")}
            >
              Plain T-shirt <FaAngleRight />
            </button>
            {openDropdown === "plainTshirt" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="relative flex justify-between items-center  py-[3px] w-full"
              onClick={() => toggleDropdown("kurti")}
            >
              Kurti <FaAngleRight />
            </button>
            {openDropdown === "kurti" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("boxers")}
            >
              Boxers <FaAngleRight />
            </button>
            {openDropdown === "boxers" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("fullSleeveTshirts")}
            >
              Full sleeve T-shirts <FaAngleRight />
            </button>
            {openDropdown === "fullSleeveTshirts" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("joggers")}
            >
              Joggers <FaAngleRight />
            </button>
            {openDropdown === "joggers" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("payjamas")}
            >
              Payjamas <FaAngleRight />
            </button>
            {openDropdown === "payjamas" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("jeans")}
            >
              Jeans <FaAngleRight />
            </button>
            {openDropdown === "jeans" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_List_Page;

