import React, { useState } from "react";
import logo from "../../src/assets/images/Navbar/logo.png";
import profile from "../../src/assets/images/Navbar/profile.png";
import cart from "../../src/assets/images/Navbar/cart.png";
import search from "../../src/assets/images/Navbar/search.png";
import menu from "../../src/assets/images/Navbar/menu.png";
import { Link} from "react-router-dom"
import "../assets/css/Navbar/Navbar.css";
import Sidebar from "./Sidebar";


const Navbar = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const toggleSidebar = () => {
   setIsSidebarOpen(!isSidebarOpen);
   document.body.classList.toggle("overflow-hidden");
 
 if (isSidebarOpen) {
   document.body.style.overflowY = "scroll";
 } else {
   document.body.style.overflowY = "auto";
 }
 
  };
 

   
  return (
    <>
      <header className="navbar  body-font px-20 ">
        <div className="container mx-auto flex    items-center justify-between ">
          <a className="flex title-font font-medium items-center mb-4  ">
            <span className="">
              <img className="logo" src={logo} alt="" />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center gap-6 text-base justify-center  icons ">
            <Link>
              <img className="nav-icon-top" src={profile} alt="" />
            </Link>
            <Link to="store">
              <img className="nav-icon-top" src={cart} alt="" />
            </Link>
            <Link>
              <img className="nav-icon-top" src={search} alt="" />
            </Link>
            <button onClick={toggleSidebar}>
              <img className="nav-icon-top" src={menu} alt="" />
            </button>
          </nav>
        </div>
      </header>
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </>
  );
};

export default Navbar;
