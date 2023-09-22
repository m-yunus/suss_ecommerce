import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../layout/Navbar";
import banner from "../../assets/images/Home/banner.jpg";
import Footer from "../../layout/Footer";
import joggers from "../../assets/images/Home/joggers.jpg"
import FullSleeve from "../../assets/images/Home/Full Sleeve in new arrivals.png"
import ActiveTshirt from "../../assets/images/Home/tshirt_newArrival.png"
import Urban_Shirts from "../../assets/images/Home/Urban Shirts.png"
import leftArrow from "../../assets/images/Home/left arrow.svg"
import RightArrow from "../../assets/images/Home/rightarrow.svg"
import shirts from "../../assets/images/Home/Shirts.png"
import Printedshirts from "../../assets/images/Home/Printed-Tshirts.png"
import PlainTshirts from "../../assets/images/Home/PlainTshirt.png"
import PoloTshirts from "../../assets/images/Home/PoloTshirts.png"
import Hoodies from "../../assets/images/Home/Hoodies&Sweatshirt.png"
import CoatsParkas from "../../assets/images/Home/Coats&Parkas.png"
import TeesTshirt from "../../assets/images/Home/Tees&Tshirt.png"
import Boxers from "../../assets/images/Home/Boxers.png"
import middlebannerleft from "../../assets/images/Home/middlebannerleft.png"
import middlebannerright from "../../assets/images/Home/middlebannerright.png"
const Home = () => {
  const items = [
    { imgSrc: joggers, text: 'Knitted joggers' },
    { imgSrc: FullSleeve, text: 'Full Sleeve' },
    { imgSrc: ActiveTshirt, text: 'Active T-shirts' },
    { imgSrc: Urban_Shirts, text: 'Urban Shirts' },
    { imgSrc: FullSleeve, text: 'Full Sleeve' },
    { imgSrc: ActiveTshirt, text: 'Active T-shirts' },
    // Add more items here
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [windowsize, setWindowSize] = useState(2); // Default to 2 cards for mobile

  const itemsToShow = items.slice(startIndex, startIndex + windowsize);

  const prevItem = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextItem = () => {
    if (startIndex + 4 < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setWindowSize(2); // Mobile view: 2 cards
      } else if (windowWidth < 1024) {
        setWindowSize(3); // Tablet view: 3 cards
      } else {
        setWindowSize(4); // Desktop view: 4 cards
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window size check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <main className="relative">
        <div className="absolute top-8 left-4 banner_text flex flex-col gap-4 font-medium text-center">
          <h1 className="font-medium text-white">
            We are Ethical <br /> Fashion Store
          </h1>
          <button className="bg-white flex items-center justify-center rounded-lg w-10/12 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            Shop Now
          </button>
        </div>
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </main>

      {/* New Arrivals Block */}
      <div className="py-7 px-4 sm:py-12 sm:px-8 md:px-12 md:py-16 lg:py-20 lg:px-16 w-full">
        <div className="font-bold text-#3C4242 text-xs sm:text-lg md:text-2xl flex gap-4 items-center">
          <div className="w-1 h-4 bg-[#8A33FD] rounded-3xl sm:h-5"></div>
          <h1 className="text-#3C4242 tracking-wide font-sans not-italic">New Arrivals</h1>
        </div>

        {/* Slider */}
        <div className="flex w-full items-center justify-center gap-4  py-7">
          <div className="flex">
            <img src={leftArrow} alt="" className="cursor-pointer" onClick={prevItem} />
          </div>
          {itemsToShow.map((item, index) => (
            <div className={`w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/4`} key={index}>
              <div>
                <img src={item.imgSrc} alt="" />
              </div>
              <h2 className="text-[#3C4242] text-xs font-bold py-3">{item.text}</h2>
            </div>
          ))}
          <div className="flex">
            <img src={RightArrow} alt="" className="cursor-pointer" onClick={nextItem} />
          </div>
        </div>
      </div>
      {/* Banner in Middle */}
      <div className="w-full h-auto">
        <div className="w-full flex-col sm:flex-row flex px-8 sm:px-24 min-h-[20rem] sm:min-h-[34rem] ">

   
 
    <div className="w-full sm:w-1/2 bg-cover flex flex-wrap justify-center items-center " style={{ backgroundImage: `url(${middlebannerleft})` }}>
      <div className="px-8 py-8  sm:px-24 flex flex-col gap-8">
            <h2 className="text-white font-extrabold  tracking-wider sm:text-xl">WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
            <p className="text-white font-light text-justify  tracking-wide text-sm w-11/12">In our journey to improve everyday fashion, sussin presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
            <button className="bg-white flex items-center justify-center rounded-lg py-2 w-4/12">
            Shop Now
          </button>
      </div>
      {/* Content for the first column */}
    </div>
    <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${middlebannerright})` }}>
      {/* Content for the second column */}
    </div>
    </div>

</div>


    {/* Best in Men Section */}
    <div className="py-7 px-4 sm:py-12 sm:px-8 md:px-12 md:py-16 lg:py-20 lg:px-16 w-full">
        <div className="font-bold text-#3C4242 text-xs sm:text-lg md:text-2xl flex gap-4 items-center">
          <div className="w-1 h-4 bg-[#8A33FD] rounded-3xl sm:h-5"></div>
          <h1 className="text-#3C4242 tracking-wide font-sans not-italic">Best in Men Section</h1>
        </div>

        {/* CArds*/}
        <div className="flex flex-wrap w-full py-7 px-4 gap-12 justify-center">
        
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={shirts} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2"> Shirts</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
            
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={Printedshirts} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Printed T-Shirts</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={PlainTshirts} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Plain T-Shirts</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={PoloTshirts} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Polo T-Shirts</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
          </div>
          
       
         
        </div> 
      </div>
          {/* Best in WoMen Section */}
    <div className="py-7 px-4 sm:py-12 sm:px-8 md:px-12 md:py-16 lg:py-20 lg:px-16 w-full">
        <div className="font-bold text-#3C4242 text-xs sm:text-lg md:text-2xl flex gap-4 items-center">
          <div className="w-1 h-4 bg-[#8A33FD] rounded-3xl sm:h-5"></div>
          <h1 className="text-#3C4242 tracking-wide font-sans not-italic">Best in Women Section</h1>
        </div>

        {/* CArds*/}
        <div className="flex flex-wrap w-full py-7 px-4 gap-12 justify-center">
        
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={Hoodies} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2"> Hoodies & Sweetshirt</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
            
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={CoatsParkas} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Coats & Parkas</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={TeesTshirt} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Tees & T-Shirt</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                
                <img src={RightArrow} alt="" />
            </div>
          </div>
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={Boxers} alt="" />
            </div>
            <div className="flex justify-between">
                <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">Boxers</h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">Explore Now!</h2>
                </div>
                <img src={RightArrow} alt="" />
            </div>
          </div>
          
       
         
        </div> 
      </div>

      {/* Reviews */}

            <div className="w-full h-auto md:py-24 px-24">
              <div className="flex ">

              
              <div  className="border border-[#BEBCBD] p-4">
rey
              </div>
            </div>
            </div>
      <Footer />
    </div>
  );
};

export default Home;
