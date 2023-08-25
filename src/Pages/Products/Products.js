import React from "react";
import "./Products.css";
import Star from "../Products/productsimg/Star.png";
import Starhalf from "../Products/productsimg/Starhalf.png";
import Filter from "../Products/productsimg/Filter.png";
import firstpic from "../Products/productsimg/firstpic.jpg";
import scndpic from "../Products/productsimg/scndpic.jpg";
import trdpic from "../Products/productsimg/trdpic.jpg";
import frthpic from "../Products/productsimg/frthpic.jpg";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="head-title px-10  ">
          <div className="title">
            <h3 className="bst-title">Best Selling </h3>
            <div className="starimg">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Starhalf} alt="" />
            </div>
          </div>
          <div className="filter">
            <img className="filter-icon" src={Filter} alt="" />
            <h2 className="filter-text">Filter</h2>
          </div>
        </div>
        <div className="cards gap-5  px-8">
          <img className="cards-img" src={firstpic} alt="" />
          <img className="cards-img" src={scndpic} alt="" />
          <img className="cards-img" src={trdpic} alt="" />
          <img className="cards-img" src={frthpic} alt="" />
        </div>
        <div className="offers-section px-8">
          <div>
          <h1 className="ofr-title">OFFERS</h1>
          </div>
          <div className="image-container">
            <img
              className="ofr-img"
              src="https://thumbs.dreamstime.com/b/collage-cheerful-jumping-multinational-people-air-color-background-panorama-excited-174200583.jpg?w=1200"
              alt=""
            />
            <h3 className="ofr-text">40% OFF</h3>
          </div>
        </div>
        <div className="buy-section px-8">
          <div className="cpns mx-auto">
            <div className="cpn">
              COUPON 1 
              <img src="" alt="" />
             
            </div>
            <div className="cpn ">
              COUPON 2
             <img src="" alt="" />
            </div>
          </div>
          <div className="buy mx-auto">
            <img className="buy-img" src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.1.2019463417.1683196046&semt=sph" alt="" />
            <h2 className="buy-text">BUY 1 GET 1</h2>

          </div>
        </div>
        <div className="footer-cards">
          
        </div>
      </div>
    </>
  );
};

export default Products;
