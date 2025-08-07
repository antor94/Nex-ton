import React, { use, useState } from "react";
import { Link } from "react-router";
import BreadCrum from "./BreadCrum";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import axios from "axios";



const Login = () => {

  // -------------- email.
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  // ------------- password 
  const [pass , setPass] = useState('')
  const [passwordError , setPassError] = useState('')

// --------------- pass-eye

const [showPass , setShowPass] = useState(false)


// --------------- loding
const [loading , setloading] = useState(false)


  const handlebutton = (alu) => {
    alu.preventDefault();
if (!email) return setEmailError("Please enter your email");
if (!pass) {
  setPassError("Please enter your password");

}
else{
  setloading(!loading)
axios.post(' https://api.escuelajs.co/api/v1/users/' , {email , password:pass} )
.then((res)=>{
  console.log(res)
  setloading(!loading)
  toast.success('🦄 Wow so easy!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
})
.catch((err)=>{console.log(err)
  setloading(false)
  toast.error('Something wrong', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
})
}

  };

  return (
    <>
      <section id="resigtation" className="dark:bg-primary">
        <div className="container">
          <BreadCrum breadContent={"Register"} />
          <div className="pt-[40px]">
            <h2 className="text-center text-[24px] lg:text-[36px] font-semibold font-poppins text-second dark:text-white">
              Register
            </h2>{" "}
          </div>
          <form
            onSubmit={handlebutton}
            id="resi-row"
            className="  pb-[72px] px-[24px] lg:flex justify-center"
          >
            <div>
              {/* ------------------ email */}
              <div className=" mt-[40px] lg:mt-[60px] mb-[24px]">
                <p className="text-[12px]  font-medium font-poppins text-red-500"> {emailError}  </p>
                <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">  Email</h2>   
            <input onChange={(e) => {setEmail(e.target.value) , setEmailError("") }}  className={`w-[312px] lg:w-[440px]  border rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none`}  type="email" placeholder="example@example.com"   />
              </div>
              {/* ----------------------- password */}
              <div className="mb-[24px] relative">
                 <p className="text-[12px]  font-medium font-poppins text-red-500"> {passwordError}  </p>
                <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">
                  Password
                </h2>
                <input onChange={(e)=>{setPass(e.target.value) , setPassError('')} }
                  className=' w-[312px] lg:w-[440px] border  rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none'
                  type={showPass? 'text' : 'password'}  /> 

                  {
                    showPass?
                    
                    <FaRegEyeSlash onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />  
                    :
                    <IoEyeOutline onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />  
                    
                  }
                   </div>
              {/* ---------------------- again password */}
              <div className="mb-[24px] relative">
                <h2 className="text-[16px] font-semibold font-poppins text-second dark:text-white mb-[8px] ">
                  Password (Again)
                </h2>
                <input
                  className="w-[312px] lg:w-[440px] border border-[#E5E7EB] rounded-[12px] py-[12px] pl-[16px] text-[14px] font-normal font-poppins dark:text-yellow-300 text-[#4B5563] outline-none"
               type={showPass? 'text' : 'password'}  />
                                  {
                    showPass?
                    
                    <FaRegEyeSlash onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />  
                    :
                    <IoEyeOutline onClick={()=> setShowPass(!showPass)} className="text-[20px] dark:text-white absolute top-11 right-5" />  
                    
                  }         
              </div>
              {/* ------------------- submit */}
              <div className="flex flex-col">
                {
                  loading?
                <button className="w-[312px] lg:w-[440px] cursor-progress  h-[52px] text-center bg-second dark:bg-indigo-300 text-[16px] font-medium font-poppins text-[#fff] rounded-full hover:bg-green-300  mt-[24px] mb-[32px]">
                <div class="flex justify-center flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
  <div
    class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
  ></div>
</div>

              </button>
              :
                  <button className="w-[312px] lg:w-[440px]  h-[52px] text-center bg-second dark:bg-indigo-300 text-[16px] font-medium font-poppins text-[#fff] rounded-full hover:bg-green-300  mt-[24px] mb-[32px]">
                Continue
              </button>
                }
              </div>
   {/* ----------------- or */}
              <div className="w-[312px] lg:w-[440px] flex items-center ">
                <span className="w-[174px] h-[1.6px] border border-[#F3F4F6] inline-block"></span>
                <p className="w-[36px] lg:px-[51px] text-[14px] font-medium font-poppins text-primary dark:text-white">
                  OR
                </p>
                <span className="w-[174px] border-[#F3F4F6] h-[1.6px] border inline-block"></span>
              </div>

              {/* ---------------- login */}
              <div className="mt-[24px] text-center">
                <h2 className="text-[16px] font-normal font-poppins text-[#4B5563] dark:text-white">
                  Already a member?
                  <Link to="/Login" className="text-[#0EA5E9]">
                    {" "}
                    Login
                  </Link>
                </h2>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
