import React from "react";
import "./ProductDetails.css";
import Navbar from "../../layout/Navbar";
import product from "../../assets/images/Product-Details/product.png";
import pound from "../../assets/images/Product-Details/pound.png";
import downarrow from "../../assets/images/Product-Details/down-arrow.png";
import rightarrow from "../../assets/images/Product-Details/right-arrow.png";
import fav from "../../assets/images/Product-Details/fav.png";
import delivery from "../../assets/images/Product-Details/delivery.png";
import plus from "../../assets/images/Product-Details/plus.png";
import next from "../../assets/images/Product-Details/next.png"


const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="product-details mt-10 px-16 flex flex-row justify-center">
        <div className="product-left flex flex-col">
          <div className="flex items-center justify-end relative">
            <img className="product-image" src={product} alt="" />
            <img className="next-image right-4 absolute top-1/2" src={next} alt="" />
          </div>
          <div className="rects flex flex-row gap-2">
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
            <p className="prdct-dtls">
              dfhsncsgttyrerfdbcnvmhsguwgtdwudtwudgwudgshjrtjrtjtgdhmhmhm
            </p>
          </div>
          <div className="price flex items-center">
            <img src={pound} alt="" />
            <h1>45</h1>
          </div>
          <div className="color flex items-center">
            <h1>Colour</h1>
            <h2>Yello Clow</h2>
          </div>
          <div className="size flex items-center justify-center ">
            <div className="flex flex-row items-center ">
              <h1>Size</h1>

              <div className="flex ">
                <div className="size-box">S</div>
                <div className="size-box">M</div>
                <div className="size-box">L</div>
                <div className="size-box">XL</div>
              </div>
              <img className="dwn-arrow" src={downarrow} alt="" />
            </div>

            <div className="find flex  items-center">
              <p>Find Your Fit Guide</p>
              <img className="rgt-arrow" src={rightarrow} alt="" />
            </div>
          </div>
          <div className="bag flex items-center">
            <div className="addtobag">ADD TO BAG</div>
            <div>
              <img src={fav} alt="" />
            </div>
          </div>
          <div className="delivery flex justify-center items-center">
            <div>
              <img src={delivery} alt="" />
            </div>
            <div className="ms-3">
              <p>Free Delivery</p>
              <a href="">View our Delivery & Returns Policy</a>
            </div>
          </div>
          <div className="last-prdct-dtls flex mb-10 flex-col justify-center ">
            <div className="flex">
              <h3>Product Details</h3>
              <img src={plus} alt="" />
            </div>
            <div className="flex">
              <h3>Brand</h3>
              <img src={plus} alt="" />
            </div>
            <div className="flex">
              <h3>About Me</h3>
              <img src={plus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
