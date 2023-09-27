import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import background from "../../assets/images/404/Rectangle 747.png"
const Unfound = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full'>
        <div className='px-4 py-12 lg:px-9'>
                <div className='flex justify-center'>
                    <div className=' relative flex'>
                    <img src={background} alt="" />
                        <div className=' '>
                            <h1 className='text-[200px] font-bold font-Open font-sans absolute top-1 right-[10rem]'>4</h1>
                            <h1 className='text-[200px] font-bold font-Open font-sans text-white absolute top-1 right-[3rem]'>0</h1>
                            <h1 className='text-[200px] font-bold font-Open font-sans  absolute top-1 left-36 transform rotate-45 ' >4</h1>
                        </div>
                    </div>
                        
                </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Unfound