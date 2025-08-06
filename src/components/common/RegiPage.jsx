import React, { useState } from "react";
import { Link } from "react-router";
import BreadCrum from "./BreadCrum";

const Login = () => {

const [email , setEmail] = useState('')

const handlebutton = (alu) =>{
  alu.preventDefault()
  if(!email){
    alert('please enter your email')
  }

  console.log(email)

}


  return (
    <>
      <section id="resigtation" className="dark:bg-primary">
        <div className="container">
          <BreadCrum  breadContent={'Register'}/>
            <div><h2 className="text-center text-[24px] lg:text-[36px] font-semibold font-poppins text-second dark:text-white">Register</h2> </div>
          <form onSubmit={handlebutton} className="login_row mt-[40px] lg:pb-[72px] px-[24px] lg:px-[548px]">


{/* ------------------ email */}
            <div className=" mt-[40px] lg:mt-[60px] mb-[24px]">
              <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">Email</h2>       
               <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none" type="email" placeholder="example@example.com" />    
                </div>

{/* ----------------------- password */}
               <div className="mb-[24px]">
              <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">Password</h2>       
               <input className="w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none" type="password" placeholder="" />   
                </div>

{/* ---------------------- again password */}
                <div className="mb-[24px]">
              <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">Password (Again)</h2>       
               <input className="w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none" type="password" placeholder="" />
                </div>

{/* ------------------- submit */}
                <button className="w-[312px] lg:w-[440px]  h-[52px] text-center bg-second dark:bg-indigo-300 text-[16px] font-medium font-poppins text-[#fff] rounded-full hover:bg-green-300  mt-[24px] mb-[32px]">Continue</button>
                <div className="w-[312px] lg:w-[440px] flex items-center "><span className="w-[174px] h-[1.6px] border border-[#F3F4F6] inline-block"></span><p className="w-[36px] lg:px-[51px] text-[14px] font-medium font-poppins text-primary dark:text-white">OR</p><span className="w-[174px] border-[#F3F4F6] h-[1.6px] border inline-block"></span></div>   
             
             {/* --------------- login */}
               <div className="mt-[24px] text-center">
                <h2 className="text-[16px] font-normal font-poppins text-[#4B5563] dark:text-white">Already a member?<Link to='/Login' className="text-[#0EA5E9]"> Login</Link></h2>
               </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
