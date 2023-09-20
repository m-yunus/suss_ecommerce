import React from "react";
import "./ProductDetails.css";
import Navbar from "../../layout/Navbar";
import product from "../../assets/images/Product-Details/product.jpg";
import pound from "../../assets/images/Product-Details/pound.png";
import downarrow from "../../assets/images/Product-Details/down-arrow.png";
import rightarrow from "../../assets/images/Product-Details/right-arrow.png";
import fav from "../../assets/images/Product-Details/fav.png";
import delivery from "../../assets/images/Product-Details/delivery.png";
import plus from "../../assets/images/Product-Details/plus.png";
import next from "../../assets/images/Product-Details/next.png"
import left from "../../assets/images/Product-Details/left.png"
import Star from "../../assets/images/Product-Details/Star.png"
import Icon from "../../assets/images/Product-Details/Icon.png"
import arrow from "../../assets/images/Product-Details/arrow.png"
import black from "../../assets/images/Product-Details/black.png"
import pink from "../../assets/images/Product-Details/pink.png"
import red from "../../assets/images/Product-Details/red.png"
import yellow from "../../assets/images/Product-Details/yellow.png"
import payment from "../../assets/images/Product-Details/payment.png"
import size from "../../assets/images/Product-Details/size.png"
import slide from "../../assets/images/Product-Details/slide.jpg"
import slideimg from "../../assets/images/Product-Details/slideimg.jpg"
import slideimage from "../../assets/images/Product-Details/slideimage.jpg"
import slidericn from "../../assets/images/Product-Details/slidericn.png"
import slidericon from "../../assets/images/Product-Details/slidericon.png"
import women from "../../assets/images/Product-Details/women.jpg"
import men from "../../assets/images/Product-Details/men.jpg"
import  { useState } from 'react';
const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 0, src: slide },
    { id: 1, src: slideimage },
    { id: 2, src: slideimg },
    { id: 3, src: slide },
    { id: 4, src: slideimg },
    { id: 5, src: slideimage },
  ];
  const slidesToShow = 3;
  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex-1 - slidesToShow + slides.length) % slides.length
    );
  };
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex+1 + slidesToShow) % slides.length);
  };
 
  return (
    <>
      <Navbar />
      <div className="product-details mt-10 px-16 flex flex-row justify-center">
        <div className="product-left flex flex-col">
          <div className="flex items-center justify-end relative">
            <img className="product-image" src={product} alt="" />
           
          </div>
          <div className="slider flex flex-row gap-2">
        {slides.map((slideData) => {
          const { id, src } = slideData;
          return (
            <div
              key={id}
              className={`slide flex flex-col ${id >= currentIndex &&
                id  < currentIndex+1 + slidesToShow
                ? ''
                : 'hidden'}`}
              data-intex={id}
            >
              <img className="slide-img" src={src} alt="" />
            </div>
          );
        })}
        <div className="slider-icons">
          <img
            id="slider-icon-1"
            src={slidericn}
            alt=""
            className="slider-icon"
            onClick={handleClickPrev}
          />
          <img
            id="slider-icon-2"
            src={slidericon}
            alt=""
            className="slider-icon"
            onClick={handleClickNext}
          />
        </div>
      </div>
        </div>

        <div className="product-right">
          <div>
            <div className="paths gap-5">
            <h4 className="path">Shop</h4>
            <img className="path-arrow" src={left} alt="" />
            <h4 className="path">Women</h4>
            <img className="path-arrow" src={left} alt="" />
            <h4 className="path">Top</h4>
            
            </div>
            <h1 className="prdct-t">Raven Hoodie with Black colored Design</h1>
            <div className="prdct-dtls gap-3">
             <img src={Star} alt="" className="prdct-star" />
             <img src={Star} alt="" className="prdct-star" />
             <img src={Star} alt="" className="prdct-star" />
             <img src={Star} alt="" className="prdct-star" />
             <img src={Star} alt="" className="prdct-star" />
             <p className="rating">3.5</p>
             <img src={Icon} alt="" className="msg-icon" />
             <p className="cmt"> 120 comment</p>
            </div>
          </div>
          <div className="slct-sizes gap-5">
              <h1 className="slct-size">Select Size</h1>
              <h4 className="size-guide">Size Guide</h4>
              <img src={arrow} alt="" className="size-guide-icon" />
              </div>
          <div className="size flex items-center ">
        
            <div className="flex flex-row items-center ">
              

              <div className="size-box-icons flex gap-3 ">
                <div className="size-box-s">S</div>
                <div className="size-box-m">M</div>
                <div className="size-box-large">L</div>
                <div className="size-box-xl">XL</div>
              </div>
      
            </div>

           
          </div>
          <h1 className="color-title">Colours Available </h1>
          <div className="color gap-6 flex items-center">
            <img src={black} alt="" className="clr-icon" />
            <img src={yellow} alt="" className="clr-icon" />
            <img src={pink} alt="" className="clr-icon" />
            <img src={red} alt="" className="clr-icon" />


            
          </div>

          <div className="bag gap-3 flex items-center">
            <div className="addtobag">Add to cart</div>
            <div className="rate-btn">
             $63.00
            </div>
          </div>
          <hr className="hr" />
          <div className="delivery gap-20  flex justify-center items-center">
            <div className="payment" >
              <img src={payment} alt="" />
           
          
              <p className="payment-title">Secure payment</p>
              </div>
              <div className="size-fit">
              <img src={size} alt="" />
              <p className="size-fit-title">Size & fit</p>
              </div>
             
            
          </div>
         
        </div>
       
      </div>
      <div className="description-similar px-16 gap-20">
      <div className="product-description">
          <div className="prdct-description-title gap-2">
            <div className="desctn-line"></div>
            <h2 className="prdct-desptn-title">Product <br /> Description</h2>
          </div>
          <p className="desptn">100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with  fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
         <div className="desptn-table">
          <div className="first-row g">
            <div className="clm1">
              <p className="clm-title">Fabric</p>
              <p className="clm-discptn">Bio-washed cotton</p>
            </div>
            <div className="clm2">
            <p className="clm-title">Pattern</p>
            <p className="clm-discptn">Printed</p>
            </div>
            <div className="clm3">
            <p className="clm-title">Fit</p>
            <p className="clm-discptn">Regular Fit</p>
            </div>
          </div>
          <div className="scnd-row ">
          <div className="clm4">
              <p className="clm-title">Neck</p>
              <p className="clm-discptn">Rounded Neck</p>
            </div>
            <div className="clm5">
            <p className="clm-title">Sleeve</p>
            <p className="clm-discptn">Half Sleeves</p>
            </div>
            <div className="clm6">
            <p className="clm-title">Style</p>
            <p className="clm-discptn">Casual Wear</p>
            </div>
          </div>
       
         </div>
        </div>
        <div className="similar-product">
          <div className="similar-prdct gap-3">
            <div className="similar-titles gap-3">
            <div className="similar-line"></div>
            <div className="similar-title">Similar <br /> Products</div>
            </div>

            <div  className="similar-images gap-6 relative  best-selling-set">
                <div className="">
                  <img
                    className="best-selling-image object-cover spaced-image "
                    src={women}
                    alt=""
                  />
                  <p className="similar-img-title">White T-shirt</p>
                  <div className="similar-img-brand-price">
                  
                  <p className="similar-img-brand">Priya's Brand</p>
                  <p className="similar-img-price">$13.00</p>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0">
                  <img className="fav-icon m-3 w-6" src={fav} alt="" />
                </div>
                <div className="">
                  <img
                    className="best-selling-image object-cover spaced-image "
                    src={men}
                    alt=""
                  />
                  <p className="similar-img-title">Dark Green Sweatshirt...</p>
                  <div className="similar-img-brand-price ">
                  
                  <p className="similar-img-brand">Roboto's Brand</p>
                  <p className="similar-img-price">$127.00</p>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0">
                  <img className="fav-icon m-3 w-6" src={fav} alt="" />
                </div>
                
              </div>
          </div>
          
          <div className="similar-image">
            
          </div>
        </div>
        </div>
    </>
  );
};

export default ProductDetails;
