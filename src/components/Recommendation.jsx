import React, { useEffect, useState } from 'react'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SellerCard from './common/SellerCard';
import { Link, useNavigate,  } from 'react-router-dom';


const Recommendation = () => {

// -------------- slider
      var settings = {
    dots: true,
    arrows : false,
    autoplay : true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4 ,
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
          slidesToShow: 3,
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

  
  // --------------- api fatch
  const [product, setProduct] = useState([]);
  
useEffect(() => {
  axios.get('https://api.jsonbin.io/v3/b/68934a4bf7e7a370d1f547b6')
    .then((res) => setProduct(res.data.record))
    .catch((err) => console.log(err));
}, []);
  console.log(product)

  // -------------- navigate
  
  const navigate = useNavigate()

const handlebutton = (productInfo) => {
  navigate(`/AboutProducts/${productInfo.id}`, 

);
};

// ---------------- store application

const handelShow = (data) =>{

  let exisId = JSON.parse(localStorage.getItem('productID')) || []

  exisId.push(data)

  localStorage.setItem('productID' , JSON.stringify(exisId))
}


  return (
    <>
    <section className='py-[52px] lg:py-[88px] dark:bg-primary'>
        <div className="container">
            <CommonHead  headh2={'Recommendations.'} headp={'Best matching products for you'}/>

{/* ------------------ recommendation-div */}

<div className="slider-container pt-[40px]">
                <Slider {...settings}>
                    {
                      product.slice(0,10).map((item,i)=>(
                        <SellerCard certClick={()=>handelShow(item.id)} showDatails = { ()=> handlebutton (item) } key={i} sellerImg={item.imagesList[0]} Sellerh2={item.name} sellerdis={item.rating} sellerP={item.price} sellerText={item.category} sellerFont={item.discountPercentage} seelerstock={item.stock} />
                      ))
                    }  
                                
                </Slider>
            </div>

            <div className='flex justify-center items-center mt-[50px]'><Link to='/Sellercomponents' className='py-[20px] px-[20px] bg-black hover:bg-green-500 duration-[.4s]  rounded-3xl flex justify-center items-center text-[16px] font-medium font-poppins text-white'>See more</Link></div>
        </div>
    </section>
    
    </>
  )
}

export default Recommendation
