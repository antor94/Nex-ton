import React from 'react'

const CommonHead = ({headh2 , headp , sellhead}) => {
  return (
    <>




    <h1 className=' text-[24px] lg:text-[36px]  px-[24px] lg:pl-0 font-semibold font-poppins text-second'> 
        
        {headh2}
        <span className='text-primary hidden lg:inline-block  dark:text-white'>
            {headp}
        </span>
    
    </h1>









    </>
  )
}

export default CommonHead