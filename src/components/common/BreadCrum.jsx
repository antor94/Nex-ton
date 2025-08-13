import React from 'react'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>

    <div className= 'pb-[20px] flex gap-[10px] items-center '>

<Link className='text-[16px] font-medium font-poppins dark:text-white' to={'/'}>Home </Link>

<FaArrowRightLong className=' dark:text-white' />

<Link className='text-[16px] font-medium font-poppins dark:text-white' to={breadLink}>{ breadContent}</Link>

    </div>

    </>
  )
}

export default BreadCrum