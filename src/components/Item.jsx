import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Item = ({man , woman ,  execc}) => {

  return (

<>

      <div className="w-full lg:w-[500px] lg:h-[132px] px-[40px]  py-[40px] flex justify-between items-center rounded-[16px] border border-[#E5E7EB]">
        <div className="">
          <h2 className="text-second dark:text-white font-semibold font-poppins text-[20px] lg:text-[24px] ">
            {man}
          </h2>
          <p className=" text-[12px] dark:text-white text-primary font-normal font-poppins lg:text-[14px]">
            {woman}
          </p>
        </div>
        <div className="flex justify-between items-center dark:text-white  ">
          <p className="w-1 lg:h-[50px] h-[32px] dark:text-white bg-[#E5E7EB]"></p>
        
            {execc} <IoIosArrowRoundForward className='flex text-3xl items-center justify-center' />
        </div>
      </div>




</>


  )
}

export default Item