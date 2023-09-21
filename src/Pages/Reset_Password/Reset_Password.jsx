import React from "react";
import Navbar from "../../layout/Navbar";
import "./Reset_Password.css";
import reset_password from "../../assets/images/Register/reset-password.png";

const Reset_Password = () => {
  return (
    <>
      <Navbar />
      <div className="register px-16  w-full flex    ">
        <div className="register-left w-1/2   h-auto   ">
          <img src={reset_password} alt="" />
        </div>
        <div className="register-right w-1/2  flex  max-w-[50rem]   ">
          <div className="signup flex flex-col w-[80%]    mx-auto">
            <h1>Reset Your Password</h1>
            <h5>
              Enter your email and we'll send you a link to reset your password.{" "}
              <br /> Pleasr check it
            </h5>

            <span className="email-section-signup mt-6 flex flex-col">
              <label htmlFor="">Email</label>

              <input
                className="reset-pass-input"
                placeholder="focus001@gmail.com"
                type="email"
                name=""
                id=""
              />
              <h3>We can not find your email</h3>
            </span>

            <button className=" snd-btn-psswd signup-button mb-2 ">Send</button>
            <h5>
              Back to
              <a href="" className="underline ms-2">
                Log in
              </a>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset_Password;
