import React from 'react'
import { Link } from 'react-router'

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>

    <div className= 'pb-[20px]'>

<Link className='text-[16px] font-medium font-poppins dark:text-white' to={'/'}>Home </Link>

/

<Link className='text-[16px] font-medium font-poppins dark:text-white' to={breadLink}>{ breadContent}</Link>

    </div>

    </>
  )
}

export default BreadCrum