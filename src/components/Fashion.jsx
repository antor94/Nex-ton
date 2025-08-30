import React from 'react'
import banner from '../assets/images/banner-container.png'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

const Fashion = () => {

// ----------------- dispatch 
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const handleButton = ()=>{
        dispatch(incrementByAmount(null))
        navigate('/Sellercomponents')
      }


  
  return (
    <>

    <section id='fashion'  className='py-[52px] w-full hidden lg:block dark:bg-primary'>
      <div className="container">
        <div style={{background: `URL(${banner})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`,}} className="fashion_row py-[93px] pl-[120px]   rounded-[30px]">
          <div className='' >
           <p className='text-[20px] font-medium font-poppins text-primary pb-[14px]'>100% Original Products</p>
           <h2 className='w-[362px] text-[36px] font-semibold font-poppins text-second leading-[40px] pb-[24px]'>The All New Fashion Collection Items</h2>
<p className='text-[20px] font-medium font-poppins text-primary pb-[24px]'>Starting from: $59.99</p>
<Link onClick={handleButton} to='/Sellercomponents' className='py-[14px] px-[32px] bg-second rounded-full text-[16px] font-medium font-poppins text-white hover:scale-[1.4] duration-[.3s] hover:bg-green-500' >Shop now</Link>

          </div>
        </div>
      </div>

    </section>
    
    </>
  )
}

export default Fashion