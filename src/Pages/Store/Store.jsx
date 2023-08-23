import React from "react";
import "./Store.css";
import Navbar from "../../layout/Navbar";

import pound from "../../assets/images/Store/pound.png";
import close from "../../assets/images/Store/close.png";
import downarrow from "../../assets/images/Store/down-arrow.png";
import fav from "../../assets/images/Store/fav.png";
import { StoreData } from "../../data/StoreData";

const Store = () => {
  return (
    <>
      <Navbar />
      <div className=" px-16 py-10 mx-auto flex flex-wrap bg-grey-700   text-center">
        <div className=" cart-left ">
          <div className="my-bag ">
            <h1>MY BAG</h1>
          </div>

          {StoreData.map((data) => (
            <div className=" my-8 flex   ">
              <div>
                <img className="item-image " src={data.image} alt="" />
              </div>

              <div className="item-details flex-col ps-3.5 pt-1 flex relative  my-auto">
                <div className="flex   items-center ">
                  <img className="w-11 h-11" src={pound} alt="" />
                  <h1 className="price ps-2">{data.price}</h1>
                </div>
                <div className="py-2">
                  <p className="product-name  flex">Product Name</p>
                </div>
                <div className="flex flex-row gap-10 pt-1  ">
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
                <div className="flex items-center mt-3">
                  <img className="store-fav" src={fav} alt="" />
                  <p className="later">Save For Later</p>
                </div>

                <img className="absolute top-1 right-1" src={close} alt="" />
              </div>
            </div>
          ))}
          <div className="sub-total flex justify-between px-6">
            <h1>SUB-TOTAL</h1>
            <h1> £95.00</h1>
          </div>
        </div>
        <div className=" cart-right b">
          <div className="total flex justify-between px-6">
            <h1>SUB-TOTAL</h1>
            <h1> £95.00</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
