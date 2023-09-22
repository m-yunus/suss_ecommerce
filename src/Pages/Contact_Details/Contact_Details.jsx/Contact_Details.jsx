import React from 'react'
import Contact_Details_Right from '../Contact_Details_Right/Contact_Details_Right'
import Navbar from '../../../layout/Navbar';

const Contact_Details = () => {
  return (
    <>
    <Navbar/>
      <div className='mx-6'>
        <Contact_Details_Right />
      </div>
    </>
  );
}

export default Contact_Details