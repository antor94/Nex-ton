import logo from "../assets/images/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router";
import Card from "./Card";
import { useState } from "react";

const Navbar = () => {

// --------------- usestate

const [showCart , setShowCart] = useState(false)
const localIds = JSON.parse(localStorage.getItem('productID'))


  return (
    <>
      <nav id="main_nav" className="py-[27px]  hidden lg:block">
        <div className="container">
          <div className="menu_row flex justify-between items-center">
          
            {/* ------------- main-logo */}

            <Link to={'/'} className="menu_logo w-[119px]"> <img src={logo} alt="logo" /></Link>

            {/* -------------- search button */}

            <div className="menu_src w-[400px] h-[52px] rounded-[100px] bg-[#F8F8F8] flex items-center pl-[24px]">
              <RiSearch2Line  className="text-xl text-primary"/>
              <input className="w-full pl-[10px] outline-none border-none text-[14px] font-normal font-poppins" type="text" placeholder="Search in products..." />
            </div>

            {/* ------------- nav icon */}

            <div className="menu_item flex ">
           <Link to='/Login' className="text-2xl text-primary mr-[22px] dark:text-[#fff]"><RiUserLine/></Link>     
           <button onClick={()=>setShowCart(true)} className="text-2xl text-primary relative dark:text-[#fff]">
            <PiShoppingCart/>      
            <span className="w-[20px] h-[20px] rounded-full bg-[#0EA5E9] text-[12px] font-normal font-poppins text-[#fff] flex  justify-center
           items-center absolute top-[-10px] left-[14px]">{ localIds? localIds.length : 0}</span>
           </button>    
            </div>
          </div>
        </div>
      </nav>
      
      {/* <Card /> */}

      {
        showCart&&
        <Card closeCart={()=>setShowCart(!showCart)} />
      }

    </>
  );
};

export default Navbar;
