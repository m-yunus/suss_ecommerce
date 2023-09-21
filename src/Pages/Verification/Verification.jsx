import React from 'react'
import Navbar from '../../layout/Navbar'
import verification from "../../assets/images/Register/verification.png"
import "./Verification.css"

const Verification = () => {
  return (
    <>
      <Navbar />
      <div className="register px-16  w-full flex    ">
        <div className="register-left w-1/2   h-auto   ">
          <img src={verification} alt="" />
        </div>
        <div className="register-right w-1/2  flex  max-w-[50rem]   ">
          <div className="signup flex flex-col w-[80%]    mx-auto">
            <h1>Verification</h1>
            <h5>
             Verify your code.
            </h5>

            <span className="varicode-inp email-section-signup mt-6 flex flex-col">
              <label htmlFor="">Verification Code</label>

              <input
                className=""
                placeholder=""
                type="number"
                name=""
                id=""
              />
              
            </span>

            <button className="verify-code-btn signup-button mb-2  ">Verify Code</button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Verification