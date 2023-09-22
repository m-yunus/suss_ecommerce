import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Product_List_Left from "./Product_List_Left/Product_List_Left";
import Product_List_Right from "./Product_List_Right/Product_List_Right";
import "./Product-List-Page.css";

import filter from "../../assets/images/Product-List-Page/filter.png";

import { BiDollarCircle, BiSort } from "react-icons/bi";
import { BsFire, BsStar } from "react-icons/bs";
import {CiDiscount1} from "react-icons/ci"
import {AiOutlineDollarCircle} from "react-icons/ai"
import {GiStarsStack} from "react-icons/gi"

const Product_List_Page = () => {
   const [showProductListLeft, setShowProductListLeft] = useState(
     window.innerWidth > 426
   );
   const [showRightSection, setShowRightSection] = useState(true);
   const [isDropdownopen,setIsdropdownopen]=useState(false)

    const toggleDropdown = () => {
      setIsdropdownopen(!isDropdownopen);
       
    };

   useEffect(() => {
     const handleResize = () => {
       setShowProductListLeft(window.innerWidth > 426);
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
      <div className=" flex  ">
        {showProductListLeft && <Product_List_Left />}
        {showRightSection && <Product_List_Right />}
      </div>

      <div className="pll-bottom-button flex fixed bottom-0 w-full justify-center bg-red z-10">
        <button
          className="w-1/2 bg-white flex gap-4 justify-center items-center"
          onClick={toggleLeftSection}
        >
          {showProductListLeft ? "HIDE FILTER" : "FILTER"}{" "}
          <img src={filter} alt="" />
        </button>
        <button
          className="flex w-1/2 bg-white justify-center gap-4 items-center "
          onClick={toggleDropdown}
        >
          SORT <BiSort />
        </button>
        
      </div>
    </>
  );
};

export default Product_List_Page;
