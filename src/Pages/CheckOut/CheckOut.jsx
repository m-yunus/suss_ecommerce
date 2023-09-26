import React from "react";
import "./CheckOut.css";
import Navbar from "../../layout/Navbar";
import arrow from "../../assets/images/Checkout/arrow.png";
import smry from "../../assets/images/Checkout/smry.png";
import smryimg from "../../assets/images/Checkout/smryimg.png";
import smryimage from "../../assets/images/Checkout/smryimage.png";
import pay from "../../assets/images/Checkout/pay.png";
import visa from "../../assets/images/Checkout/visa.png";
import paypal from "../../assets/images/Checkout/paypal.png";
import paypass from "../../assets/images/Checkout/paypass.png";
import eye from "../../assets/images/Checkout/eye.png";


const CheckOut = () => {
  return (
    <>
      <Navbar />
      <div className="checkout px-16">
        <div className="paths gap-3 px-4">
          <p className="home">Home</p>
          <img src={arrow} alt="" classNameName="chk-path-icon" />
          <p className="myacnt">My Account</p>
          <img src={arrow} alt="" classNameName="chk-path-icon" />
          <p className="chkout">Check Out</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
         
        <section className="text-gray-600 body-font md:w-2/3">
  <div className="container gap-16 flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className=" bill-section  md:w- md:pr-12 md:py-8 md:border- md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <div className="bill-sec">
      <div className="bill-main gap-3">
        <div className="bill-line"></div>
      <h1 className=" chck-title sm:text-3xl  mb-2 font-bold">Check Out</h1>
      </div>
      <div className="bill-main-title">

      <p className="bill-title">Billing Details</p>
      
      </div>
      <div className="bill-input-1 ">
        <div className="bill-inpt ">
          <p className="bill-inpt-title">First Name</p>
          <input type="text" className="bill-input-box " />
        </div>

        <div className="bill-inpt">
          <p className="bill-inpt-title1">Last Name</p>
          <input type="text" className="bill-input-box2" />
        </div>
      </div>

      <div className="bill-input-2">
        <div className="bill-inpt">
          <p className="bill-inpt-title">Country/Region</p>
          <input type="text" className="bill-input-box" />
        </div>

        <div className="bill-inpt">
          <p className="bill-inpt-title1">Company Name</p>
          <input type="text" className="bill-input-box2" />
        </div>
      </div>

      
      <div className="bill-input-3">
        <div className="bill-inpt">
          <p className="bill-inpt-title">Street Adress</p>
          <input type="text" className="bill-input-box" />
        </div>

        <div className="bill-inpt">
          <p className="bill-inpt-title1">Apt,suite,unit</p>
          <input type="text" className="bill-input-box2" />
        </div>
      </div>

      <div className="bill-input-4">
        <div className="bill-inpt">
          <p className="bill-inpt-title2">City</p>
          <input type="text" className="bill-input-box1" />
        </div>

        <div className="bill-inpt">
          <p className="bill-inpt-title2">State</p>
          <input type="text" className="bill-input-box1" />
        </div>

        <div className="bill-inpt">
          <p className="bill-inpt-title2">Postal Code</p>
          <input type="text" className="bill-input-box1" />
        </div>
      </div>

      <div className="bill-inpt">
          <p className="bill-inpt-title2">Phone</p>
          <div className="chk">
          <input type="text" className="bill-input-box" />
          </div>
        </div>
        </div>
    </div>
   


  </div>
  <div className="cnt-button">
  <button className="dlvry-btn">Continue to delivery</button>
  </div>
  <div className="save-input gap-3">
    <input className="save-chkout" type="checkbox" />
    <p className="save-text">Save my information for a faster checkout</p>

  </div>
  <p className="ship-adress">Shipping Address</p>
  <p className="adrs-text">Select the address that matches your card or payment methode</p>
  <div className="bill-adress ">
    <div className="same-as gap-3">
      <input type="radio" />
      <p className="same-text">Same as Billing address</p>
    </div>
    <hr className="adr-hr" />
    <div className="use-dif gap-3">
      <input type="radio" />
      <p className="use-dif-text">Use a different shipping address</p>
    </div>
  </div>
  <p className="shpng-title">Shipping Methode</p>
    
    <div className="shp-mthd-arv px-4">
  <p className="arvs">Arrives by Monday, june 7</p>
  <hr className="arvs-hr" />
  <div className="delivery-charge gap-16">
  <p className="dlvry-charge">delivery Charge</p>
  <p className="dlvry-chrg">$5.00</p>
  </div>
  <p className="fees">Additional fees may apply</p>
  </div>
  
 

  <p className="payment-method">Payment-Methode</p>
  <p className="payment-sub-title">All transaction are secure and encrypted</p>
  
  <div className="credit-card gap-3">
    <input type="radio" className="credit-input" />
    <p className="credit-title">Credit card</p>
  </div>
  <p className="crdt-text px-6">We accept all major credit cards</p>
  <div className="credit-crds">
    <img src={pay} alt="" className="pay" />
    <img src={visa} alt="" className="visa" />
    <img src={paypal} alt="" className="paypal" />
    <img src={paypass} alt="" className="paypass" />
  </div>

  <div className="crdt-inpt gap-3">
    <input placeholder="card number" type="text" className="card-num" />
    <input placeholder="Name of card" type="text" className="card-name" />
  </div>
  <div className="crdt-inpt1 gap-3">
    <input placeholder="Expiration date (MM/YY)" type="date" className="date-birth" />
     <div className="scrt-code">
    <input placeholder="Security Code" type="password" className="scrty-code" ></input>
    <img src={eye} alt="" className="scrt-img" />
    </div>
    
  </div>
  
  <div className="cash-on gap-3">
    <input type="radio" className="cash-on-input" />
    <p className="cash-title">Cash on delivery</p>
  </div>
  <p className="cash-text px-6">Pay with cash upon delivary</p>

  <hr className="cash-hr" />
  <div className="pay-pol gap-3">
    <input type="radio" className="pay-pol-input" />
    <p className="pay-pol-title">Paypol</p>
  </div>
  <div className="play-btn">
  <button className="play-now">Play Now</button>
  </div>

 
</section>
<div className=" smry-sec flex flex-col md:w-1/3 md:pl-15">
      <div className="smry-ttl">
        
      <h2 className="smry-title title-font f text-sm mb-3">Order Summary</h2>
      </div>
      <nav className="flex flex-wrap list-none -mb-1">
        <div className="smry-main gap-5">
       <div className="smry-images">
        <img src={smry} alt="" className="smry-image" />
        
        
      
       
       </div>
       <div className="smry-image-clr">
       <p className="smry-image-title">Blue  flower print Top x 1</p>
          <p className="smry-img-color">Color:yellow</p>
         
          
          
        </div>
        <div className="smry-rate">
        <p className="smry-img-rate">$29.00</p>
        </div>
        
        </div>

        <div className="smry-main gap-7">
       <div className="smry-images">
        <img src={smryimg} alt="" className="smry-image" />
        
        
      
       
       </div>
       <div className="smry-image-clr">
       <p className="smry-image-title">Lavender Hoodie x 2</p>
          <p className="smry-img-color">Color:Lavender</p>
         
          
          
        </div>
        <div className="smry-rate">
        <p className="smry-img-rate">$119.00</p>
        </div>
        
        </div>
       
        <div className="smry-main gap-7">
       <div className="smry-images">
        <img src={smryimage} alt="" className="smry-image" />
        
        
      
       
       </div>
       <div className="smry-image-clr">
       <p className="smry-image-title">Black sweatshirt x 2</p>
          <p className="smry-img-color">Color:Black</p>
         
          
          
        </div>
        <div className="smry-rate ">
        <p className="smry-img-rate">$129.00</p>
        </div>
        
        </div>
        <div className="subtotal-bill mx-auto">
          <div className="subttl-bill gap-16">
            <p className="subtotal">Subtotal (3 item)</p>
            
            <p className="ttl-rate">$513.00</p>
          </div>
          <div className="savings ">
            <p className="svngs">Savings</p>
            <p className="svngs-rate">-$30.00</p>
          </div>
          <div className="shipping">
            <p className="ship">Shipping</p>
            <p className="ship-rate">-$5.00</p>
          </div>
          <div className="total-bill">
            <p className="ttl-bill">Total</p>
            <p className="ttl-rate">$478.00</p>

          </div>

        </div>
        
      </nav>
    </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
