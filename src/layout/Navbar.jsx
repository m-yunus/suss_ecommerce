import React from "react";
import logo from "../../src/assets/images/Navbar/logo.png";
import profile from "../../src/assets/images/Navbar/profile.png";
import cart from "../../src/assets/images/Navbar/cart.png";
import search from "../../src/assets/images/Navbar/search.png";
import menu from "../../src/assets/images/Navbar/menu.png";

import "../assets/css/Navbar/Navbar.css";

const Navbar = () => {
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
            <img className="nav-icon-top" src={profile} alt="" />
            <img className="nav-icon-top" src={cart} alt="" />
            <img className="nav-icon-top" src={search} alt="" />
            <img className="nav-icon-top" src={menu} alt="" />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
