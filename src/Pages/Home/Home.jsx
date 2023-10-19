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
import Review1 from "../../assets/images/Home/Review1.png"
import star from "../../assets/images/Home/star_purple500.png"
import axios from "axios";
const Home = () => {
  const[categories,setcategories]=useState([])
  const items = [
    { imgSrc: joggers, text: "Knitted joggers" },
    { imgSrc: FullSleeve, text: "Full Sleeve" },
    { imgSrc: ActiveTshirt, text: "Active T-shirts" },
    { imgSrc: Urban_Shirts, text: "Urban Shirts" },
    { imgSrc: FullSleeve, text: "Full Sleeve" },
    { imgSrc: ActiveTshirt, text: "Active T-shirts" },

    // Add more items here
  ];

  const reviewss = [
    {
      imgSrc: Review1,
      stars: [star, star, star, star],
      author: "Floyd Miles",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
    },
    {
      imgSrc: Review1,
      stars: [star, star, star, star],
      author: "iu7iui",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
    },
    {
      imgSrc: Review1,
      stars: [star, star, star, star],
      author: "hgj",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
    },
    {
      imgSrc: Review1,
      stars: [star, star, star, star],
      author: "hgj",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
    },
  ];
  const [reviewIndex, setReviewIndex] = useState(0);
    const handleLeftArrowClick = () => {
      
      setReviewIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

  const handleRightArrowClick = () => {
   
    const maxReviewsToShow =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

    
    let newIndex = reviewIndex + maxReviewsToShow;

    
    if (newIndex >= reviewss.length) {
      newIndex = reviewss.length - maxReviewsToShow;
    }

    setReviewIndex(newIndex);
  };



  const [startIndex, setStartIndex] = useState(0);
  const [windowsize, setWindowSize] = useState(2); // Default to 2 cards for mobile
  const slideInterval = 4000;

  const [reviewWindowSize, setReviewWindowSize] = useState(3);

  const itemsToShow = items.slice(startIndex, startIndex + windowsize);
 const reviewsToShow = reviewss.slice(
   reviewIndex,
   reviewIndex + reviewWindowSize
 );

  const prevItem = () => {
    let newIndex = startIndex - 1;
    if (startIndex < 0) {
      newIndex = items.length - windowsize;
    }
    setStartIndex(newIndex);
  };

  const nextItem = () => {
    let newIndex = startIndex + 1;
    if (newIndex + windowsize > items.length) {
      newIndex = 0; // Go back to the first set of items
    }
    setStartIndex(newIndex);
  };

 

  useEffect(() => {
    const slideTimer = setInterval(nextItem, slideInterval);
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setReviewWindowSize(1); // Mobile view: 1 review
        setWindowSize(2); // Mobile view: 2 cards
      } else if (windowWidth < 1024) {
        setWindowSize(3); // Tablet view: 3 cards
        setReviewWindowSize(2); // Tablet view: 2 reviews
      } else {
        setWindowSize(4); // Desktop view: 4 cards
        setReviewWindowSize(3); // Desktop view: 3 reviews
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window size check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      clearInterval(slideTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [startIndex]);
  const fetchcategories=async()=>{
    try {
      const res= await axios.get(`https://suss.onrender.com/api/product/get-all-categories`)
      console.log(res.data);
      setcategories(res.data)
    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
fetchcategories();
},[])
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <main className="relative">
        <div className="absolute top-10  left-8 banner_text flex flex-col gap-4 font-medium text-center">
          <h1 className="font-medium text-white ">
            We are Ethical <br /> Fashion Store
          </h1>
          <button className="bg-white flex font-bold items-center justify-center rounded-md w-8/12 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            Shop Now
          </button>
        </div>
        <img src={banner} alt="" className="w-full h-auto object-cover" />
      </main>

      {/* New Arrivals Block */}
      <div className="py-7 px-4 sm:py-12 sm:px-8 md:px-12 md:py-16 lg:py-20 lg:px-16 w-full">
        <div className="font-bold text-#3C4242 text-xs sm:text-lg md:text-2xl flex gap-4 items-center">
          <div className="w-1 h-4 bg-[#8A33FD] rounded-3xl sm:h-5"></div>
          <h1 className="text-[#3C4242] tracking-wide font-sans not-italic">
            New Arrivals
          </h1>
        </div>

        <div className="carousel-container relative">
          {/* Slider */}
          <div className="carousel flex w-full items-center justify-center gap-4 py-7 overflow-hidden ">
            {itemsToShow.map((item, index) => (
              <div
                className={`carousel-slide w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/4 transform transition-transform duration-300 `}
                key={index}
              >
                <div>
                  <img src={item.imgSrc} alt="" />
                </div>
                <h2 className="text-[#3C4242] text-xs font-bold py-3">
                  {item.text}
                </h2>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="carousel-arrow cursor-pointer"
              onClick={prevItem}
            >
              <img src={leftArrow} alt="Previous" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="carousel-arrow cursor-pointer"
              onClick={nextItem}
            >
              <img src={RightArrow} alt="Next" />
            </button>
          </div>
        </div>
      </div>

      {/* Banner in Middle */}
      <div className="w-full h-auto">
        <div className="w-full flex-col sm:flex-row flex px-8 sm:px-24 min-h-[20rem] sm:min-h-[34rem] ">
          <div
            className="w-full sm:w-2/2 md:w-1/2 bg-cover flex flex-wrap justify-center items-center "
            style={{ backgroundImage: `url(${middlebannerleft})` }}
          >
            <div className="px-4 py-8  sm:px-8 md:px-4 lg:px-14 xl:px-24 flex flex-col gap-4">
              <h2 className="text-white font-extrabold  tracking-wider  sm:text-xl">
                WE MADE YOUR EVERYDAY FASHION BETTER!
              </h2>
              <p className="text-white font-light text-justify  tracking-wide text-sm w-11/12">
                In our journey to improve everyday fashion, sussin presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </p>
              <button className="bg-white flex items-center font-bold  text-xs justify-center rounded-lg py-2 w-4/12">
                Shop Now
              </button>
            </div>
            {/* Content for the first column */}
          </div>
          <div
            className="w-1/2 bg-cover hidden md:block"
            style={{ backgroundImage: `url(${middlebannerright})` }}
          >
            {/* Content for the second column */}
          </div>
        </div>
      </div>

      {/* Best in Men Section */}
      <div className="py-7 px-4 sm:py-12 sm:px-8 md:px-12 md:py-16 lg:py-20 lg:px-16 w-full">
        <div className="font-bold text-#3C4242 text-xs sm:text-lg md:text-2xl flex gap-4 items-center">
          <div className="w-1 h-4 bg-[#8A33FD] rounded-3xl sm:h-5"></div>
          <h1 className="text-[#3C4242] tracking-wide font-sans not-italic">
            Best in Men Section
          </h1>
        </div>

        {/* CArds*/}
        <div className="flex flex-wrap w-full py-7 px-4 gap-12 justify-center">
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={shirts} alt="" />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  {" "}
                  Shirts
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Printed T-Shirts
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Plain T-Shirts
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Polo T-Shirts
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
          <h1 className="text-[#3C4242] tracking-wide font-sans not-italic">
            Best in Women Section
          </h1>
        </div>

        {/* CArds*/}
        <div className="flex flex-wrap w-full py-7 px-4 gap-12 justify-center">
          <div className="w-2/5 sm:w-1/5 h-auto flex flex-col">
            <div>
              <img src={Hoodies} alt="" />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  {" "}
                  Hoodies & Sweetshirt
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Coats & Parkas
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Tees & T-Shirt
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
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
                <h2 className="text-[#3C4242] text-xs font-bold pt-2">
                  Boxers
                </h2>
                <h2 className="text-[#7F7F7F] text-xs font-medium">
                  Explore Now!
                </h2>
              </div>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}

      <div className="w-full flex flex-row gap-4 h-auto px-2 sm:px-8 py-2 md:py-24 md:px-24  ">
        <img
          src={leftArrow}
          alt=""
          onClick={handleLeftArrowClick}
          className=" cursor-pointer"
        />
        {reviewsToShow.map((review, index) => (
          <div
            className={`border border-[#BEBCBD] p-4 rounded-xl w-full flex-col`}
            key={index}
          >
            <div className="flex justify-between">
              <div>
                <img src={review.imgSrc} alt="" />
              </div>
              <div className="flex">
                {review.stars.map((starSrc, index) => (
                  <img
                    src={starSrc}
                    alt={`Star ${index + 1}`}
                    key={index}
                    className="object-cover w-7 h-7"
                  />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-[#3C4242] font-thin">{review.author}</h1>
            </div>
            <div className="py-4">
              <p className="text-[#807D7E] text-sm lg:text-base  overflow-hidden text-justify">
                {review.text}
              </p>
            </div>
          </div>
        ))}
        <img
          src={RightArrow}
          alt=""
          onClick={handleRightArrowClick}
          className=" cursor-pointer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
