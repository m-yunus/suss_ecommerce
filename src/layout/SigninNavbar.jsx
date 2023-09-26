import React, { useEffect, useState } from "react";
import logo from "../../src/assets/images/Navbar/logo.png";
import search from "../../src/assets/images/Home/search.svg";
import { Link } from "react-router-dom";
import "../assets/css/Navbar/Navbar.css";
const SigninNavbar = () => {
  return (
    <header className="body-font py-4 px-4 sm:px-8 w-full ">
    <div className="flex w-full justify-between items-center">
      <div className="max-w-[4rem] sm:max-w-[9rem]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>


     
      <div className=" hidden lg:flex justify-center items-center h-full relative">
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
      <div className="flex gap-8">

     
        <button className="px-3 py-2 lg:py-3 lg:px-12 bg-[#FD7B85] text-white text-xs rounded-lg">Login</button>
        <button className="px-3 py-2 lg:py-3 lg:px-12  bg-white text-[#FD7B85] text-xs rounded-lg border border-[#3C4242]">Sign Up</button>
        </div>
     
    </div>
  </header>
  )
}

export default SigninNavbar