import React from "react";
import "./Store.css";
import Navbar from "../../layout/Navbar";

import pound from "../../assets/images/Store/pound.png";
import close from "../../assets/images/Store/close.png";
import downarrow from "../../assets/images/Store/down-arrow.png";
import fav from "../../assets/images/Store/fav.png";
import { StoreData } from "../../data/StoreData";
import card from "../../assets/images/Store/card.png"

const ProductStore = () => {
  return (
    <>
      <Navbar />
      <div className="store  px-16 py-10 mx-auto flex flex-row flex-wrap bg-grey-700   text-center ">
        <div className=" store-left  flex flex-col  items-center ">
          <div className="my-bag ">
            <h1>MY BAG</h1>
          </div>

          {StoreData.map((data) => (
            <div className=" map my-8 flex">
              <div>
                <img className="item-image " src={data.image} alt="" />
              </div>
              <div className="item-details flex-col ps-3.5 pt-1 flex relative  my-auto">
                <div className="flex   items-center ">
                  <img className="pound-image w-11 h-11" src={pound} alt="" />
                  <h1 className="store-price ps-2">{data.price}</h1>
                </div>
                <div >
                  <p className="product-name py-2 flex">Product Name</p>
                </div>
                <div className="flex color-size-qty flex-row gap-10 pt-1  ">
                  <div className="flex items-center">
                    <p>Color </p>
                    <img className="down-arrow" src={downarrow} alt="" />
                  </div>
                  <div className="flex items-center">
                    <p>Size </p>
                    <img className="down-arrow" src={downarrow} alt="" />
                  </div>
                  <div className="flex items-center">
                    <p>Qty:1 </p>
                    <img className="down-arrow" src={downarrow} alt="" />
                  </div>
                </div>
                <div className="flex save-later items-center mt-3">
                  <img className="store-fav" src={fav} alt="" />
                  <p className="later">Save For Later</p>
                </div>

                <img className="absolute top-1 right-1" src={close} alt="" />
              </div>
            </div>
          ))}
          <div className="sub-total  flex justify-between px-6">
            <h1>SUB-TOTAL</h1>
            <h1> £95.00</h1>
          </div>
        </div>

        <div className=" store-right mx-auto  flex flex-col items-center ">
          <div className="total flex justify-between  px-6">
            <h1>TOTAL</h1>
            <h1> £95.00</h1>
          </div>
          <div className="total-section mx-auto pt-1">
            <div className="checkout flex flex-col justify-between mt-10  mx-auto ">
              <div className="flex flex-row justify-between">
                <h1>SUB TOTAL</h1>
                <h2>£95.00</h2>
              </div>
              <div>
                <hr className="line" />
              </div>
            </div>
            <div className="checkout flex flex-col justify-between mt-10 mx-auto ">
              <div className="flex flex-row justify-between">
                <h1>DELIVERY</h1>
                <h2>£15.00</h2>
              </div>
              <div>
                <hr className="line" />
              </div>
            </div>
            <div className="flex items-center py-10 justify-between ">
              <h1 className="discount ">Discount code</h1>
              <input
                type="text"
                className=" discount-input "
                placeholder="Enter Code"
              ></input>
            </div>
            <div className="checkout-last flex justify-center items-center">
              <h1>CHECKOUT</h1>
            </div>
            <div className="flex py-7 gap-5 justify-center  ">
              <h1 className="card">WE ACCEPT</h1>
              <img className="card-image" src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductStore;
