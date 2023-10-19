import React from "react";
import "../assets/css/Sidebar/Sidebar.css";

import logo from "../assets/images/Navbar/logo.png"
import close from "../assets/images/Sidebar/close.png";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
 const navigate=useNavigate();

 const handleMen = () => {
  navigate('/product-list-page');
  localStorage.setItem('category', 'Men'); 
};
const handleWomen = () => {
  navigate('/product-list-page');
  localStorage.setItem('category', 'Women'); 
};
const handleShop=()=>{
  navigate('/product-list-page');
  localStorage.setItem('category', 'Shop'); 
}
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"} `}>
      
      <div className="w-full flex justify-between  mx-4 my-4 h-[3rem] py-2 ">
      <img src={logo} alt="" className="w-[5rem] "/>
      <div className="close" onClick={onClose}>
         
         <img className="close-img" src={close} alt="" />
       </div>
      </div>
       
        <div className="list ">
          <ul className="mx-auto">
            <li className="flex flex-row mx-auto">
               <h1 className="text-[1.5rem]">Home</h1>
            </li>
            <li className="flex flex-row mx-auto">
              <h1 className="text-[1.5rem]" onClick={handleShop}>Shop</h1>
            </li>
            <li className="flex flex-row mx-auto">
           <h1 className="text-[1.5rem]" onClick={handleMen}>Men</h1>
            </li>
            <li className="flex flex-row mx-auto">
              <h1 className="text-[1.5rem]" onClick={handleWomen}>Women</h1>
            </li>
            <li className="flex flex-row mx-auto">
            <Link to="/my-orders"> <h1 className="text-[1.5rem]">About Us</h1></Link>  
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
