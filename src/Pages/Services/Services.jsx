import React from "react";
import "./Services.css";
import Navbar from "../../layout/Navbar";
import arrow from "../../assets/images/Services/arrow.png";
import chat from "../../assets/images/Services/chat.png";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services px-20 py-5 mx-auto flex flex-col justify-center  ">
        <h1>OUR SERVICES</h1>
        <h4>
          Time is precious for every Entrprenuer/Designer/Business Owners ,We
          are providing Some of our services to save your time and focus on your
          brand braqnd growth.
        </h4>
        <div className="flex gap-10 justify-center mt-10 flex-wrap items-center">
          <div className="pink-box flex flex-col  items-center">
            <h2>
              Product Styling <br /> and shoot
            </h2>
            <div className="white-box flex justify-center items-center">
              <h5>Get your Quote</h5>
              <img className="service-arrow" src={arrow} alt="" />
            </div>
          </div>
          <div className="pink-box flex flex-col  items-center">
            <h2>
              Branding and Social <br /> Media branding
            </h2>
            <div className="white-box flex justify-center items-center">
              <h5>Get your Quote</h5>
              <img className="service-arrow" src={arrow} alt="" />
            </div>
          </div>
          <div className="pink-box flex flex-col  items-center">
            <h2 className="pt-5">Marketing</h2>
            <div className="white-box white-box-3 flex justify-center items-center">
              <h5>Get your Quote</h5>
              <img className="service-arrow" src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="services-footer flex justify-between items-center  mt-16">
          <div className="flex ">
            <img src={chat} alt="" />
            <p>Chat</p>
          </div>

          <h6>Help</h6>
        </div>
      </div>
    </>
  );
};

export default Services;
