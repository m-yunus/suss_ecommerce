import React from 'react'
import "./Product_List_Right.css"

import heart from "../../../assets/images/Product-List-Page/heart.png";
import { ProductData } from '../ProductData';

const Product_List_Right = () => {
  return (
    <>
      <div className="prdct-lst-right w-full px-10 mx-auto mr-14">
        <div className="flex justify-between">
          <h1>Womens Clothing</h1>
          <h1>Recommended</h1>
        </div>
        <div className="flex justify-between flex-wrap gap-6 xl:gap-x-[100px]">
          {ProductData.map((data) => (
            <div
              className="plr-set my-6 relative cursor-pointer mx-auto "
              key={data.id}
            >
              {" "}
              <img src={data.image} alt="" />
              <img className="absolute top-2 right-2" src={heart} alt="" />
              <div className="flex w-100 mt-6 items-center">
                <div className="w-3/4">
                  <h2>{data.title}</h2>
                  <h3>{data.brand}</h3>
                </div>
                <button>{data.price}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product_List_Right