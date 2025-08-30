import React, { useEffect, useState } from "react";
import logo from "../assets/images/svg.png";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import { FaStar } from "react-icons/fa";
import BreadCrum from "./common/BreadCrum";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router";
import CommonHead from "./common/CommonHead";
import { Link } from "lucide-react";
import Slider from "react-slick";
import SellerCard from "./common/SellerCard";
import { GoStarFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";

const AboutProducts = () => {
  // -------------- slider
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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


const localIds = JSON.parse(localStorage.getItem('productID'))

  const perams = useParams();

  // ---------------------- recomended product

  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  // ------------------ api fetch for single product
  useEffect(() => {
    if (perams.productId) {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/${perams.productId}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [perams.productId]);

  // ------------------ api fetch for recommendations
  const [recommendProducts, setRecommendProducts] = useState([]);

useEffect(() => {
  axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) => setRecommendProducts(res.data))
    .catch((err) => console.log(err));
}, []);



  return (
    <>
      {/* ------------------- slider img + price cart */}
      <section id="about-product" className="dark:bg-primary">
        <div className="container">
          <BreadCrum
            breadContent={" AboutProducts"}
            breadLink={"/AboutProducts"}
          />
          <div className="slider_row pt-[24px]">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
              {/*-------------------  slider */}
              {product && (
                <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] w-full md:w-auto mb-6 md:mb-0 items-center md:items-start">
                  {/* Thumbnails on the left */}
                  <div className="flex flex-row md:flex-col gap-[10px] md:gap-[20px] justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
                    {product.images &&
                      product.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`thumb-${idx}`}
                          className={`w-[44px] sm:w-[60px] lg:w-[100px] h-[44px] sm:h-[60px] lg:h-[100px] rounded-[6px] cursor-pointer border ${
                            currentImg === idx
                              ? "border-blue-500 dark:bg-white"
                              : "border-transparent"
                          }`}
                          onClick={() => setCurrentImg(idx)}
                        />
                      ))}
                  </div>
                  {/* Main Image on the right */}
                  <div className="main-img w-full max-w-[320px] sm:max-w-[400px] md:w-[300px] lg:w-[500px] h-[180px] sm:h-[250px] md:h-[350px] lg:h-[500px] bg-[#4B5563] dark:bg-white rounded-[16px] flex items-center justify-center mx-auto md:mx-0">
                    {product.images && (
                      <img
                        src={product.images[currentImg]}
                        alt="main-img"
                        className="w-full h-full object-contain rounded-[7px]"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* --------------------- responsive-produtCard */}
              <div className="w-full max-w-[460px] h-auto lg:h-[463px] lg:border lg:border-[#E5E7EB] rounded-[16px] px-4 md:px-[33px]  lg:mt-0">
                <div className=" flex  justify-between items-center">
                  {/* ----------------- responsive details */}
                  <div className="lg:hidden pt-[50px]">
                    <h2 className="text-[24px] truncate w-[300px]  dark:text-white    lg:text-[36px] font-semibold font-poppins text-second">
                      {product?.title}
                    </h2>
                    <div className="lg:hidden mt-[20px] mb-[24px] ">
                      <h2 className="text-[24px] font-semibold font-poppins  dark:text-white    text-second">
                        {" "}
                        $ {product?.price}
                      </h2>
                      <h2 className=" line-through text-[14px] flex  font-medium font-poppins  dark:text-white    text-primary">
                        $79.00
                      </h2>
                    </div>
                    <div className="flex justify-between gap-[5px]">
                      <div className="flex  items-center gap-[5px]">
                        <FaStar className="text-yellow-500" />
                        <h2 className="text-[12px] font-normal font-poppins  dark:text-white text-primary">
                          4.9 (98)
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* ----------------------- rating + review */}
                  <div className="py-[33px]   hidden   lg:flex justify-between gap-[5px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-yellow-500" />
                      <h2 className="text-[16px] font-semibold   dark:text-white    font-poppins text-second">
                        4.9
                      </h2>
                    </div>
                    <div className="w-[5px] h-[5px] mt-[9px] bg-black dark:bg-amber-50 rounded-full"></div>
                    <h2 className="text-[16px] font-medium  dark:text-white    font-poppins text-primary">
                      142 reviews
                    </h2>
                  </div>
                  {/* --------------------- main cert price */}
                  <div className="hidden lg:inline-block">
                    <h2 className="text-[24px] font-semibold  dark:text-white    font-poppins text-second">
                      $ {product?.price}
                    </h2>
                    <h2 className=" line-through text-[14px] flex justify-end dark:text-white    font-medium font-poppins text-primary">
                      $199.99
                    </h2>
                  </div>
                </div>

                {/* ------------------ size details */}
                <div className="flex flex-wrap">
                  <h2 className="text-[16px] font-semibold font-poppins  dark:text-white pt-[20px] lg:pt-0 text-second">
                    Size: S
                  </h2>
                  <div className=" flex flex-wrap  gap-[10px] pt-[12px]">
                    <button className="flex w-[72px] py-[10px] px-[31px] border  dark:text-white  cursor-pointer focus:bg-[#0EA5E9]   border-[#E5E7EB] rounded-[12px] hover:text-white  hover:bg-[#] text-[16px] font-semibold font-poppins text-primary">
                      S
                    </button>
                    <button className="flex w-[72px] py-[10px] px-[31px] border  dark:text-white cursor-pointer focus:bg-[#0EA5E9]    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary">
                      M
                    </button>
                    <button className="flex w-[72px] py-[10px] px-[31px] border  dark:text-white cursor-pointer focus:bg-[#0EA5E9]    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary ">
                      {" "}
                      L
                    </button>
                    <button className="flex w-[72px] py-[10px] px-[31px] border  dark:text-white cursor-pointer focus:bg-[#0EA5E9]    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary">
                      Xl
                    </button>
                    <button className="flex w-[72px] py-[10px] px-[31px] border  dark:text-white cursor-pointer focus:bg-[#0EA5E9]    border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary">
                      2Xl
                    </button>
                  </div>
                </div>
                {/* ------------------- button */}
                <div className="py-[38px] flex items-center gap-[50px] lg:justify-between">
                  <div className="w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full">
                    <button className=" border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center ">
                      -
                    </button>
                    <h2 className="text-[16px] font-medium font-poppins text-primary">
                      1
                    </h2>
                    <button className="border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center">
                      +
                    </button>
                  </div>
                  <button className=" lg:w-[178px] bg-black hover:scale-[1.1] hover:bg-green-300 duration-[.4s] rounded-full py-[14px] px-[32px] text-[16px] font-medium font-poppins text-white ">
                    Add to cart{" "}
                  </button>
                </div>
                {/* ------------------- sub-total */}
                <div className=" hidden lg:block">
                  <div className="flex justify-between items-center gap-[10px] lg:pt-0 pt-[32px] pb-[16px]">
                    <div>
                      <p className="text-[16px] font-normal font-poppins dark:text-white  text-primary">
                        $169.99 x 1
                      </p>
                      <p className="text-[16px] font-normal font-poppins dark:text-white  text-primary">
                        Tax estimate
                      </p>
                    </div>
                    <div>
                      <p className="text-[16px] font-normal font-poppins dark:text-white    text-primary">
                        $169.99
                      </p>
                      <p className="text-[16px] flex justify-end font-normal font-poppins dark:text-white    text-primary">
                        $0
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center lg:pt-0 pt-[16px] pb-[33px]">
                    <h2 className="text-[16px] font-semibold font-poppins dark:text-white    text-second">
                      Total
                    </h2>
                    <h2 className="text-[16px] font-semibold font-poppins dark:text-white    text-second">
                      $169.99
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------- product items */}
      <section
        id="AboutProduct"
        className=" pt-[40px] pb-[76px] lg:pt-[52px] lg:pb-[96px] dark:bg-primary"
      >
        <div className="container">
          <div className="product_row lg:pl-0 px-[30px]">
            <div className="pb-[40px] lg:pb-[60px]">
              <h1 className="text-[20px] lg:text-[36px] dark:text-white font-semibold hidden lg:inline-block font-poppins text-second">
                {product?.title}
              </h1>
              <p className="w-[310px] lg:w-[735px]  dark:text-white    text-[14px] lg:text-[16px] font-normal font-poppins  text-primary pt-[4px] ">
                {product?.description}
              </p>
            </div>
            {/* ----------------- cart details */}
            <div className="pb-[40px] lg:pb-[60px]">
              <h2 className="text-[20px] lg:text-[24px] dark:text-white     font-semibold font-poppins  text-second">
                Fabric + Care
              </h2>
              <p className="text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary  pt-[4px]">
                Material: Soft wool blend
              </p>
              <p className="text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary ">
                Color: Various
              </p>
            </div>
            {/* ----------------- sale */}
            <div className="pb-[40px] lg:pb-[60px]  ">
              <h2 className="text-[20px] lg:text-[24px] dark:text-white     font-semibold font-poppins  text-second">
                Sale performance
              </h2>
              <p className="text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary  pt-[4px]">
                Sales: 0
              </p>
              <p className="text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary ">
                Review Count: -
              </p>
              <p className="text-[14px] lg:text-[16px] dark:text-white     font-normal font-poppins  text-primary ">
                Review Average: -
              </p>
            </div>
            {/* -------------------- keyword */}
            <div className="pb-[40px] lg:pb-[60px]">
              <h2 className="text-[20px] lg:text-[24px] font-semibold font-poppins  dark:text-white     text-second">
                Keywords
              </h2>
              <div className="pt-[8px] flex  flex-wrap gap-[8px] lg:gap-[8px] items-center">
                <div className="w-[144px] py-[8px] px-[14px] rounded-full flex gap-[10px] items-center border border-[#E5E7EB]">
                  <img
                    src={logo}
                    alt="logo"
                    className="text-white w-[20px] h-[20px]"
                  />
                  <h2 className="text-[12px] font-normal dark:text-white     font-poppins text-primary  ">
                    men's fashion
                  </h2>
                </div>
                <div className="w-[121px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex  gap-[10px] items-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="text-white w-[20px] dark:text-white h-[20px]"
                  />
                  <h2 className="text-[12px] font-normal dark:text-white     font-poppins  text-primary">
                    winter hat
                  </h2>
                </div>
                <div className="w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="text-white w-[20px] h-[20px]"
                  />
                  <h2 className="text-[12px] font-normal dark:text-white     font-poppins  text-primary ">
                    colorful accessory
                  </h2>
                </div>
                <div className="w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center">
                  <img className="dark:text-red-500" src={logo} alt="logo" />
                  <h2 className="text-[12px] font-normal  dark:text-white    font-poppins  text-primary ">
                    warm headwear
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- recommendation */}

    <section className='py-[52px] lg:py-[88px] dark:bg-primary'>
        <div className="container">
            <CommonHead  headh2={'Recommendations.'}/>
{/* ------------------ recommendation-div */}

              <div className="slider-container pt-[40px]">
                <Slider {...settings}>
                    {
                      recommendProducts?.map((item,i)=>(
                        <SellerCard key={i} sellerImg={item.images[0]} Sellerh2={item.title} sellerdis={item.rating} sellerP={item.price} sellerText={item.category.slug}  />
                      ))
                    }                        
                </Slider>
            </div>
        </div>
    </section>


    </>
  );
};

export default AboutProducts;
