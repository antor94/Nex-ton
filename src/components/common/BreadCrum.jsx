import React from 'react'
import { Link } from 'react-router'

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>

    <div className= 'dark:bg-amber-300 bg-primary dark:text-black text-white p-[20px] '>

<Link to={'/'}>Home </Link>

/

<Link to={breadLink}>{breadContent}</Link>

    </div>

    </>
  )
}

export default BreadCrum