import React from 'react'
import man from "../../src/assets/images/man.png";
import women from "../../src/assets/images/woman.png";
import kids from "../../src/assets/images/kids.png";
import newarrival from "../../src/assets/images/new-arrival.png";

const BottomNavbar = () => {
  return (
    <>
      <div className="navbar   px-20">
        <div className="bottom-nav flex justify-evenly py-7">
          <div className="box flex gap-2">
            <img className="nav-icon " src={women} alt="" />
            <p>WOMEN</p>
          </div>
          <div className="box gap-2 ">
            <img className="nav-icon" src={man} alt="" />
            <p>MEN</p>
          </div>
          <div className="box gap-2">
            <img className="nav-icon" src={kids} alt="" />
            <p>KIDS</p>
          </div>
          <div className="box gap-2">
            {" "}
            <img className="nav-icon" src={newarrival} alt="" />
            <p>NEW ARRIVAL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNavbar