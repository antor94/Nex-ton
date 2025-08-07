import React from 'react'
import { GoStarFill } from 'react-icons/go'
import { Link } from 'react-router'
import { FaCartShopping } from "react-icons/fa6";


const SellerCard = ({sellerImg , Sellerh2 , sellerP , sellerText , sellerFont , showDatails , sellerdis , seelerstock ,  certClick }) => {
  return (
    <>
 
    <div  className='w-[309px] h-[448px] rounded-[16px] pb-[20px] mb-[50px] pl-[30px] lg:pl-0 relative'>
      <button onClick={certClick} className='w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center absolute top-[18px] right-[16px] hover:bg-[#00000074] hover:text-gray-200 '><FaCartShopping /></button>
        <div onClick={showDatails} className='w-full h-[360px] rounded-2xl bg-[#F8FAFC] overflow-hidden' >  <img className='w-[500px]' src={sellerImg} alt="reco-img" /> </div>
        <div className='flex justify-between items-center pt-[20px]'>
            <h2 className='text-[16px] truncate w-[200px] font-semibold dark:text-white font-poppins text-second'>{Sellerh2}</h2>
            <h2 className='text-[16px] font-semibold font-poppins dark:text-white text-second'>{sellerP} </h2>

        </div>
        <div className='flex justify-between items-center'>
            <p className='text-[14px] font-normal font-poppins dark:text-white text-primary'>{sellerText}</p>
            <p className='text-[14px] font-normal font-poppins dark:text-white text-primary line-through italic'>{sellerFont} </p>
        </div>
        <div className='pt-[9px] flex gap-[10px] items-center'>
            <GoStarFill className='text-[#FBBF24]' />
            <p className='ext-[14px] font-normal font-poppins dark:text-white text-primary'>{sellerdis}</p>
            <p className='ext-[14px] font-normal font-poppins dark:text-white text-primary'>({seelerstock })</p>
                {/* <Link to='/CheckOut' className='w-[100px] py-[10px] px-[10px] rounded-[40px] text-[16px]  font-poppins font-medium text-white  bg-black '>Checkout</Link> */}
            
            </div>

    </div>

    
    
    
    
    
    </>
  )
}

export default SellerCard