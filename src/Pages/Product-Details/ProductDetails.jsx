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
const ProductDetails = () => {
  function handleIconClick(event) {
    // Get the index of the clicked icon
    var index = event.target.dataset.index;
  
    // Select the corresponding slide based on the index
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    
    // Remove the active class from the current slide
    activeSlide.classList.remove('active');
  
    // Add the active class to the clicked slide
    slides[index].classList.add('active');
  }
  
  // Add event listeners to the slider icons
  var sliderIcons = document.querySelectorAll('.slider-icon');
  sliderIcons.forEach(function(icon) {
    icon.addEventListener('click', handleIconClick);
  });
  return (
    <>
      <Navbar />
      <div className="product-details mt-10 px-16 flex flex-row justify-center">
        <div className="product-left flex flex-col">
          <div className="flex items-center justify-end relative">
            <img className="product-image" src={product} alt="" />
           
          </div>
          <div className="slider flex flex-row gap-2">
            <div className=" slide flex flex-col" data-intex='0'>
              <img className="slide-img" src={slide} alt="" />
            </div>
            <div className="slide flex flex-col" data-intex='1'>
              <img className="slide-img" src={slideimage} alt="" />
            </div>
            <div className=" slide flex flex-col" data-intex='2'>
              <img className="slide-img" src={slideimg} alt="" />
            </div>
            <div className= "slide flex flex-col" data-intex='3'>
            <img className="slide-img" src={slide} alt="" />
              
            </div>
            <div className=" slide flex flex-col" data-intex='4'>
            <img className="slide-img" src={slideimg} alt="" />
              
            </div>
            <div className="slide flex flex-col" data-intex='5'>
            <img className="slide-img" src={slideimage} alt="" />
              
            </div>
            <div className="slider-icons">
  <img id="slider-icon-1" src={slidericn} alt="" className="slider-icon" />
  <img id="slider-icon-2" src={slidericon} alt="" className="slider-icon" />
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
    </>
  );
};

export default ProductDetails;
