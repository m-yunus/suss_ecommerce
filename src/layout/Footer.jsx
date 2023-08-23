import React from 'react'
import "../../src/assets/css/Footer.css"
import chat from "../../src/assets/images/chat.png"
import instagram from "../assets/images/instagram.png"
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import messenger from "../assets/images/messenger.png";
import whatsapp from "../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="footer px-20">
        <div>
          <p className="footer-text">
            HELP | OUR SERVICES | AUTHANTICITY | CONTACTS <br />
             TERMS | VENDOR
            | STYLIST | ABOUT US
          </p>
        </div>
        <div>
          <button className="chat-btn">
            <img className="chat-image" src={chat} alt="" />
            Chat with us
          </button>
        </div>
        <div className="flex  ">
          <img className="footer-icon" src={instagram} alt="" />
          <img className="footer-icon" src={twitter} alt="" />
          <img className="footer-icon" src={facebook} alt="" />
          <img className="footer-icon" src={messenger} alt="" />
          <img className="footer-icon" src={whatsapp} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer