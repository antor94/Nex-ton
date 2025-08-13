
import logo from "../assets/images/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import Card from "./Card";
import { useEffect, useState } from "react";
import SellerCard from "./common/SellerCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productNameReducer } from "../srcSlice";

const Navbar = () => {

// --------------- usestate

const [showCart , setShowCart] = useState(false)
const localIds = JSON.parse(localStorage.getItem('productID'))


  // --------------- api fatch
  const [product, setProduct] = useState([]);
  
useEffect(() => {
  axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) => {
      if(!reduxProduct) return setProduct(res.data)
      const filterProduct = res.data.filter((item)=>item.title == reduxProduct)
        setProduct(filterProduct)
    })
    .catch((err) => console.log(err));
}, []);
 
// --------------- search bar
 
const [searchInput , setSearchInput] = useState('')
const [searchResult , setSearchResult] = useState(null)
const reduxProduct = useSelector((state)=>state.proId.value)


const handleSearch =(e)=>{

  const filterData = product.filter((item)=> item.title.toLowerCase().includes(searchInput.toLowerCase()))
  setSearchResult(filterData)
}

// --------------- navigete
const navigate = useNavigate()
const dispatch = useDispatch()


const handleProduct = (productName) =>{
  navigate('/Sellercomponents')
  dispatch(productNameReducer(productName))
  setSearchResult(null)
  console.log('working')

} 

  return (
    <>
      <nav id="main_nav" className="py-[27px] dark:bg-primary  hidden lg:block">
        <div className="container">
          <div className="menu_row flex justify-between items-center">
          
            {/* ------------- main-logo */}

            <Link to={'/'} className="menu_logo w-[119px]"> <img src={logo} alt="logo" /></Link>

            {/* -------------- search button */}

            <form className="menu_src w-[400px] h-[52px] rounded-[100px] bg-[#F8F8F8] flex items-center pl-[24px]">
              <RiSearch2Line onClick={handleSearch}  className="text-xl text-primary"/>
              <input onChange={(e)=>{setSearchInput(e.target.value) , handleSearch()}} className="w-full pl-[10px] outline-none border-none text-[14px] font-normal font-poppins" type="text" placeholder="Search in products..." />
            </form>

            {/* ------------- nav icon */}

            <div className="menu_item flex ">
           <Link to='/Login' className="text-2xl text-primary mr-[22px] dark:text-[#fff]"><RiUserLine/></Link>     
           <button onClick={()=>setShowCart(true)} className="text-2xl text-primary relative dark:text-[#fff]">
            <PiShoppingCart/>      
            <span className="w-[20px] h-[20px] rounded-full bg-[#0EA5E9] text-[12px] font-normal font-poppins text-[#fff] flex  justify-center
           items-center absolute top-[-10px] left-[14px]">{ localIds? localIds.length : 0}</span>
           </button>    
            </div>
          </div>
        </div>
      </nav>
      
      {/* ---------------------- <Card /> */}
      {
        showCart&&
        <Card closeCart={()=>setShowCart(!showCart)} />
      }


      {/* -------------------- product serach */}
      <div className="flex bg-[#0000006d] justify-center">
        <div className="w-[1400px] flex flex-wrap  gap-[30px] justify-center items-center pt-6" >
          {        
            searchResult?.length == 0 ?       
            <h2 className="text-[24px] font-medium font-poppins text-red-600"> Product Not Found !</h2>
            :
            searchResult?.map((item)=>(    
              <SellerCard  certClick={handleProduct} sellerImg={item.images} Sellerh2={item.title} sellerdis={item.rating} sellerP={item.price} sellerText={item.category} sellerFont={item.discountPercentage} seelerstock={item.stock} />   
            ))
          }

      </div>
          </div>

    </>
  );
};

export default Navbar;
