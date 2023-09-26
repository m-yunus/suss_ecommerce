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
      

      <div className=" register  w-full flex    ">
        <div className="register-left w-1/2   h-auto  ">
          <img className="w-full"  src={register} alt="" />
        </div>
        <div className="register-right w-1/2  flex  max-w-[50rem]  mt-4  ">
          <div className="signup flex flex-col w-[100%]  px-20  mx-auto">
            <h1>Sign Up</h1>
            <h5 className="mt-2">Sign up for free to access to in any of our products</h5>

            <button className="google-signup mt-6 border  font-semibold">
              <img src={google} alt="" /> Continue With Google
            </button>
            <button className="twitter-signup font-semibold mt-4">
              <img src={twitter} alt="" />
              Continue With Twitter
            </button>
            <span className="email-section-signup mt-6 flex flex-col">
              <label htmlFor="">Email Address</label>

              <input
                placeholder="designer@gmail.com"
                type="email"
                name=""
                id=""
              />
              <h3>Error message</h3>
            </span>
            <div className="pass-section-signup mt-6">
              <span className="flex justify-between ">
                <label htmlFor="">Password</label>

                <span className="flex items-center gap-2">
                  <img className="w-4 h-4" src={eye} alt="" />
                  <h4>Hide</h4>
                </span>
              </span>
              <input className="w-full" type="password" name="" id="" />
              <h4>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </h4>
            </div>
            <label
              htmlFor=""
              className="signup-btm flex items-center gap-2 mt-2"
            >
              <input type="checkbox" name="" id="" />
              Agree to our{" "}
              <a className="underline " href="">
                Terms of use{" "}
              </a>{" "}
              and{" "}
              <a href="" className="underline ">
                {" "}
                Privacy Policy
              </a>
            </label>
            <label
              htmlFor=""
              className="signup-btm signup-btm-2  flex items-center gap-2 mt-[-10px]"
            >
              <input type="checkbox" name="" id="" />
              Subscribe to our monthly newsletter
            </label>
            <button className="signup-button mb-2">Sign Up</button>
            <h5 className="already-have-ac">
              Already have an account?{" "}
              <a href="" className="underline">
                Log in
              </a>{" "}
            </h5>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
