import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Product_List_Left from "./Product_List_Left/Product_List_Left";
import Product_List_Right from "./Product_List_Right/Product_List_Right";


import filter from "../../assets/images/Product-List-Page/filter.png";

import {  BiSort } from "react-icons/bi";
import { BsFire, BsStar } from "react-icons/bs";
import {CiDiscount1} from "react-icons/ci"
import {AiOutlineDollarCircle} from "react-icons/ai"
import {GiStarsStack} from "react-icons/gi"
import { IoMdDoneAll} from "react-icons/io"
import Footer from "../../layout/Footer";
import axios from "axios";

const Product_List_Page = () => {
   const [showProductListLeft, setShowProductListLeft] = useState(
     window.innerWidth > 426
   );
   const [showRightSection, setShowRightSection] = useState(true);
   const [isDropdownopen,setIsdropdownopen]=useState(false)
   const[ProductData ,setProductData]=useState([])
  const [color,setcolor]=useState("")
  const [filterData,setFilterData]=useState([])
    const toggleDropdown = () => {
      setIsdropdownopen(!isDropdownopen);     
    };
const fetchProducts=async()=>{
  try {
    const res=await axios.get(`https://suss.onrender.com/api/product/get-all`)
    console.log(res.data);
    setProductData(res.data)
  } catch (error) {
    console.log(error);
  }
}
const fetchwithcolor=async()=>{
  try {
    const res=await axios.get(`https://suss.onrender.com/api/product/filters?color=${color}`)
    console.log(res.data);
    setProductData(res.data)
  } catch (error) {
    console.log(error);
  }
}
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
  useEffect(()=>{
fetchProducts()
fetchwithcolor()
  },[color])

console.log(color,filterData);
  return (
    <>
      <Navbar />
      <div className=" flex  ">
        {showProductListLeft && <Product_List_Left color={color} setcolor={setcolor} />}
        {showRightSection && <Product_List_Right ProductData={ProductData} />}
      </div>

      <div className="pll-bottom-button flex fixed bottom-0 w-full justify-center bg-red z-10">
        <button
          className="w-1/2 bg-white flex gap-4 justify-center items-center"
          onClick={toggleLeftSection}
        >
          {showProductListLeft ? (
            <>
             APPLY <IoMdDoneAll />{" "}
            </>
          ) : (
            <>
              FILTER <img src={filter} alt="" />
            </>
          )}
        </button>
        <button
          className="flex w-1/2 bg-white justify-center gap-4 items-center "
          onClick={toggleDropdown}
        >
          {isDropdownopen ? (
            <>
              APPLY <IoMdDoneAll />
            </>
          ) : (
            <>
              SORT <BiSort />
            </>
          )}
        </button>
        {isDropdownopen && (
          <div className="sort-dropdown w-[45%] bg-white border   mr-2 h-auto py-2 fixed px-4  text-left bottom-10 left-[50%] ">
            <p className="flex items-center gap-1 ">
              <BsFire /> Popularity
            </p>
            <p className="flex items-center gap-1 ">
              {" "}
              <BsStar />
              Latest
            </p>
            <p className="flex items-center gap-1 ">
              {" "}
              <CiDiscount1 />
              Discount
            </p>
            <p className="flex items-center gap-1 ">
              {" "}
              <AiOutlineDollarCircle />
              Price High to Low
            </p>
            <p className="flex items-center gap-1 ">
              {" "}
              <AiOutlineDollarCircle />
              Price Low to High
            </p>
            <p className="flex items-center gap-1 ">
              {" "}
              <GiStarsStack />
              Customer Rating
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Product_List_Page;
