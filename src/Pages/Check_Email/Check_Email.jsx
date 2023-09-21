import React from 'react'
import "./Check_Email.css"
import Navbar from "../../layout/Navbar";
import check_email from "../../assets/images/Register/check-email.png";
import {FaAngleLeft} from "react-icons/fa"


const Check_Email = () => {
  return (
    <>
      <Navbar />

      <div className="register px-16  w-full flex    ">
        <div className="register-left w-1/2   h-auto   ">
          <img src={check_email} alt="" />
        </div>
        <div className="register-right w-1/2  flex  max-w-[50rem]   ">
          <div className="signup flex flex-col w-[80%]    mx-auto">
            <h1>Check Email</h1>
            <h5 className='inline mt-4'>
              Please check your email inbox and click on the provided link to reset your password , If you dont receive email, <a className=' checkmail-resend inline underline'>Click here to resend</a>
            </h5>

            

            
            <h5 className=' back-section-checkmail flex items-center gap-2 mt-6'> 
                <FaAngleLeft/>
               Back to <a className='underline ' href="">Login</a>
            
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Check_Email