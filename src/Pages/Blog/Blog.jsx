import React from "react";
import "./Blog.css";
import Navbar from "../../layout/Navbar";
import youtube from "../../assets/images/Blog/YouTube.png";
import lifestyle1 from "../../assets/images/Blog/lifestyle-1.png";
import lifestyle2 from "../../assets/images/Blog/lifestyle-2.png";
import lifestyle3 from "../../assets/images/Blog/lifestyle-3.png";
import original1 from "../../assets/images/Blog/original-1.png";
import original2 from "../../assets/images/Blog/original-2.png";
import original3 from "../../assets/images/Blog/original-3.png";
import circle from "../../assets/images/Blog/circle.png"

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="blog px-20 py-10 flex flex-col ">
        <div className="video-section flex justify-center items-center mx-auto">
          <img className="youtube-img" src={youtube} alt="" />
        </div>
        <div className="lifestyle flex flex-col">
          <div className="flex flex-col">
            <h2>Voice of</h2>
            <h1>Sustainable lifestyle</h1>
            <h3>Explore the Stories and collection</h3>
          </div>
          <div className=" lifestyle-images flex my-10 flex-row justify-between">
            <img className="lifestyle-pic" src={lifestyle1} alt="" />
            <img className="lifestyle-pic" src={lifestyle2} alt="" />
            <img className="lifestyle-pic" src={lifestyle3} alt="" />
          </div>
        </div>
        <div className=" flex flex-col">
          <h1 className="original-title">The original Life</h1>
          <div className="original-images flex flex-row justify-between ">
            <img className="original-pic-1" src={original1} alt="" />
            <img className="original-pic-2" src={original2} alt="" />
            <img className="original-pic-3" src={original3} alt="" />
          </div>
        </div>
        <div className="organic flex flex-col ">
          <h1>Organic or Original</h1>
          <h3>Find your Fabric worth wearing it</h3>
          <div className="flex justify-between my-8 ">
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
