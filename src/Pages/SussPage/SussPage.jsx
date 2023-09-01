import React from 'react'
import './SussPage.css'
import Navbar from '../../layout/Navbar'
import {AiOutlineHeart} from 'react-icons/ai'

const SussPage = () => {
  return (
    <>
    <Navbar/>
    <div className="wish-style px-">
        <div className="suss-wish">
            <div className="suss-button gap-2"><AiOutlineHeart/>Wish List  </div>
           <div className="suss-wish-images gap-2">
            <div className="suss-wish-img">
            <img className='wish-img' src="" alt="" />
            </div>
            <div className="suss-wish-img">
            <img className='wish-img' src="" alt="" />
            </div>
            <div className="suss-wish-img">
            <img className='wish-img' src="" alt="" />
            </div>
            <div className="suss-wish-img">
                <img className='wish-img' src="" alt="" />
            </div>
            <div className="suss-wish-img">
            <img className='wish-img' src="" alt="" />
            </div>
            <div className="suss-wish-img">
            <img className='wish-img' src="" alt="" />
            </div>
           </div>


        </div>





        <div className="suss-style">
            <div className="style-button">Style Board</div>
            <div className="suss-style-images gap-2">
                <div className="style-img">
                  
                </div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
                <div className="style-img"></div>
            </div>



        </div>
    </div>
      
    </>
  )
}

export default SussPage
