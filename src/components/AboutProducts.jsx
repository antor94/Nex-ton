import React, { useEffect, useState } from 'react'
import logo from '../assets/images/svg.png'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import SellerCard from './common/SellerCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

import BreadCrum from './common/BreadCrum'


const AboutProducts = () => {

// ----------------slider item
  

// ----------------slider item

  
  // ------------- perams


<<<<<<< HEAD
=======
useEffect(() => {
  if (perams.id) {
    axios.get(`https://api.escuelajs.co/api/v1/products/${perams.productId}`)
      .then((res) => selectedImage(res.data))
      .catch((err) => console.error(err));
  }
}, [perams.id]);


>>>>>>> 17e57a6daf82d5aa35d841b468e337e02fa3ac3e

// ---------------------- recomended product

const [recommendedProducts, setRecommendedProducts] = useState([]);

useEffect(() => {
  axios.get('https://api.escuelajs.co/api/v1/products?limit=12')
    .then(res => setRecommendedProducts(res.data))
    .catch(err => console.error("Error fetching recommended products:", err));
}, []);

  return (
    <>

{/* ------------------- slider img + price cart */}
<section id='about-product' className='dark:bg-primary'>
  <div className="container">
  <BreadCrum breadContent={' AboutProducts'} breadLink={'/AboutProducts'} />
    <div className="slider_row pt-[40px]">
      <div className=' lg:flex justify-between' >

        {/*-------------------  slider */}



{/* --------------------- responsive-produtCard */}

        <div className='w-[460px] h-[463px] lg:border lg:border-[#E5E7EB] rounded-[16px] px-[33px] '>
          <div className=' flex  justify-between items-center'>
     
     {/* ----------------- responsive details */}
           <div className='lg:hidden'><h2 className='text-[24px] truncate w-[300px]  dark:text-white    lg:text-[36px] font-semibold font-poppins text-second'>gsfgdf</h2>
          <div className='lg:hidden mt-[20px] mb-[24px] '>
            <h2 className='text-[24px] font-semibold font-poppins  dark:text-white    text-second'> $</h2>
            <h2 className=' line-through text-[14px] flex  font-medium font-poppins  dark:text-white    text-primary'>$79.00</h2>
          </div>
           <div className='flex justify-between gap-[5px]'>
              <div className='flex items-center gap-[5px]'>
            <FaStar className='text-yellow-500' />
            <h2 className='text-[12px] font-normal font-poppins  dark:text-white text-primary'>4.9 (98)</h2>
              </div>
            </div>
            </div>

{/* ----------------------- rating + review */}
            <div className='py-[33px]   hidden   lg:flex justify-between gap-[5px]'>
              <div className='flex items-center gap-[5px]'>
            <FaStar className='text-yellow-500' />
            <h2 className='text-[16px] font-semibold  dark:text-white    font-poppins text-second'>4.9</h2>
              </div>
            .
          <h2 className='text-[16px] font-medium  dark:text-white    font-poppins text-primary'>142 reviews</h2>
            </div>
{/* --------------------- price */}
          <div className='hidden lg:inline-block'>
            <h2 className='text-[24px] font-semibold  dark:text-white    font-poppins text-second'>$</h2>
            <h2 className=' line-through text-[14px]  dark:text-white    font-medium font-poppins text-primary'>$199.99</h2>
          </div>
          </div>

{/* ------------------ size details */}
          <div>
            <h2 className='text-[16px] font-semibold font-poppins  dark:text-white    text-second'>Size: S</h2>
            <div className=' flex  gap-[10px] pt-[12px]'>
            <button className='flex w-[72px] py-[10px] px-[31px] border  dark:text-white    border-[#E5E7EB] rounded-[12px] hover:text-white  hover:bg-[#0EA5E9] text-[16px] font-semibold font-poppins text-primary'>S</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border  dark:text-white    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>M</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border  dark:text-white    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary '> L</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border  dark:text-white    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>Xl</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border  dark:text-white    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>2Xl</button>
          </div>
            </div>

{/* ------------------- button */}
            <div className='py-[38px] flex items-center gap-[50px] lg:justify-between'>
              <div className='w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full'>
                <button className=' border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center '>-</button>
                <h2 className='text-[16px] font-medium font-poppins text-primary'>1</h2>
                <button className='border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center'>+</button>

              </div>
              <button className=' lg:w-[178px] bg-black hover:scale-[1.1] hover:bg-green-300 duration-[.4s] rounded-full'><h2 className='py-[14px] px-[32px] text-[16px] font-medium font-poppins text-white '>Add to cart</h2> </button>
            </div>
{/* ------------------- sub-total */}

            <div className=' hidden lg:block'>
            <div className='flex justify-between items-center gap-[10px] pt-[32px] pb-[16px]'>
              <div>
                <p className='text-[16px] font-normal font-poppins dark:text-white    text-primary'>$169.99 x 1</p>
                <p className='text-[16px] font-normal font-poppins dark:text-white    text-primary'>Tax estimate</p>
              </div>
              <div>
                <p className='text-[16px] font-normal font-poppins dark:text-white    text-primary'>$169.99</p>
                <p className='text-[16px] font-normal font-poppins dark:text-white    text-primary'>$0</p>
              </div>            
            </div>      
              <div className='flex justify-between items-center pt-[16px] pb-[33px]'>
                <h2 className='text-[16px] font-semibold font-poppins dark:text-white    text-second'>Total</h2>
              <h2 className='text-[16px] font-semibold font-poppins dark:text-white    text-second'>$169.99</h2>
              </div>
            </div>
        </div>

        
      </div>
    </div>
  </div>
</section>


{/* --------------------- product items */}
    
    <section id='AboutProduct' className=' pt-[40px] pb-[76px] lg:pt-[52px] lg:pb-[96px] dark:bg-primary'>
        <div className="container">
            <div className="product_row lg:pl-0 px-[30px]">
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h1 className='text-[20px] lg:text-[36px] dark:text-white     font-semibold hidden lg:inline-block font-poppins text-second'><span className='text-[20px] inline-block lg:hidden  font-semibold font-poppins text-second'> About this product</span></h1>
                    <p className='w-[310px] lg:w-[735px]  dark:text-white    text-[14px] lg:text-[16px] font-normal font-poppins  text-primary pt-[4px] '></p>
                </div>
                {/* ----------------- cart details */}
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h2 className='text-[20px] lg:text-[24px] dark:text-white     font-semibold font-poppins  text-second'>Fabric + Care</h2>
                    <p className='text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary  pt-[4px]'>Material: Soft wool blend</p>
                    <p className='text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary '>Color: Various</p>
                </div>
                {/* ----------------- sale */}
                <div className='pb-[40px] lg:pb-[60px]  '>
                    <h2 className='text-[20px] lg:text-[24px] dark:text-white     font-semibold font-poppins  text-second'>Sale performance</h2>
                    <p className='text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary  pt-[4px]'>Sales: 0</p>
                    <p className='text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary '>Review Count: -</p>
                    <p className='text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary '>Review Average: -</p>
                </div>
                {/* -------------------- keyword */}
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h2 className='text-[20px] lg:text-[24px] font-semibold font-poppins  dark:text-white     text-second'>Keywords</h2>
                    <div className='pt-[8px] flex  flex-wrap gap-[8px] lg:gap-[8px] items-center'>
                        <div className='w-[144px] py-[8px] px-[14px] rounded-full flex gap-[10px] items-center border border-[#E5E7EB]'>
                            <img src={logo} alt="logo" className='text-white w-[20px] h-[20px]' />
                            <h2 className='text-[12px] font-normal dark:text-white     font-poppins text-primary  '>men's fashion</h2></div>
                        <div className='w-[121px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex  gap-[10px] items-center'>
                             <img src={logo} alt="logo" className='text-white w-[20px] dark:text-white h-[20px]' />
                            <h2 className='text-[12px] font-normal dark:text-white     font-poppins  text-primary'>winter hat</h2></div>
                        <div className='w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center'>
                             <img src={logo} alt="logo" className='text-white w-[20px] h-[20px]' />
                            <h2 className='text-[12px] font-normal dark:text-white     font-poppins  text-primary '>colorful accessory</h2></div>
                        <div className='w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center'>
                             <img className='dark:text-red-500' src={logo} alt="logo"  />
                            <h2 className='text-[12px] font-normal  dark:text-white    font-poppins  text-primary '>warm headwear</h2></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* --------------------- recommendation */}

    </>
  )
}

export default AboutProducts
