import React from "react";
import { CgProfile } from "react-icons/cg";
import "./RegisterPage.css";
import Navbar from "../../layout/Navbar";
import register from "../../assets/images/Register/register.png"
import google from "../../assets/images/Register/google.png";
import twitter from "../../assets/images/Register/twitter.png";
import eye from "../../assets/images/Register/eye.png";

const RegisterPage = () => {
  return (
    <>
      <Navbar />

      <div className="register  w-full flex ">
        <div className="w-1/2  ">
          <img src={register} alt="" />
        </div>
        <div className="w-1/2  flex  items-center  ">
          <div className="signup flex flex-col w-[35rem] h-[50rem]   mx-auto">
            <h1>Sign Up</h1>
            <p>Sign up for free to access to in any of our products</p>
            <button className="google-signup mt-12 border  font-semibold">
              <img src={google} alt="" /> Continue With Google
            </button>
            <button className="twitter-signup font-semibold mt-5">
              {" "}
              <img src={twitter} alt="" />
              Continue With Twitter
            </button>
            <h2 className="mt-12">Email Address</h2>
            <input
              placeholder="designer@gmail.com"
              type="email"
              name=""
              id=""
            />
            <h3>Error message</h3>
            <div>
              <span className="flex justify-between">
                <label htmlFor="">Password</label>
                <span className="flex">
                  <img src={eye} alt="" />
              <h4>Hide</h4>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="register">
        <div className="register-title">
          <h2 className="register-text gap-2">
            <CgProfile /> Register Now
          </h2>
        </div>
        <div className="register-input">
          <div className="email-input">
            <input className="email"placeholder="Email" type="email" />
           
          </div>
          
          
          
          <div className="pswrd-input">
            <input className="pswrd" placeholder="password" type="password" />
          </div>
        </div>
        <div className="ggle-fb-btns">
          <div className="ggle-btn">
            <button className="google-btn">Google</button>
          </div>
          <h2 className="or px-5">Or</h2>
          <div className="fb-btn">
            <button className="face-btn">Facebook</button>
          </div>
        </div>
         */}

      {/* </div>
       */}
    </>
  );
};

export default RegisterPage;
