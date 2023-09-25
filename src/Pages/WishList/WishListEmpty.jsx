import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const WishListEmpty = () => {
  return (
   <div className='w-full h-auto'>
<div className='w-full'>

    <div className='flex justify-center py-8'>
        <div className='w-[5rem] h-[5rem] bg-green-100 rounded-full flex justify-center items-center '>
            <AiOutlineHeart color='darkgreen' className='w-[3rem] h-[3rem]'/>
        </div>
    </div>
        <div className='w-full h-auto flex justify-center flex-col items-center px-4 '>
            <h4 className='font-bold text-lg lg:text-xl'>Your wishlist is empty</h4>
            <p className='font-medium text-base text-[#807D7E] lg:text-lg'> You don’t have any products in the wishlist yet. You will find a lot
of interesting products on our Shop page.</p>

        </div>
        <div className='flex justify-center py-6'>
       <Link to="/" className='bg-[#FD7B85] rounded-lg px-6 py-3 text-white font-semibold text-base  lg:text-lg'> Continue to Shopping</Link> 
        </div>
</div>
   </div>
  )
}

export default WishListEmpty
