import React, { useState } from 'react'
import sliderlogo from '../../assets/images/slider1.png'
import sliderlogo2 from '../../assets/images/slider2.png'
import sliderlogo3 from '../../assets/images/slider3.png'
import sliderlogo4 from '../../assets/images/slider4.png'
import sliderImg from '../../assets/images/sliderImg.png'


const SliderImg = ({sliderMainImg , sliderSubImg}) => {

  const images = [sliderMainImg, sliderMainImg, sliderMainImg, sliderMainImg];
  const [currentImage, setCurrentImage] = useState('');
  

  return (
    <>
    
    
    
    
            {/* slider */}
    
    <div className="flex ">
      <div className="flex flex-col  w-2/12 space-y-2 cursor-pointer">
        {images.map((imgSrc, i) => ( 
          <img 
            key={i} 
            src={sliderSubImg} 
            alt={`Thumbnail ${i}`} 
            className={`w-full object-contain ${currentImage===imgSrc ? 'border-2 border-blue-500' : ''}`} 
            onClick={() => setCurrentImage(imgSrc)} 
          />
        ))}
      </div>
      <div className="flex-1 w-[500px] mr-[32px] ml-6">
        <img 
          src={sliderMainImg} 
          alt="Product Preview" 
          className="w-full object-contain" 
        />
      </div>
    </div>
    
    
    
    </>
  )
}

export default SliderImg