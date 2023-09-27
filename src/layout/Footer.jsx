import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';



const Footer = () => {
  return (
    <>
      <footer className=" px-3 bg-[#3C4242] w-full h-auto py-4 ">
       
        <div className='w-full py-4'>
           <div className=' flex flex-col w-full gap-4 md:flex-row lg:px-24 lg:justify-evenly'>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Need help</h2>
                   <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col my-4'>
                    <li>Contact us</li>
                    <li>Track Order</li>
                    <li>Returns </li>
                    <li>FAQ's</li>
                    <li>Career</li>
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Company</h2>
                  <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col my-4'>
                    <li>About us</li>
                    <li>Sussin Blog</li>
                    <li>Sussinstan</li>
                    <li>Collaboration</li>
                    <li>Media</li>
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>More Info</h2>
                  <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col my-4'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Sitemap</li>
                   
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Location</h2>
                  <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col my-4'>
                    <li>Support@Sussin.in</li>
                    <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                    <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                   
                   
                   </ul>
              </div>
           </div>

           <div className='w-full lg:px-4 py-4'>
            <div className='flex px-3 lg:px-64 gap-3'>
              <div className=' bg-white w-[2rem] h-[2rem] rounded-xl flex justify-center items-center '>
                  <BiLogoFacebook/>
              </div>
              <div className=' bg-white w-[2rem] h-[2rem] rounded-xl flex justify-center items-center '>
                <AiOutlineInstagram/>
              </div>
              <div className=' bg-white w-[2rem] h-[2rem] rounded-xl flex justify-center items-center '>
                 <AiOutlineTwitter/>
              </div>
              <div className=' bg-white w-[2rem] h-[2rem] rounded-xl flex justify-center items-center '>
              <BiLogoLinkedin/>
              </div>
            </div>

           </div>
        </div>
      </footer>
    </>
  );
}

export default Footer