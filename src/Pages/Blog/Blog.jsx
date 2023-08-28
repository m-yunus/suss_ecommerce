import React from "react";
import "./Blog.css";
import Navbar from "../../layout/Navbar";
import youtube from "../../assets/images/Blog/YouTube.png";
import lifestyle1 from "../../assets/images/Blog/lifestyle-1.png"
import lifestyle2 from "../../assets/images/Blog/lifestyle-2.png";
import lifestyle3 from "../../assets/images/Blog/lifestyle-3.png";

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
      </div>
    </>
  );
};

export default Blog;
