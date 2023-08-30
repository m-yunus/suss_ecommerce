import React from 'react'
import './RegSignButton.css'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'

const RegSignButton = () => {
  return (
    <>
    <Navbar/>
    <div className="reg-sign-btn">
      <div className="register-btn">
        <button className='reg-btn'>Register</button>
      </div>
      <div className="signin-btn">
        <button className='sign-btn'>Sign in</button>
      </div>
    </div>
    <div className="reg-footer">
      <div className="reg-footer-texts">
        <h2 className="reg-footer-text">Help |</h2>
        <h2 className="reg-footer-text">Forget Password  |</h2>
        <h2 className="reg-footer-text"> Sign in Vendor Id</h2>
      </div>
    </div>
  
    </>
  )
}

export default RegSignButton

