import React from "react";
import logo from "../../src/assets/images/logo.png";

import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar text-gray-600 body-font px-20">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center p ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 ">
              <img className="logo" src={logo} alt="" />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-10 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.2152 18.2481C34.2152 20.668 33.254 22.9887 31.5429 24.6998C29.8318 26.4109 27.511 27.3722 25.0911 27.3722C22.6713 27.3722 20.3505 26.4109 18.6394 24.6998C16.9283 22.9887 15.967 20.668 15.967 18.2481C15.967 15.8283 16.9283 13.5075 18.6394 11.7964C20.3505 10.0853 22.6713 9.12402 25.0911 9.12402C27.511 9.12402 29.8318 10.0853 31.5429 11.7964C33.254 13.5075 34.2152 15.8283 34.2152 18.2481ZM29.6532 18.2481C29.6532 19.4581 29.1725 20.6184 28.317 21.474C27.4614 22.3295 26.3011 22.8102 25.0911 22.8102C23.8812 22.8102 22.7208 22.3295 21.8653 21.474C21.0097 20.6184 20.5291 19.4581 20.5291 18.2481C20.5291 17.0382 21.0097 15.8778 21.8653 15.0223C22.7208 14.1667 23.8812 13.6861 25.0911 13.6861C26.3011 13.6861 27.4614 14.1667 28.317 15.0223C29.1725 15.8778 29.6532 17.0382 29.6532 18.2481Z"
                  fill="#045A11"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.0913 0C11.234 0 0 11.234 0 25.0913C0 38.9485 11.234 50.1825 25.0913 50.1825C38.9485 50.1825 50.1825 38.9485 50.1825 25.0913C50.1825 11.234 38.9485 0 25.0913 0ZM4.56205 25.0913C4.56205 29.8586 6.18842 34.2473 8.91425 37.7327C10.8286 35.2188 13.2981 33.1815 16.1301 31.78C18.9621 30.3784 22.0797 29.6506 25.2395 29.6533C28.3585 29.6504 31.4369 30.3594 34.2403 31.7263C37.0437 33.0932 39.4981 35.082 41.4166 37.5411C43.393 34.949 44.7237 31.9234 45.2986 28.7149C45.8736 25.5063 45.6762 22.207 44.7229 19.0899C43.7696 15.9727 42.0877 13.1274 39.8164 10.7893C37.5451 8.45126 34.7497 6.68764 31.6615 5.64442C28.5733 4.60119 25.2811 4.30834 22.0572 4.79009C18.8333 5.27185 15.7705 6.51436 13.1222 8.41482C10.4739 10.3153 8.31619 12.8191 6.82763 15.719C5.33908 18.6189 4.56246 21.8316 4.56205 25.0913ZM25.0913 45.6205C20.3786 45.6276 15.8081 44.0063 12.1533 41.0311C13.6244 38.9251 15.5825 37.2056 17.8609 36.0189C20.1393 34.8323 22.6706 34.2135 25.2395 34.2154C27.7764 34.2133 30.2772 34.8166 32.5341 35.975C34.791 37.1334 36.739 38.8136 38.2163 40.876C34.5331 43.9478 29.8873 45.6272 25.0913 45.6205Z"
                  fill="#045A11"
                />
              </svg>
            </a>
            <a className="mr-10 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M34.6524 26.6418C36.4202 26.6418 37.9758 25.6754 38.7772 24.214L47.2155 8.91668C48.0876 7.36102 46.9562 5.42823 45.1649 5.42823H10.2804L8.06476 0.714111H0.357178V5.42823H5.0713L13.5567 23.3183L10.3747 29.0695C8.65403 32.228 10.9168 36.07 14.4995 36.07H42.7842V31.3559H14.4995L17.0923 26.6418H34.6524ZM12.5196 10.1423H41.1579L34.6524 21.9276H18.1058L12.5196 10.1423ZM14.4995 38.4271C11.9068 38.4271 9.80899 40.5484 9.80899 43.1412C9.80899 45.7339 11.9068 47.8553 14.4995 47.8553C17.0923 47.8553 19.2137 45.7339 19.2137 43.1412C19.2137 40.5484 17.0923 38.4271 14.4995 38.4271ZM38.0701 38.4271C35.4774 38.4271 33.3796 40.5484 33.3796 43.1412C33.3796 45.7339 35.4774 47.8553 38.0701 47.8553C40.6629 47.8553 42.7842 45.7339 42.7842 43.1412C42.7842 40.5484 40.6629 38.4271 38.0701 38.4271Z"
                  fill="#045A11"
                />
              </svg>
            </a>
            <a className="mr-10 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M21.4604 42.9186C26.2219 42.9176 30.8462 41.3237 34.5969 38.3907L46.3894 50.1825L50.1825 46.3896L38.39 34.5977C41.3248 30.8468 42.9197 26.2217 42.9209 21.4593C42.9209 9.62717 33.2932 0 21.4604 0C9.62769 0 0 9.62717 0 21.4593C0 33.2914 9.62769 42.9186 21.4604 42.9186ZM21.4604 5.36482C30.337 5.36482 37.5558 12.5832 37.5558 21.4593C37.5558 30.3354 30.337 37.5538 21.4604 37.5538C12.5839 37.5538 5.36511 30.3354 5.36511 21.4593C5.36511 12.5832 12.5839 5.36482 21.4604 5.36482Z"
                  fill="#045A11"
                />
              </svg>
            </a>
            <a className="mr-1 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                viewBox="0 0 66 44"
                fill="none"
              >
                <path
                  d="M21.8978 43.7957H65.6935V36.4964H21.8978V43.7957ZM0 0V7.29928H65.6935V0H0ZM21.8978 25.5475H65.6935V18.2482H21.8978V25.5475Z"
                  fill="#045A11"
                />
              </svg>
            </a>
          </nav>
        </div>
        
      </header>
    </>
  );
};

export default Navbar;
