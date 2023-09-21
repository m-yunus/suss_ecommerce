import React from 'react'
import "./Product_List_Right.css"
import product from "../../../assets/images/Product-List-Page/product.png"
import heart from "../../../assets/images/Product-List-Page/heart.png";

const Product_List_Right = () => {
  return (
    <>
      <div className="prdct-lst-right w-full px-10">
        <div className="flex justify-between">
          <h1>Womens Clothing</h1>
          <h1>Recommended</h1>
        </div>
        <div>
          <div className="plr-set my-6 relative">
            <img src={product} alt="" />
            <img className="absolute top-2 right-2" src={heart} alt="" />
            <div className='flex w-100 mt-6 items-center'>
              <div className='w-3/4'>
                <h2>Black Sweatshirt with ...</h2>
                <h3>Jhanvi’s Brand</h3>
              </div>
              <button >$123.00</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_List_Right