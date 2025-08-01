import React from 'react'
import { GoStarFill } from "react-icons/go";

const SingleCard = ({proimg ,proname , proprice , proacc , prodis , prorate}) => {
  return (
    <>
    
    <div className='mt-[24px] px-[24px] lg:px-0 lg:mt-[40px]'>

        <div className='w-[309px] h-[490px]  lg:h-[448px]'>
            <div className='w-full h-[360px] bg-[#F8FAFC] rounded-[16px] overflow-hidden' >
                <img src={proimg} alt="product_img" />

            </div>
            <div className='product_text'>
                <div className='flex justify-between items-center mt-[20px]'>
                    <h2 className='text-[14px] lg:text-[16px] font-semibold font-poppins dark:text-white  text-second'>{proname}</h2>
                    <h2 className='text-[14px] lg:text-[16px] font-semibold font-poppins dark:text-white text-second'>{proprice} $</h2>
                </div>
                
            </div>

          
                <div className='flex justify-between items-center '>
                    <p className='text-[12px] lg:text-[14px] font-normal dark:text-white font-poppins text-primary'>{proacc}</p>
                    <p className='text-[12px] lg:text-[14px] font-normal font-poppins dark:text-white text-primary line-through italic'>{prodis}</p>

                </div>
                <div className='flex gap-1 items-center mt-[15px]'>
                    {/* <GoStarFill className='text-[#FBBF24] w-[20px] h-[20px]' /> */}
                    <p className='text-[12px] lg:text-[14px] font-normal font-poppins dark:text-white text-primary'>{prorate}</p>
                </div>

            

        </div>


    </div>
    
    
    
    
    </>
  )
}

export default SingleCard