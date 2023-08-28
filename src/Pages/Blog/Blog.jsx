import React from 'react'
import "./Blog.css"
import Navbar from '../../layout/Navbar'
import youtube from "../../assets/images/Blog/YouTube.png"

const Blog = () => {
  return (
   <>
   <Navbar/>
   <div className='blog px-20 py-10  '>
    <div className='video-section flex justify-center items-center mx-auto'>
        <img className='youtube-img' src={youtube} alt="" />
    </div>


   </div>
   
   </>
  )
}

export default Blog