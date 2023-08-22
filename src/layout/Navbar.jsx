import React from "react";
import logo from "../../src/assets/images/logo.png";
import profile from "../../src/assets/images/profile.png";
import cart from "../../src/assets/images/cart.png";
import search from "../../src/assets/images/search.png";
import menu from "../../src/assets/images/menu.png";

import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar  body-font px-20">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center p ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 ">
              <img className="logo" src={logo} alt="" />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center gap-6 text-base justify-center">
            <img className="nav-icon" src={profile} alt="" />
            <img className="nav-icon" src={cart} alt="" />
            <img className="nav-icon" src={search} alt="" />
            <img className="nav-icon" src={menu} alt="" />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
