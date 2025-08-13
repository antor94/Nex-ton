import React, { useState } from "react";
import { Link } from "react-router";
import BreadCrum from "../components/common/BreadCrum";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";



const Login = () => {

// --------------- pass-eye
const [showPass , setShowPass] = useState(false)

// -------------- state for form data
const [formData , setFormData] = useState({email:'' , emailError: '' , password:'' , passwordError:'' })

// ------------- handle
const handleLogin =()=>{
  if(!formData.email) {
    setFormData((prev)=>({...prev , emailError:'email not given'}))
  }
    else if(!formData.password) {
      setFormData((prev)=>({...prev , passwordError:'enter your password'}))
    }
}


  return (
    <>
      <section id="resigtation" className="dark:bg-primary">
        <div className="container">
          <BreadCrum  breadContent={'Login'} breadLink={'/Login'}/>
            <div className="mt-[40px]"><h2 className="text-center text-[24px] lg:text-[36px] font-semibold font-poppins text-second dark:text-white">Login</h2> </div>
          <div className="login_row mt-[40px] pb-[72px] px-[24px] lg:flex justify-center ">
            <div>
{/* ----------------------------- email */}
            <div className=" mt-[40px] lg:mt-[60px] mb-[24px]">     
            <p className="text-[12px] font-medium font-poppins text-red-400">{formData.emailError}</p>
              <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">Email</h2>       
               <input  onChange={(e)=>setFormData((prev)=>({...prev , email:e.target.value , emailError:''}))}  className={`w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] 
                py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none`} type="email" placeholder="example@example.com" />
                </div>
{/* ---------------------- password */}
                              <p className="text-[12px] font-medium font-poppins text-red-400">{formData.passwordError}</p>
                            <div className="mb-[24px] relative">
              <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">Password</h2>       
               <input onChange={(e)=>setFormData((prev)=>({...prev , password:e.target.value , passwordError:''}))} className="w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] py-[12px] pl-[16px] text-[14px]
                font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none"  type={showPass? 'text' : 'password'}   />
                   {
                   showPass?                         
                   <FaRegEyeSlash onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />  
                  :
                 <IoEyeOutline onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />                            
                 }
                </div>
                {/* ---------------- button */}
                <button onClick={handleLogin} className="w-[312px] lg:w-[440px]  h-[52px] text-center bg-second dark:bg-indigo-300 text-[16px] font-medium font-poppins text-[#fff] rounded-full hover:bg-green-300  mt-[24px] mb-[32px]">Continue</button>
                <div className="w-[312px] lg:w-[440px] flex items-center "><span className="w-[174px] h-[1.6px] border border-[#F3F4F6] inline-block"></span><p className="w-[36px] lg:px-[51px] text-[14px] font-medium font-poppins text-primary dark:text-white">OR</p><span className="w-[174px] border-[#F3F4F6] h-[1.6px] border inline-block"></span></div>               
               
               {/* ------------------ register */}
               <div className="mt-[24px] text-center">
                <h2 className="text-[16px] font-normal font-poppins text-[#4B5563] dark:text-white">New user? <Link to='/Resigter' className="text-[#0EA5E9]">Create an account</Link></h2>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
