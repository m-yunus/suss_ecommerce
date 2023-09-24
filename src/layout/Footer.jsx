import React from 'react'



const Footer = () => {
  return (
    <>
      <footer className=" px-3 bg-[#3C4242] w-full h-auto py-4 ">
       
        <div className='w-full py-4'>
           <div className=' flex flex-col w-full gap-4 md:flex-row lg:px-24 lg:justify-evenly'>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Need help</h2>
                   <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col'>
                    <li>Contact us</li>
                    <li>Track Order</li>
                    <li>Returns </li>
                    <li>FAQ's</li>
                    <li>Career</li>
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Company</h2>
                   <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col'>
                    <li>About us</li>
                    <li>Sussin Blog</li>
                    <li>Sussinstan</li>
                    <li>Collaboration</li>
                    <li>Media</li>
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>More Info</h2>
                   <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col'>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Sitemap</li>
                   
                   </ul>
              </div>
              <div className=''>
                  <h2 className='text-white text-lg font-bold'>Location</h2>
                   <ul className='text-white font-normal text-xs flex flex-wrap gap-4 md:flex-col'>
                    <li>Support@Sussin.in</li>
                    <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                    <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                   
                   
                   </ul>
              </div>
           </div>
        </div>
      </footer>
    </>
  );
}

export default Footer