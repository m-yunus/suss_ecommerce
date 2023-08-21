import React from 'react'
import "./Home.css"
import Navbar from '../../layout/Navbar'
import BottomNavbar from '../../layout/BottomNavbar'
import HomeTop from "../../assets/images/home-top.png"

const Home = () => {
  return (
    <>
      <Navbar />
      <BottomNavbar />
      <section className=" home body-font px-20">
        <div className="home-top container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" caption  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col    md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl flex flex-col  mb-4 mt-4  ">
              <span className="top-bottom-line ">We are</span>
              <br className="hidden lg:inline-block" />
              <span className="centre-line font-bol ">Ethical</span>
              <br className="hidden lg:inline-block" />
              <span className="centre-line">Fashion</span>
              <br className="hidden lg:inline-block" />
              <span className="top-bottom-line">Store</span>
            </h1>
          </div>
          <div className=" home-top-pic lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HomeTop}
            />
          </div>
        </div>


        <div className='home-middle'>

        </div>
      </section>
    </>
  );
}

export default Home