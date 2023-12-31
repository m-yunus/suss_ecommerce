import React, { useEffect, useState } from "react";

import Navbar from "../../layout/Navbar";
import login from "../../assets/images/Register/log.jpg";
import google from "../../assets/images/Register/google.png";
import twitter from "../../assets/images/Register/twitter.png";
import eye from "../../assets/images/Register/eye.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, twitterprovider } from "../../FIrebaseLogin/config";
import axios from "axios";
import SigninNavbar from "../../layout/SigninNavbar";

const LoginPage = () => {
  const [value, setvalue] = useState("");
  const[twittervalue,setTwittervalue]=useState("");
  const [logindata,setlogindata]=useState({
    email:"",
    password:""
  });
  const handleSigninGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setvalue(data.user.email);
      sessionStorage.setItem("google", data.user.email);
    });
  };
  const handloginchange=(event)=>{
    const {name,value}=event.target;
    setlogindata((prevdata) => ({
      ...prevdata, 
      [name]: value 
    }));
  }
  const handleloginsubmit=async()=>{
    try {
      const res=await axios.post(`https://suss.onrender.com/api/user/login`,logindata)
      const token = res.data.token;
      sessionStorage.setItem("user-token", token);
    console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }
  const handlesigninTwitter=()=>{
    signInWithPopup(auth,twitterprovider).then((data)=>{
        sessionStorage.setItem("twitter", data.user.displayName);
        setTwittervalue(data.user.displayName)
        console.log(data.user.displayName);
    })
  }
  useEffect(() => {
    setvalue(sessionStorage.getItem("google"));
    setvalue(sessionStorage.getItem("twitter"));
  });
  return (
    <>
      <SigninNavbar />
      <div className="register   w-full flex  ">
        <div className="register-left w-1/2  h-auto ">
          <div className="w-full">
            <img src={login} alt="" />
          </div>
        </div>
        <div className="register-right w-1/2  flex  max-w-[50rem]  mt-4  ">
          <div className="signup flex flex-col w-[100%]   px-20    mx-auto">
            <h1 className="font-bold text-xs">Sign In Page</h1>

            <button
              className="google-signup mt-8 border  font-semibold "
              onClick={handleSigninGoogle}
            >
              <img src={google} alt="" /> Continue With Google
            </button>
            <button
              className="twitter-signup  font-semibold mt-5"
              onClick={handlesigninTwitter}
            >
              <img src={twitter} alt="" />
              Continue With Twitter
            </button>

            <div className="flex my-8 sign-in-or-section gap-2 items-center">
              <hr className="w-full bg-gray-400 h-[2px]" /> <h6> OR</h6>{" "}
              <hr className="w-full bg-gray-400 h-[2px]" />
            </div>
            <span className="    flex flex-col">
              <label htmlFor="">User name or email address</label>
              <input
                placeholder="designer@gmail.com"
                type="email"
                name="email"
                id=""
                value={logindata.email}
                onChange={(e) => handloginchange(e)}
              />
            </span>
            <div className="pass-section-signup ">
              <span className="flex justify-between mt-8">
                <label htmlFor="">Password</label>

                <span className="flex items-center gap-2">
                  <img className="w-4 h-4" src={eye} alt="" />
                  <h4>Hide</h4>
                </span>
              </span>
              <input
                className="w-full"
                type="password"
                name="password"
                id=""
                value={logindata.password}
                onChange={(e) => handloginchange(e)}
              />
              <h4 className="flex justify-end">
                <a className="underline" href="">
                  Forget your password
                </a>
              </h4>
            </div>

            <button className="signup-button mb-2" onClick={handleloginsubmit}>
              Sign In
            </button>
            <h5>
              Don’t have an account?
              <a href="" className="underline">
                Sign up
              </a>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
