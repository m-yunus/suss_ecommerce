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
        <div className="head-title px-10 ">
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
      </div>
    </>
  );
};

export default Products;
