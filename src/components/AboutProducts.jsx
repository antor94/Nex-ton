import React, { useEffect, useState } from 'react'
import logo from '../assets/images/svg.png'
import CommonHead from './common/CommonHead'
import axios from 'axios'
import SellerCard from './common/SellerCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderlogo from '../assets/images/slider1.png'
import sliderlogo2 from '../assets/images/slider2.png'
import sliderlogo3 from '../assets/images/slider3.png'
import sliderlogo4 from '../assets/images/slider4.png'
import { FaStar } from "react-icons/fa";
import { useLocation, useParams } from 'react-router'


const AboutProducts = () => {

  
  
// ----------------slider item
  
  const { state } = useLocation();
  const { product, selectedImage } = state || {};

  const [images, setImages] = useState(product?.images || []);
  const [currentImage, setCurrentImage] = useState(selectedImage || '');

  useEffect(() => {
    if (selectedImage) {
      setCurrentImage(selectedImage);
    }
  }, [selectedImage]);

// ----------------slider item

  
  // ------------- perams

  const perams = useParams()

useEffect(() => {
  if (perams.id) {
    axios.get(`https://api.escuelajs.co/api/v1/products/${perams.productId}`)
      .then((res) => selectedImage(res.data))
      .catch((err) => console.error(err));
  }
}, [perams.id]);

console.log(product)
  



// ---------------------- recomended product

const [recommendedProducts, setRecommendedProducts] = useState([]);

useEffect(() => {
  axios.get('https://api.escuelajs.co/api/v1/products?limit=12')
    .then(res => setRecommendedProducts(res.data))
    .catch(err => console.error("Error fetching recommended products:", err));
}, []);


  return (
    <>



<section className='sliderImg'>
  <div className="container">
    <div className="slider_row pt-[40px]">
      <div className=' lg:flex justify-between' >

        {/* slider */}

 <div className=" flex ">
      <div className=" lg:flex lg:flex-col  w-2/12 space-y-2 cursor-pointer">
        {images.map((imgSrc, i) => (
          <img 
            key={i} 
            src={imgSrc} 
            alt={`Thumbnail ${i}`} 
            className={`w-[600px] object-contain ${currentImage===imgSrc ? 'border-2 border-blue-500' : ''}`} 
            onClick={() => setCurrentImage(imgSrc)} 
          />
        ))}
      </div>

      <div className="flex-1  mr-[32px] ml-6">
        <img 
          src={currentImage} 
          alt="Product Preview" 
          className="w-[500px] object-contain" 
        />
      </div>
    </div>

{/* --------------------- responsive-produtCard */}

        <div className='w-[460px] h-[530px] lg:border lg:border-[#E5E7EB] rounded-[16px] py-[33px] px-[33px] '>
          <div className='pb-[33px] flex  justify-between items-center'>
           <div className='lg:hidden'><h2 className='text-[24px] truncate w-[300px] lg:text-[36px] font-semibold font-poppins text-second'>{product.title}</h2>

          <div className='lg:hidden mt-[20px] mb-[24px] '>
            <h2 className='text-[24px] font-semibold font-poppins text-second'>{product.price} $</h2>
            <h2 className=' line-through text-[14px] flex  font-medium font-poppins text-primary'>$79.00</h2>
          </div>
           <div className='flex justify-between gap-[5px]'>
              <div className='flex items-center gap-[5px]'>
            <FaStar className='text-yellow-500' />
            <h2 className='text-[12px] font-normal font-poppins text-primary'>4.9 (98)</h2>
              </div>

            </div>
            </div>

{/* ---------------------- product price */}

                 <div className='hidden lg:hidden'>
            <h2 className='text-[24px] font-semibold font-poppins text-second'>$ {product.price}</h2>
            <h2 className=' line-through text-[14px] flex justify-end font-medium font-poppins text-primary'>$199.99</h2>
          </div>


            <div className='hidden  lg:flex justify-between gap-[5px]'>
              <div className='flex items-center gap-[5px]'>
            <FaStar className='text-yellow-500' />
            <h2 className='text-[16px] font-semibold font-poppins text-second'>4.9</h2>
              </div>
            .
          <h2 className='text-[16px] font-medium font-poppins text-primary'>142 reviews</h2>
            </div>
          <div className='hidden lg:inline-block'>
            <h2 className='text-[24px] font-semibold font-poppins text-second'>$ {product.price}</h2>
            <h2 className=' line-through text-[14px] font-medium font-poppins text-primary'>$199.99</h2>
          </div>
          </div>
          <div>
            <h2 className='text-[16px] font-semibold font-poppins text-second'>Size: S</h2>
            <div className=' flex flex-wrap gap-[10px] pt-[12px]'>
            <button className='flex w-[72px] py-[10px] px-[31px] border border-[#E5E7EB] rounded-[12px] hover:text-white  hover:bg-[#0EA5E9] text-[16px] font-semibold font-poppins text-primary'>S</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>M</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary '> L</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>Xl</button>
            <button className='flex w-[72px] py-[10px] px-[31px] border border-[#E5E7EB] rounded-[12px] hover:text-white hover:bg-[#0EA5E9]  justify-center items-center text-[16px] font-semibold font-poppins text-primary'>2Xl</button>
          </div>
            </div>
            <div className='py-[38px] flex items-center gap-[50px] lg:justify-between'>
              <div className='w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full'>
                <div className=' border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center '><p>-</p></div>
                <h2 className='text-[16px] font-medium font-poppins text-primary'>1</h2>
                <div className='border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center'><p>+</p></div>

              </div>
              <button className=' lg:w-[178px] bg-black hover:scale-[1.1] hover:bg-green-300 duration-[.4s] rounded-full'><h2 className='py-[14px] px-[32px] text-[16px] font-medium font-poppins text-white '>Add to cart</h2> </button>
            </div>
            <div className=' hidden lg:block'>

            <div className='flex justify-between items-center gap-[10px] pt-[32px] pb-[16px]'>
              <div>
                <p className='text-[16px] font-normal font-poppins text-primary'>$169.99 x 1</p>
                <p className='text-[16px] font-normal font-poppins text-primary'>Tax estimate</p>
              </div>
              <div>
                <p className='text-[16px] font-normal font-poppins text-primary'>$169.99</p>
                <p className='text-[16px] font-normal font-poppins text-primary'>$0</p>
              </div>            
            </div>      
              <div className='flex justify-between items-center pt-[16px] pb-[33px]'>
                <h2 className='text-[16px] font-semibold font-poppins text-second'>Total</h2>
              <h2 className='text-[16px] font-semibold font-poppins text-second'>$169.99</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* --------------------- product items */}
    
    <section id='AboutProduct' className=' pt-[40px] pb-[76px] lg:pt-[52px] lg:pb-[96px]'>
        <div className="container">
            <div className="product_row lg:pl-0 px-[30px]">
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h1 className='text-[20px] lg:text-[36px] font-semibold hidden lg:inline-block font-poppins text-second'>{product.title}<span className='text-[20px] inline-block lg:hidden  font-semibold font-poppins text-second'> About this product</span></h1>
                    <p className='w-[310px] lg:w-[735px] text-[14px] lg:text-[16px] font-normal font-poppins  text-primary pt-[4px] '>{product.description}</p>
                </div>
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h2 className='text-[20px] lg:text-[24px] font-semibold font-poppins  text-second'>Fabric + Care</h2>
                    <p className='text-[14px] lg:text-[16px] font-normal font-poppins  text-primary  pt-[4px]'>Material: Soft wool blend</p>
                    <p className='text-[14px] lg:text-[16px] font-normal font-poppins  text-primary '>Color: Various</p>
                </div>
                <div className='pb-[40px] lg:pb-[60px]  '>
                    <h2 className='text-[20px] lg:text-[24px] font-semibold font-poppins  text-second'>Sale performance</h2>
                    <p className='text-[14px] lg:text-[16px] font-normal font-poppins  text-primary  pt-[4px]'>Sales: 0</p>
                    <p className='text-[14px] lg:text-[16px] font-normal font-poppins  text-primary '>Review Count: -</p>
                    <p className='text-[14px] lg:text-[16px] font-normal font-poppins  text-primary '>Review Average: -</p>
                </div>
                <div className='pb-[40px] lg:pb-[60px]'>
                    <h2 className='text-[20px] lg:text-[24px] font-semibold font-poppins  text-second'>Keywords</h2>
                    <div className='pt-[8px] flex  flex-wrap gap-[8px] lg:gap-[8px] items-center'>
                        <div className='w-[144px] py-[8px] px-[14px] rounded-full flex gap-[10px] items-center border border-[#E5E7EB]'>
                            <img src={logo} alt="logo" className='text-white w-[20px] h-[20px]' />
                            <h2 className='text-[12px] font-normal font-poppins text-primary  '>men's fashion</h2></div>
                        <div className='w-[121px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex  gap-[10px] items-center'>
                             <img src={logo} alt="logo" className='text-white w-[20px] h-[20px]' />
                            <h2 className='text-[12px] font-normal font-poppins  text-primary'>winter hat</h2></div>
                        <div className='w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center'>
                             <img src={logo} alt="logo" className='text-white w-[20px] h-[20px]' />
                            <h2 className='text-[12px] font-normal font-poppins  text-primary '>colorful accessory</h2></div>
                        <div className='w-[172px] py-[8px] px-[14px] rounded-full border border-[#E5E7EB] flex gap-[10px] items-center'>
                             <img className='dark:text-red-500' src={logo} alt="logo"  />
                            <h2 className='text-[12px] font-normal font-poppins  text-primary '>warm headwear</h2></div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className=''>
        <div className="container">
            <CommonHead  headh2={'Recommendations '} headp={'products'}/>
 <div className="seller_row   lg:flex lg:justify-between lg:flex-wrap mt-10">

                          {
                Array.isArray(recommendedProducts) && recommendedProducts.slice(0,4).map((item , i)=>(

                     <SellerCard key={i} sellerImg={item.images} Sellerh2={item.title} sellerP={item.price} sellerText={item.category.slug}  />
                
                ))
              }
                
            </div>
        </div>
    </section>
    
    </>
  )
}

export default AboutProducts
