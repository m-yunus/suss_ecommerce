import React from "react";
import "./Store.css";

const Store = () => {
  return (
    <>
      <div className="header">
        <h5 className="best">
          Best Selling
          <span className="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 44 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_445)">
                <path
                  d="M21.9915 32.2892L33.0408 39.1687L30.1086 26.2028L39.8707 17.4789L27.0155 16.3539L21.9915 4.12573L16.9674 16.3539L4.1123 17.4789L13.8743 26.2028L10.9422 39.1687L21.9915 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_445">
                  <rect
                    width="42.91"
                    height="44.2648"
                    fill="white"
                    transform="translate(0.536133 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 43 45"
              fill="none"
            >
              <g clip-path="url(#clip0_43_433)">
                <path
                  d="M21.4551 32.2892L32.5045 39.1687L29.5723 26.2028L39.3343 17.4789L26.4792 16.3539L21.4551 4.12573L16.4311 16.3539L3.57593 17.4789L13.338 26.2028L10.4058 39.1687L21.4551 32.2892Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_433">
                  <rect
                    width="42.9101"
                    height="44.2648"
                    fill="white"
                    transform="translate(0 0.437012)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 47 48"
              fill="none"
            >
              <g clip-path="url(#clip0_43_449)">
                <path
                  d="M42.6157 18.6659L28.9221 17.4478L23.5704 4.44189L18.2187 17.4675L4.52515 18.6659L14.9239 27.9587L11.8004 41.7702L23.5704 34.442L35.3404 41.7702L32.236 27.9587L42.6157 18.6659ZM23.5704 30.7681V12.4969L26.8271 20.4341L35.169 21.1807L28.8459 26.8389L30.7505 35.2475L23.5704 30.7681Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_43_449">
                  <rect
                    width="45.7086"
                    height="47.1515"
                    fill="white"
                    transform="translate(0.715088 0.512451)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="filter">
            <button className="filter-btn">
              <span className="ftr-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 90 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_43_429)">
                    <path
                      d="M26.7831 48.2097H37.4964V42.8531H26.7831V48.2097ZM8.03491 16.0699V21.4266H56.2446V16.0699H8.03491ZM16.0699 34.8182H48.2096V29.4615H16.0699V34.8182Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_43_429">
                      <rect width="60." height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Filter
            </button>
          </div>
        </h5>
      </div>

      <div className="cards ">
        <div className="row">
          <div className="card1"></div>
        </div>
        <div className="row">
          <div className="card2"></div>
        </div>
        <div className="row">
          <div className="card3"></div>
        </div>
        <div className="row">
          <div className="card4"></div>
        </div>
      </div>
      <div className="offers">
        <h3 className="title">OFFERS</h3>
      </div>
      <div className="ofr-card"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-7 py-24 mx- flex flex-wrap">
          <div className="offr-crd lg:w-5/6 mx-auto">
            <div className="ofr flex flex-wrap w-full bg-green-900 py-32 px-10 relative mb-4">
              <div className="text-center relative z-10 w-full">
                <h2 className=" off-text text-2xl text-white  font-normal title-font mb-2">
                  40% OFF
                </h2>
                <p className="leading-relaxed"></p>
                <a className="mt-3 text-indigo-500 inline-flex items-center"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="smcards">
        <div className="smcard">
          <div className="cpn-card">
            <img src="" alt="" />COUPON 1</div>
          <div className="cpn-card">
            <img src="" alt="" />COUPON 2</div>
          
        </div>
        <div className="by-card">BUY 1 GET 1
          <img src="" alt="" />
        </div>

      </div>
      <div className="collections">
        <h2 className="clction-title">COLLECTIONS</h2>
      </div>

      
    </>
  );
};

export default Store;
