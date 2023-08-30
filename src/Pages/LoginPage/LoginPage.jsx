import React from "react";
import "./LoginPage.css";
import { CgProfile } from "react-icons/cg";
import Navbar from "../../layout/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-title">
          <h2 className="login-text gap-2">
            <CgProfile /> LOG IN TO YOUR ACCOUNT
          </h2>
        </div>
        <div className="login-input">
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
        <div className="login-ftr-btn">
          <div className="log-ftr-btn">
            <h3 className="log-ftr-text">LOG IN TO YOUR ACCOUNT</h3>
          </div>
        </div>

      </div>
    </>
  );
};

export default LoginPage;
