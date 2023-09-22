import React from 'react'
import "./Contact_Details_Right.css"

const Contact_Details_Right = () => {
  return (
    <>
      <div className="contact-details-right">
        <h1>My Info</h1>
        <h2 className="mt-4">Contact Details</h2>
        <span className="flex flex-col mt-7">
          <label htmlFor="">Your Name</label>
          <div className="w-full flex">
            <input
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
              type="text"
              placeholder="Jhanvi Shah"
            />
            <button>Change</button>
          </div>
        </span>
        <span className="flex flex-col mt-5">
          <label htmlFor="">Email Address</label>
          <div className="w-full flex">
            <input
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
              type="email"
              placeholder="Jhanvi@gmail.com"
            />
            <button>Change</button>
          </div>
        </span>
        <span className="flex flex-col mt-5">
          <label htmlFor="">Phone Number</label>

          <div className="w-full flex">
            <input
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
              type="tel"
              placeholder="8980252445"
            />
            <button>Change</button>
          </div>
        </span>
        <span className="flex flex-col mt-5">
          <label htmlFor="">Password</label>
          <div className="w-full flex">
            <input
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2"
              type="password"
              placeholder="....."
            />
            <button>Change</button>
          </div>
        </span>
      </div>
    </>
  );
}

export default Contact_Details_Right