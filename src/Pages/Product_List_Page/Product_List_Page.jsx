import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import "./Product_List_Page.css"
import filter from "../../assets/images/Product-List-Page/filter.png"
import { FaAngleRight, FaAngleDown, FaAngleUp} from "react-icons/fa";

const Product_List_Page = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
   const [priceDropdown, setPricedropdown] = useState(false);
    const [colorDropdownopen, setColordropdownopen] = useState(false);
   const [minValue, setMinValue] = useState(50);
   const [maxValue, setMaxValue] = useState(1000);
     const toggleDropdown = (dropdownName) => {
       if (openDropdown === dropdownName) {
       
         setOpenDropdown(null);
       } else {
         
         setOpenDropdown(dropdownName);
       }
     };

      const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (newValue >= minValue && newValue <= 1000) {
          setMaxValue(newValue);
        }
      };
      const pricedropdowntoggle=()=>{
        setPricedropdown(!priceDropdown);
      }
      const colordropdowntoggle=()=>{
        setColordropdownopen(!colorDropdownopen)
        
      }
  return (
    <>
      <Navbar />
      <div className="w-full px-10 product-list-page">
        <div className="left-section-product-list  px-4  relative ">
          <h5 className="flex justify-between my-2 items-center">
            Filter <img className=" h-4" src={filter} alt="" />
          </h5>
          <hr />
          <div className="relative mt-2">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("printedTshirt")}
            >
              Printed T-shirt <FaAngleRight />
            </button>
            {openDropdown === "printedTshirt" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            {" "}
            <button
              className="relative flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("plainTshirt")}
            >
              Plain T-shirt <FaAngleRight />
            </button>
            {openDropdown === "plainTshirt" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="relative flex justify-between items-center  py-[3px] w-full"
              onClick={() => toggleDropdown("kurti")}
            >
              Kurti <FaAngleRight />
            </button>
            {openDropdown === "kurti" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("boxers")}
            >
              Boxers <FaAngleRight />
            </button>
            {openDropdown === "boxers" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("fullSleeveTshirts")}
            >
              Full sleeve T-shirts <FaAngleRight />
            </button>
            {openDropdown === "fullSleeveTshirts" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("joggers")}
            >
              Joggers <FaAngleRight />
            </button>
            {openDropdown === "joggers" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("payjamas")}
            >
              Payjamas <FaAngleRight />
            </button>
            {openDropdown === "payjamas" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <div className="relative mb-2">
            <button
              className=" flex justify-between items-center py-[3px] w-full"
              onClick={() => toggleDropdown("jeans")}
            >
              Jeans <FaAngleRight />
            </button>
            {openDropdown === "jeans" && (
              <div className="plp-dropdown-content absolute top-0 left-full flex flex-col">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
          <hr />

          <button
            className="plp-btn w-full flex justify-between my-2 items-center"
            onClick={pricedropdowntoggle}
          >
            Price {priceDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <hr />
          {priceDropdown && (
            <div className="my-4">
              <input
                className="mt-2 w-full  rounded-lg appearance-none cursor-pointer "
                type="range"
                name="range"
                id="range"
                value={maxValue}
                min="50"
                max="1000"
                onChange={handleSliderChange}
              />
              <div className="flex justify-between mt-4">
                <div>
                  <span className=" mr-1">$</span>
                  <input
                    type="number"
                    name="min"
                    id="min"
                    value={minValue}
                    onChange={(e) => setMinValue(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <span className=" mr-1">$</span>
                  <input
                    type="number"
                    name="max"
                    id="max"
                    value={maxValue}
                    onChange={(e) => setMaxValue(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          )}
          <hr />

          <button
            className="plp-btn w-full flex justify-between my-2 items-center"
            onClick={colordropdowntoggle}
          >
            Colors {colorDropdownopen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {colorDropdownopen && <div></div>}
          <hr />
        </div>
      </div>
    </>
  );
};

export default Product_List_Page;

