import React, { useState } from "react";
import logo from "../../src/assets/images/Navbar/logo.png";
import cart from "../../src/assets/images/Home/shopping cart.png";
import user from "../../src/assets/images/Home/user.png";
import search from "../../src/assets/images/Home/search.svg";
import heart from "../../src/assets/images/Home/heart.png";
import { Link } from "react-router-dom";
import "../assets/css/Navbar/Navbar.css";
import Sidebar from "./Sidebar";
import menu from "../../src/assets/images/Navbar/menu.png";
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
      {/* <header className="navbar  body-font px-20 mx-auto">
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
      </header> */}
      <header className="body-font py-4 px-4 sm:px-8 w-full ">
        <div className="flex w-full justify-between items-center">
          <div className="max-w-[4rem] sm:max-w-[9rem]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className=" hidden sm:flex flex-row items-center justify-center gap-8 ">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Combos</li>
            <li>Joggers</li>
          </ul>

          <div className=" hidden sm:flex justify-center items-center h-full relative">
            <img
              src={search}
              alt=""
              className="absolute left-[2px] top-[5px]"
            />
            <input
              type="text"
              className="bg-[#F6F6F6] px-8 py-1 rounded-lg focus:outline-blue-400 text-base font-normal"
              placeholder="Search....."
            />
          </div>
          <div className="flex flex-row gap-7">
            <div className=" bg-gray-100 p-2 rounded-md cursor-pointer">
              <img src={heart} alt="" />
            </div>
            <div  className=" bg-gray-100 p-2 rounded-md cursor-pointer">
              <img src={user} alt="" />
            </div>
            <div  className=" bg-gray-100 p-2 rounded-md cursor-pointer">
              <img src={cart} alt="" />
            </div>
          </div>
          <button onClick={toggleSidebar}>
              <img className="max-w-[1rem]" src={menu} alt="" />
            </button>
        </div>
      </header>
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </>
  );
};
export default Navbar;
