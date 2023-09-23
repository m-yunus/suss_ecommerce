import React from 'react'
import "./Add_Address.css"
import Navbar from '../../layout/Navbar';

const Add_Address = () => {
  return (
    <>
    <Navbar/>
      <div className='flex px-8'>
        <div>

        </div>
        <div className='add-address-right w-full'>
            <h1>My Info</h1>
            <h2 className='mt-4'>Add Address</h2>
            <div className='w-full flex '>
              <span className='flex flex-col'>
                <label htmlFor="">First Name</label>
                <input type="text" />
              </span>

            </div>
            
        </div>
        


      </div>
    </>
  );
}

export default Add_Address