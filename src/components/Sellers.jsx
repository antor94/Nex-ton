import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import SellerCard from './common/SellerCard'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Sellers = () => {
    var settings = {
    dots: true,
    arrows : false,
    autoplay : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };


    const[product , index] = useState([]) 
useEffect(()=>{
  axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>index( res.data))
.catch((err)=>console.log(err))
} , [])


// product.length = 4


  return (
<>


  

    <section className='py-[52px] lg:py-[88px]'>
        <div className="container">
            <CommonHead  headh2={'Best Sellers.'} headp={' Best selling of the month'}/>



    <Slider {...settings}>
      <div>
              <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
      <div>
                <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
      <div>
            <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
      <div>
            <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
      <div>
               <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
      <div>
                  <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div>
      </div>
    </Slider>
            {/* <div className="seller_row lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                product.slice(0,4).map((item)=>(

                  <SellerCard proimg={item.category.image} proname={item.title} proprice={item.price} />
                
                ))
              }
                
            </div> */}

                        <div className='flex justify-center items-center mt-[50px]'>

              <button className='py-[20px] px-[20px] bg-black hover:bg-green-500 duration-[.4s]  rounded-3xl flex justify-center items-center text-[16px] font-medium font-poppins text-white'>See more</button>
            </div>

        </div>

    </section>
    









</>
  )
}

export default Sellers