import React from "react";
import "./LoginPage.css";

import Navbar from "../../layout/Navbar";
import login from "../../assets/images/Register/login.png";
import google from "../../assets/images/Register/google.png";
import twitter from "../../assets/images/Register/twitter.png";
import eye from "../../assets/images/Register/eye.png";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="register px-16  w-full flex  ">
        <div className="register-left w-1/2  h-auto ">
          <img src={login} alt="" />
        </div>
        <div className="register-right w-1/2  flex   m-auto ">
          <div className="signup flex flex-col w-[90%]      mx-auto">
            <h1>Sign In Page</h1>

            <button className="google-signup mt-16 border  font-semibold ">
              <img src={google} alt="" /> Continue With Google
            </button>
            <button className="twitter-signup font-semibold mt-5">
              <img src={twitter} alt="" />
              Continue With Twitter
            </button>

            <div className="flex my-6 sign-in-or-section items-center">
              <hr /> <h6> OR</h6> <hr />
            </div>
            <span className="    flex flex-col">
              <label htmlFor="">User name or email address</label>
              <input
                placeholder="designer@gmail.com"
                type="email"
                name=""
                id=""
              />
            </span>
            <div className="pass-section-signup mt-4">
              <span className="flex justify-between mt-8">
                <label htmlFor="">Password</label>

                <span className="flex items-center gap-2">
                  <img className="w-4 h-4" src={eye} alt="" />
                  <h4>Hide</h4>
                </span>
              </span>
              <input className="w-full" type="password" name="" id="" />
              <h4 className="flex justify-end">
                <a className="underline" href="">
                  Forget your password
                </a>
              </h4>
            </div>

            <button className="signup-button mb-2">Sign In</button>
            <h5>
              Don’t have an account?
              <a href="" className="underline">
                Sign up
              </a>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
