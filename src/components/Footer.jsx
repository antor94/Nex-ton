import React from 'react'
import { Link } from 'react-router'
import footerlogo from '../assets/images/logo.png'
import { MdFacebook } from "react-icons/md";
import { GrYoutube } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import visa from '../assets/images/visa.png'
import verisign from '../assets/images/verisign.png'
import stripe from '../assets/images/stripe.png'
import paypal from '../assets/images/paypal.png'


const Footer = () => {
  return (
    <>

    <section className=' dark:bg-primary border-t-1 dark:border-[#d5dbe4]'>
      <div className="container">
        <div className="footer_row py-[48px]  lg:py-[60px]">
      <div className='lg:flex pl-[24px]  lg:justify-between lg:items-center'>
        {/* ------------------- footer-logo */}
<div className='w-[309px] h-[198px] mt-[20px]'>
  <Link><img src={footerlogo} alt="logo" /></Link>
  <Link className='pt-[20px] flex items-center gap-[8px]  lg:text-[16px] dark:text-white lg:font-normal lg:font-poppins lg:text-primary'>
    <MdFacebook className='w-[20px] h-[20px] text-[#4676ED]' />
    Facebook</Link>
  <Link className='pt-[20px] flex items-center gap-[8px]  lg:text-[16px] lg:font-normal dark:text-white lg:font-poppins lg:text-primary'>
    <GrYoutube className='w-[20px] h-[20px] text-[#DA0000]' />
    Youtube</Link>
  <Link className='pt-[20px] flex items-center gap-[8px]  lg:text-[16px] lg:font-normal lg:font-poppins dark:text-white lg:text-primary'>
    <FaTelegram className='w-[20px] h-[20px] text-[#38B0E3]' />
    Telegram</Link>
  <Link className='pt-[20px] flex items-center gap-[8px]  lg:text-[16px] lg:font-normal lg:font-poppins lg:text-primary dark:text-white'>
    <AiFillTwitterCircle className='w-[20px] h-[20px] text-[#5A99EC]' />
    
    Twitter</Link>
</div>
{/* ------------- started */}
<div className='w-[309px] h-[188px] flex flex-col gap-[16px] mt-[60px] lg:mt-[0]'>
  <h1 className='text-[16px]  dark:text-white font-semibold font-poppins text-second pt-[4px]'>Getting started</h1>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Release Notes</Link>
  <Link className='text-[16px]  dark:text-white font-normal font-poppins text-primary'>Upgrade Guide</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Browser Support</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Dark Mode</Link>
</div>
{/* ------------ explore */}
<div className='w-[309px] h-[188px] flex flex-col gap-[16px] mt-[60px] lg:mt-[0]'>
  <h1 className='text-[16px]  dark:text-white font-semibold font-poppins text-second pt-[4px]'>Explore</h1>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Prototyping</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Design systems</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Pricing</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Security</Link>
</div>
{/* ------------- community */}
<div className='w-[309px] h-[188px] flex flex-col gap-[16px] mt-[60px] lg:mt-[0]'>
  <h1 className='text-[16px] dark:text-white font-semibold font-poppins text-second pt-[4px]'>Community</h1>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Discussion Forums</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Code of Conduct</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>Contributing</Link>
  <Link className='text-[16px] dark:text-white font-normal font-poppins text-primary'>API Reference</Link>
</div>
      </div>
        </div>
   </div>
    </section>

    </>
  )
}

export default Footer