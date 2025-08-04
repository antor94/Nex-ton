import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ImCross } from "react-icons/im";
import axios from 'axios';

const Card = ({closeCart}) => {



const localIds = JSON.parse(localStorage.getItem('productID'))



  const [product, setProduct] = useState([]);
  
  useEffect(()=>{
    
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  } , [])


const cartProduct =  product?.filter((item)=>{
    return localIds?.includes(item.id)
})


const totalPrice = cartProduct?.reduce((sum , item)=>{
    return sum + item.price
},0)

  return (

      <>
{/* cart */}

  <div onClick={closeCart} className='w-full h-screen bg-[#d7cbcb60]  top-0 right-0 z-10 fixed'> 

        <div className='w-[400px] h-screen bg-amber-50 ml-auto p-[10px]'>

            {/* ---------------- cart + button */}
            
            <div className='flex justify-between items-center'>     
            <h2 className='text-[36px] font-semibold font-poppins  text-second'>Cart</h2>
             <ImCross onClick={closeCart} />
            </div>
                <div className='AllProduct  h-[600px] mt-[40px] overflow-y-scroll'>

                {
                    cartProduct?.map((item , i)=>(
         <div key={i} className='flex justify-between items-center mb-[20px] '>
                <div className="proImg_name flex gap-[20px] items-center">
                    <div className="proimg w-[60px] h-[60px] bg-red-400 rounded-2xl overflow-hidden">
                        <img src={item.images} alt="product-Img" />
                    </div>
                    <h2 className='text-[16px] truncate w-[200px] font-poppins font-bold text-primary'>{item.title}</h2>
                </div>
                <p className='text-[14px] font-medium font-poppins text-second'>{item.price} $ </p>
            </div>

                    ))
                }

                </div>


{/* --------------------- total price */}

                <div className='flex items-center justify-between mt-[50px]'>
                    <p className='text-[14px] font-medium font-poppins text-primary'>Total :</p>
                    <p className='text-[14px] font-medium font-poppins text-primary'>{totalPrice} $</p>
                </div>

{/* ---------------- check button */}
<div> <Link to='/CheckOut' className='w-full p-[10px] bg-black  mt-[20px]  hover:bg-green-400  text-[20px] font-semibold font-poppins text-white flex items-center justify-center text-center rounded-4xl'>Chackout</Link> </div>               

            

        </div>


        </div>
        

</>


  )
}

export default Card