import React from 'react'
import Navbar from '../../layout/Navbar';
import Product_List_Left from './Product_List_Left/Product_List_Left';
import Product_List_Right from './Product_List_Right/Product_List_Right';

const Product_List_Page = () => {
  return (
    <>
    <Navbar/>
      <div className='flex mx-14'>
        <Product_List_Left/>
        <Product_List_Right/>
      </div>
    </>
  );
}

export default Product_List_Page