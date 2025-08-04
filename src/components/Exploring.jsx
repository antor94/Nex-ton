import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import Slider from "react-slick";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import CommonHead from "./common/CommonHead";

const Exploring = () => {

  // --------------- slick-slider
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
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
  return (
    <>
      <section id="exploring" className=" lg:py-[40px] pt-[52px] pb-[40px] dark:bg-primary lg:pt-[88px] " >
        <div className="container">
          {/* ------------- common-head */}
          <div className="  pb-[24px] lg:pb-[40px]"><CommonHead headh2={'Start exploring.'} headp={' Good things are waiting for you'} /></div>


{/* ------------------ div slider */}

          <div className="slider-container ">
            <Slider {...settings}>

{/* ---------------- slider */}

              <div className="">
                <Item
                  man={"For Men's"}
                  woman={"Starting at $24"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                    
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"For Women's"}
                  woman={"Starting at $19"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
              
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"Accessories "}
                  woman={"Explore accessories"}
                  execc={
                    <Link to='/Sellercomponents' className="font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                  
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"For Men's"}
                  woman={"Starting at $2"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px] flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                     
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"For Woman's"}
                  woman={"Starting at $19"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                    
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"Accessories "}
                  woman={"Explore accessories"}
                  execc={
                    <Link to='/Sellercomponents'  className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                      
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"For men's"}
                  woman={"Starting at $24"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
                 
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"For Women's"}
                  woman={"Starting at $24"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
              
                    </Link>
                  }
                />
              </div>
              <div className="">
                <Item
                  man={"Accessories "}
                  woman={"Explore accessories"}
                  execc={
                    <Link to='/Sellercomponents' className="font-poppins font-medium text-[14px]  flex gap-[8px] items-center pl-[12px] ">
                      Shop Now
            
                    </Link>
                  } />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exploring;

