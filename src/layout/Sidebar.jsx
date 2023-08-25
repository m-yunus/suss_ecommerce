import React from "react";
import "../assets/css/Sidebar/Sidebar.css"
import about from "../assets/images/Sidebar/about.png"
import blog from "../assets/images/Sidebar/blog.png";
import channel from "../assets/images/Sidebar/channel.png";
import hub from "../assets/images/Sidebar/hub.png";
import order from "../assets/images/Sidebar/order.png";
import services from "../assets/images/Sidebar/services.png";
import talk from "../assets/images/Sidebar/talk.png";
import close from "../assets/images/Sidebar/close.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar relative">
        <div className="close">
          <img src={close} alt="" />
        </div>
        <div className="list">
          <ul>
            <li>
              <img src={services} alt="" /> <h1>OUR SERVICES</h1>
            </li>
            <li>
              <img src={hub} alt="" /> <h1>VENDOR HUB</h1>
            </li>
            <li>
              <img src={talk} alt="" /> <h1>TALK TO US</h1>
            </li>
            <li>
              <img src={about} alt="" /> <h1>ABOUT US</h1>
            </li>
            <li>
              <img src={blog} alt="" /> <h1>BLOG</h1>
            </li>
            <li>
              <img className="order-img" src={order} alt="" /> <h1>ORDER</h1>
            </li>
            <li>
              <img className="channel-img" src={channel} alt="" />
              <h1>CHANNEL</h1>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
