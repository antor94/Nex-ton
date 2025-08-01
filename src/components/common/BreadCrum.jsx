import React from 'react'
import { Link } from 'react-router'

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>

    <div className='bg-primary text-white p-[20px] '>

<Link to={'/'}>Home </Link>

/

<Link to={breadLink}>{breadContent}</Link>

    </div>

    </>
  )
}

export default BreadCrum