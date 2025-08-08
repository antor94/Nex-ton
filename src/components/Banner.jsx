import React from "react";
import bannerBg from "../assets/images/bannerBg.png";
import { Link, useNavigate } from "react-router";
import { RiSearch2Line } from "react-icons/ri";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { productNameReducer } from "../srcSlice";

const Banner = () => {



// ---------------- slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <div style={{ width: "5px", height:'5px', position : 'absolute',   radius: "50%" , top : '-15px' , background:'black',  color: "black",   }}>
          {}
        </div>
      );
    }

  };

// ----------------- dispatch 
      const dispatch = useDispatch()
      const navigate = useNavigate()
const handleButton = ()=>{
  dispatch(productNameReducer(null))
  navigate('/Sellercomponents')
}


  return (
    <>
  <div className="slider-container">
    <Slider {...settings}>
      <div>
        <section
        id="banner"
        style={{
          background: `URL(${bannerBg})`,

          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px] lg:py-[228px]"
      >
        <div className="container">
          <div className="banner_text px-6">
            <h2 className="text-[20px] font-medium font-poppins   text-primary">
              Starting from: $49.99 
            </h2>
            <h1 className="w-full lg:w-[632px] leading-[38px] lg:leading-[72px] pt-[8px] pb-[40px] lg:py-[24px] text-[30px] lg:text-[64px] font-poppins font-semibold text-second">
              Exclusive collection for everyone
            </h1>
            <button onClick={handleButton}   className=" w-[156px] h-[44px] lg:w-[198px] lg:h-[64px]  bg-second flex justify-center items-center gap-[10px] rounded-full hover:scale-[1.1] duration-[.4s ] text-white text-[14px] lg:text-[16px] font-poppins font-medium" >  Explore now{" "}  <RiSearch2Line className="w-[16px] h-[16px] lg:w-[30px] lg:h-[20px]" />  </button>
          </div>
        </div>
      </section>
      </div>
      <div>
       <section
        id="banner"
        style={{
          background: `URL(${bannerBg})`,

          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px] lg:py-[228px]"
      >
        <div className="container">
          <div className="banner_text px-6">
            <h2 className="text-[20px] font-medium font-poppins   text-primary">
              Starting from: $49.99 
            </h2>
            <h1 className="w-full lg:w-[632px] leading-[38px] lg:leading-[72px] pt-[8px] pb-[40px] lg:py-[24px] text-[30px] lg:text-[64px] font-poppins font-semibold text-second">
              Exclusive collection for everyone
            </h1>
            <button onClick={handleButton} className=" w-[156px] h-[44px] lg:w-[198px] lg:h-[64px] rounded-full bg-second flex justify-center items-center gap-[10px]rounded-full hover:scale-[1.1] duration-[.4s ] text-white text-[14px] lg:text-[16px] font-poppins font-medium"   > Explore now{" "}  <RiSearch2Line className="w-[16px] h-[16px] lg:w-[30px] lg:h-[20px]" /></button>
          </div>
        </div>
      </section>

      </div>
    </Slider>
  </div>

    </>
  );
};

export default Banner;
