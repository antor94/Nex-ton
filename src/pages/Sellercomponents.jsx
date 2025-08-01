import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GoStarFill } from 'react-icons/go'
import SellerCard from '../components/common/SellerCard'
import Pagination from '../components/Pagination'
import BreadCrum from '../components/common/BreadCrum'



const Sellercomponents = ({sellerImg , Sellerh2 , sellerP , sellerText , sellerFont , sellerStar}) => {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

useEffect(()=>{
  
axios.get('https://api.escuelajs.co/api/v1/products')
  .then((res) => setProducts(res.data))
  .catch((err) => console.log(err));
} , [])


  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);


  return (
    <>
    
    <section>
        <div className="container">

          <BreadCrum breadContent={' Sellercomponents'} breadLink={'/Sellercomponents'} />
            <div className="seller_row">
<div className='mt-[40px] mb-[72px] lg:flex  lg:gap-[44px] ml-[24px] lg:ml-[24px] '>
    <div>

{/* --------------- category */}
        <div className='  hidden lg:block'>
       <div><h2 className='text-[18px] font-semibold font-poppins text-second dark:text-white'>Categories</h2></div>

        <div className=' mt-[24px] flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8]  rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Men’s fashion</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Women’s fashion</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Kids & Toys</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Accessories</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Cosmetics</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Shoes</h2>
        </div>
                        <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Sports</h2>
        </div>


        </div>

{/* ---------------- price range */}
    <div className=' py-[32px] hidden lg:block '>
        <div><h2 className='text-[18px] font-semibold font-poppins text-second dark:text-white'>Price range</h2></div>
        <div className='flex gap-[24px] '>
        <div>
            <h2 className='text-[16px] font-normal font-poppins text-primary dark:text-white mt-[20px] mb-[4px]'>Min price</h2>
            <div className='w-[130px] h-[36px] border border-[#E5E7EB]  rounded-full px-[16px] flex justify-between items-center'>
                <p className='text-[14px] font-normal font-poppins dark:text-white text-primary'>100</p>
                <p className='text-[14px] font-normal font-poppins text-primary dark:text-white'>$</p>
            </div>


        </div>
                <div>
            <h2 className='text-[16px] font-normal font-poppins text-primary dark:text-white mt-[20px] mb-[4px]'>Max price</h2>
            <div className='w-[130px] h-[36px] border border-[#E5E7EB]  rounded-full px-[16px] flex justify-between items-center'>
                <p className='text-[14px] font-normal font-poppins dark:text-white text-primary'>500</p>
                <p className='text-[14px] font-normal font-poppins text-primary dark:text-white'>$</p>
            </div>

            
        </div>
    </div>
        </div>

{/* ------------------- sort-order */}
     <div className='mt-[32px] mb-[40px] hidden lg:block'>
          <div><h2 className='text-[18px] font-semibold font-poppins text-second dark:text-white'>Sort order</h2></div>

        <div className=' flex gap-[12px] mb-[16px] mt-[24px]'>
            
            <input type=" checkbox" className='w-[20px] h-[20px] border rounded-full border-[#94A3B8] ' />
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Most Popular</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8]  rounded-full '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Best Rating</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-full '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Newest</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-full '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Price Low - Hight</h2>
        </div>
                <div className=' flex gap-[12px] mb-[16px]'>
            <button className='w-[20px] h-[20px] border border-[#94A3B8] rounded-full '></button>
            <h2 className='text-[14px] font-normal font-poppins text-primary dark:text-white'>Price Hight - Low</h2>
        </div>
        </div>

    </div>


{/* --------------- right-side product cart */}

        <div>
              <div className="seller_row  lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                currentItems.map((item , i)=>(

                        <SellerCard key={i} sellerImg={item.images} Sellerh2={item.title} sellerP={item.price} sellerText={item.category.slug}  />
                 
                
                ))
              }
                
            </div>
      </div>

</div>
 <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
  





            </div>
        </div>
    </section>
 
    
    
    </>
  )
}

export default Sellercomponents