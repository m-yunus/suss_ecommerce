import React from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import BottomNavbar from "../../layout/BottomNavbar";
import HomeTop from "../../assets/images/home-top.png";
import arrow from "../../assets/images/arrow.png";
import greaterthan from "../../assets/images/greaterthan.png";
import eye from "../../assets/images/accessories.png";
import fav from "../../assets/images/footwear.png";
import arrow2 from "../../assets/images/arrow-2.png";
import { BestSelling } from "../../data/BestSellingData";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <BottomNavbar />

      <section className=" home body-font px-20">
        <div className="home-top container mx-auto flex px-20  pt-20 pb-4 md:flex-row flex-col items-center">
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
          <div className=" home-top-pic lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HomeTop}
            />
            <div className="flex  items-center   my-8">
              <p className="collection ">
                SHOP THIS <br />
                COLLECTION
              </p>
              <div className="round">
                <img className="arrow" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-middle flex flex-wrap flex-col mt-8">
          <div className="flex flex-wrap mx-auto">
            <div className="stylist ">
              <h1>
                <div>Shop with</div>
                <div className="flex items-center ">
                  Stylist{" "}
                  <img
                    className="greaterthan-img ms-4"
                    src={greaterthan}
                    alt=""
                  />
                </div>
              </h1>
            </div>
            <div className="cat  flex flex-col mx-auto mt-auto  ">
              <h2 className=" mx-auto title-cat mb-4">Shop By Categories</h2>
              <div className=" flex justify-between mx-14 ">
                <div className="category ">Clothing</div>
                <div className="category flex flex-col ">
                  <img className="w-6" src={eye} alt="" /> Accessories
                </div>
                <div className="category flex flex-col ">
                  <img className="w-5" src={fav} alt="" /> Footwear
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-bottom  my-20 ">
          <h1 className="best-selling mb-4">Best Selling</h1>
          <div className="flex flex-wrap justify-between">
            {BestSelling.map((data) => (
              <div key={data.id} className="relative">
                <div className="">
                  <img
                    className="best-selling-image "
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <img className="arrow-icon w-20 m-5" src={arrow2} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                  <img className="fav-icon m-3 w-6" src={fav} alt="" />
                </div>
                <div className="absolute top-0 left-0">
                  <img className="eye-icon w-8 m-3" src={eye} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
