import React from 'react'
import { CgProfile } from "react-icons/cg";
import './RegisterPage.css'
const RegisterPage = () => {
  return (
    <>
    <div className="register">
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
        

      </div>
      
    </>
  )
}

export default RegisterPage
