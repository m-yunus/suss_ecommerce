import React from 'react'
import './RegSignButton.css'
import Navbar from '../../layout/Navbar'
import { useNavigate } from 'react-router-dom'

const RegSignButton = () => {
  const navigate=useNavigate();
  function register(){
    navigate('/register')
    
  }
  function signin(){
    navigate('/login')
  }
  return (
    <>
    <Navbar/>
    <div className="reg-sign-btn gap-3 ">
      <div className="register-btn">
        <button className='reg-btn' onClick={register}>Register</button>
      </div>
      <div className="signin-btn">
        <button className='sign-btn'onClick={signin}>Sign in</button>
      </div>
    </div>
    <div className="reg-footer">
      <div className="reg-footer-texts">
        <h2 className="reg-footer-text">Help |</h2>
        <h2 className="reg-footer-text">Forget Password  |</h2>
        <h2 className="reg-footer-text"> Sign in Vendor Id</h2>
      </div>
      <div>
      
      </div>
    </div>
  
    
  
    </>
  )
}

export default RegSignButton

