import React from "react";
import "./Vendor.css";
import Vector from "./Vendorimages/Vector.png";
import Navbar from "../../layout/Navbar";
import heart from './Vendorimages/heart.png'
import Group from './Vendorimages/Group.png'
const Vendor = () => {
  return (
    <>
      <Navbar />
      <div className="vendor px-10 ">
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full  lg:pr-10 lg:py-6 mb-6 ml- lg:mb-0">

        

        
        <div className="flex border-t border-gray-200 py-2  mt-5">
          <span className=" vndr">My Product</span>
          <span className="ml-auto text-gray-900"><img src={Vector} alt="" /></span>
        </div>
        <div className="flex border-t border-gray-200 py-3">
          <span className="vndr">Stock</span>
          <span className="ml-auto text-gray-900"><img src={Vector} alt="" /></span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-3">
          <span className="vndr">Sales Satement</span>
          <span className="ml-auto text-gray-900"><img  src={Vector} alt="" /></span>
        </div>
        
      </div>
      <div className="lg:w-1/2 w-full  lg:h-auto h-64 object-cover flex justify-center object-center relative rounded">
      <img alt="" className="vndr-img" src="https://s3-alpha-sig.figma.com/img/0385/ff38/86f40fefbfdd918125dfd63be7b305f7?Expires=1694390400&Signature=LvmnGny0GbKgqD2VB7vJDbl2nspLExwRG8PSdmnKapm~C~4fNMMl0F2i8Xe4BTpRsBbM7CkRvkJxIlbf-ktWc~6CREi2JdCVMvR8cch6LAVXLyJoiupU1F~BKzBVaUbp4svUpEwX4XKcktXTVQDKHZXCPryIYjEesC5sSY3L0ACLmdk-kk8LeKnpfF9ZxnLGsXGydrD88E0YiJUFo2RQv26PmZ-u9ccIBdTVvKTmONN5V3vHB58ljUdDfq2owKpEIjla-4Qr-LkiRpdOtEa14FgeObOARD8XqzcuieW~JPVpUkeTndk38z52rP7eb77D8mS4eVtc1xr3TrYk-Q1g5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
     
      <div className="vrd-icon-img   flex justify-center align-middle absolute  ">
      <img src={heart} alt="" className="heart" />
      <img className="eye align-middle fixed " src={Group} alt="" />
      </div>
      </div>
    </div>
  </div>
</section>
        
      </div>
     
    </>
  );
};

export default Vendor;
