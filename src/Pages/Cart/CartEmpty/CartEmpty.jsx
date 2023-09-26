import React from 'react'
import Navbar from '../../../layout/Navbar'
import box from "../../../assets/images/Cart-Empty/Box.png"
import chatimage from "../../../assets/images/Cart-Empty/Group.png"
import Eye from "../../../assets/images/Cart-Empty/eye.png"
import Arc from "../../../assets/images/Cart-Empty/Arc.png"
import Trash from "../../../assets/images/Cart-Empty/Trash.png"
import { Link } from 'react-router-dom'
import Footer from '../../../layout/Footer'
const CartEmpty = () => {
  return (
    <>
    <div className='w-full h-auto'>
     
        <div className='w-full py-12 flex flex-col'>

            <div className='w-full flex-col '>
                <div className='flex  justify-center h-auto'>

               
                <div className='relative'>
                   
                        <div className='relative right-5 top-5'>

                       
                        <img src={chatimage} alt="" className='max-w-[5rem] ' />
                        <img src={Eye} alt="" className='absolute max-w-[2rem] top-4 left-5'/>
                        <img src={Arc} alt="" className='absolute max-w-[1rem] top-7 left-7'/>
                        </div>
                  
                    <img src={box} alt="" className='max-w-[6rem]' />
                    <div className='absolute top-10 left-[3.8rem] -z-10 '>
                    <img src={Trash} alt="" className='max-w-[6rem]' />
                    </div>
                </div>
                </div>
                <div className='w-full py-6'>
                    
                        <h2 className='text-black font-bold text-center '>Your cart is empty and sad :(</h2>
                        <h2 className='text-center text-xs text-[#807D7E]'>Add something to make it happy!</h2>
                  
                </div>
                <div className='flex justify-center py-3'>
       <Link to="/" className='bg-[#FD7B85] rounded-lg px-3 py-2 text-white font-semibold text-sm  lg:text-lg'> Continue to Shopping</Link> 
        </div>
                </div> 
        </div>
     
    </div>
    </>
  )
}

export default CartEmpty