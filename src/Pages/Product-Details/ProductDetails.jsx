import React from "react";
import "./ProductDetails.css";
import Navbar from "../../layout/Navbar";
import product from "../../assets/images/Product-Details/product.png";
import pound from "../../assets/images/Product-Details/pound.png"


const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-16 flex flex-row">
        <div className="flex flex-col">
          <div>
            <img className="product-image" src={product} alt="" />
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
              <div className="small-rect"></div>
              <div className="big-rect"></div>
            </div>
            <div className="flex flex-col">
              <div className="small-rect"></div>
              <div className="big-rect"></div>
            </div>
            <div className="flex flex-col">
              <div className="small-rect"></div>
              <div className="big-rect"></div>
            </div>
            <div className="flex flex-col">
              <div className="small-rect"></div>
              <div className="big-rect"></div>
            </div>
          </div>
        </div>

        <div className="product-right">
          <div>
            <h1>Product Name</h1>
            <p>
              dfhsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjrtjrtjtgdnsdkgfiwlufgtiwougfk
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
