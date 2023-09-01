import React from 'react'
import Navbar from '../../layout/Navbar'
import './VendorButtons.css'

const VendorButtons = () => {
  return (
    <>
    <Navbar/>
    <div className="vendor-reg-sign">
        <div className="vendor-reg">
            <button className="vndr-reg gap-7">Register <p className='vndr-line'>|</p></button>
        </div>
        <div className="vendor-sign">
            <button className="vndr-sign">Register</button>
        </div>
    </div>
      
    </>
  )
}

export default VendorButtons
