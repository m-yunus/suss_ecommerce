import React from 'react'
import "./Contact_Details.css"
import Navbar from '../../../layout/Navbar';
import WishlistSidebar from '../WishlistSidebar/WishlistSidebar';
import arrow from "../../../assets/images/Wishlist-Sidebar/arrow.png"

const Contact_Details = () => {
  return (
    <>
      <Navbar />

      <div className="contact-details-top mb-8 my-4  px-8 flex items-center gap-2">
        <p className="text-gray-400">Home</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-400">My Account</p> <img src={arrow} alt="" />{" "}
        <p className="text-gray-800">Personal Info</p>
      </div>

      <div className="flex px-8">
        <div>
          <WishlistSidebar />
        </div>
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
                placeholder="........."
              />
              <button>Change</button>
            </div>
          </span>
          <h2 className="mt-7">Address</h2>
          <div className="flex flex-wrap mt-4 gap-x-28 gap-y-10">
            <div className="address-contact p-6">
              <h3>Jhanvi shah</h3>
              <p className="mt-3">8980252445</p>
              <p className="mt-3">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar,
                Vijaynagar road
              </p>
              <div className="flex gap-2 mt-4">
                <span>Home</span>
                <span>Default billing address</span>
              </div>
              <div className="flex mt-4 gap-2">
                <button className="border-r ">Remove</button>{" "}
                <button className="border-r">Edit</button>{" "}
                <button>Set as default</button>
              </div>
            </div>
            <div className="address-contact p-6">
              <h3>Jhanvi shah</h3>
              <p className="mt-3">8980252445</p>
              <p className="mt-3">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar,
                Vijaynagar road
              </p>
              <div className="flex gap-2 mt-4">
                <span>Home</span>
                <span>Default billing address</span>
              </div>
              <div className="flex mt-4 gap-2">
                <button className="border-r ">Remove</button>{" "}
                <button className="border-r">Edit</button>{" "}
                <button>Set as default</button>
              </div>
            </div>
            <div className="address-contact p-6">
              <h3>Jhanvi shah</h3>
              <p className="mt-3">8980252445</p>
              <p className="mt-3">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar,
                Vijaynagar road
              </p>
              <div className="flex gap-2 mt-4">
                <span>Home</span>
                <span>Default billing address</span>
              </div>
              <div className="flex mt-4 gap-2">
                <button className="border-r ">Remove</button>{" "}
                <button className="border-r">Edit</button>{" "}
                <button>Set as default</button>
              </div>
            </div>
            <div className="address-contact p-6">
              <h3>Jhanvi shah</h3>
              <p className="mt-3">8980252445</p>
              <p className="mt-3">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar,
                Vijaynagar road
              </p>
              <div className="flex gap-2 mt-4">
                <span>Home</span>
                <span>Default billing address</span>
              </div>
              <div className="flex mt-4 gap-2">
                <button className="border-r ">Remove</button>{" "}
                <button className="border-r">Edit</button>{" "}
                <button>Set as default</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_Details