// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { ImCross } from "react-icons/im";
// import axios from "axios";
// import { MdDeleteOutline } from "react-icons/md";

// const Card = ({ closeCart }) => {
//   const localIds = JSON.parse(localStorage.getItem("productID"));

//   // -------------------- api fatch

//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => setProduct(res.data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   const cartProduct = product?.filter((item) => {
//     return localIds?.includes(item.id);
//   });

//   const totalPrice = cartProduct?.reduce((sum, item) => {
//     return sum + item.price;
//   }, 0);

//   return (
//     <>
//       {/*------------------------------- cart */}

//       <div onClick={closeCart}  className="w-full h-screen bg-[#d7cbcb60] top-0 right-0 z-10 fixed flex justify-end"  > </div>

//         {/* --------------------- cart content */}
//         <div className="w-full sm:w-[400px] h-full bg-amber-50 ml-auto p-2 sm:p-[10px] flex flex-col absolute top-0 right-0 z-20">
//           {/* ---------------- cart + button */}

//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl sm:text-[36px] font-semibold font-poppins text-second">   Cart  </h2>
//             <ImCross    onClick={closeCart}  className="cursor-pointer text-lg sm:text-xl"   />
//           </div>
//           <div className="AllProduct flex-1 mt-6 sm:mt-[40px] overflow-y-auto max-h-[50vh] sm:max-h-[600px]">
         
//             {
//             cartProduct?.map((item, i) => (
//               <div  key={i} className="flex justify-between items-center mb-4 ">
//                 <div className="proImg_name flex gap-2 sm:gap-[20px] items-center sm:w-auto">
//                    <button><MdDeleteOutline className="text-[25px]" /></button>
//                   <div className="proimg w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] bg-gray-100 rounded-2xl overflow-hidden ">
//                     <img    src={item.images}   alt="product-Img"  className="w-full h-full object-cover" />
//                   </div>
//                   <h2 className="text-[16px] truncate w-[200px] sm:w-[200px] font-poppins font-bold text-primary">{item.title} </h2>
//                 </div>
//                 <p className="text-[12px] font-medium font-poppins text-second ">{item.price} $ </p>
//               </div>
//             ))
            
//             }
//           </div>

//           {/* --------------------- total price */}
//           <div className="flex items-center justify-between mt-6 sm:mt-[50px]">
//             <p className="text-[14px] font-medium font-poppins text-primary">    Total :  </p>
//             <p className="text-[14px] font-medium font-poppins text-primary">  {totalPrice} $    </p>
//           </div>

//           {/* ---------------- check button */}
//           <div className="mt-4 sm:mt-[20px]">
//             <Link
//               to="/CheckOut"
//               className="w-full block p-2 sm:p-[10px] bg-black hover:bg-green-400 text-[16px] sm:text-[20px] font-semibold font-poppins text-white text-center rounded-2xl sm:rounded-4xl transition-colors duration-200"> Chackout  </Link>
//           </div>
//         </div>
//     </>
//   );
// };

// export default Card;






import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ closeCart }) => {
  const [product, setProduct] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  // API fatch
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);

        const localIds = JSON.parse(localStorage.getItem("productID")) || [];
        const cartData = res.data.products.filter((item) =>
          localIds.includes(item.id)
        );
        setCartProducts(cartData);
      })
      .catch((err) => console.log(err));
  }, []);

  //-------- delete function
const handleDelete = (id) => {
  const existingIds = JSON.parse(localStorage.getItem("productID")) || [];
  const updatedIds = existingIds.filter((itemId) => itemId !== id);
  localStorage.setItem("productID", JSON.stringify(updatedIds));
  const updatedCart = cartProducts.filter((item) => item.id !== id);
  setCartProducts(updatedCart);
};

  //-------------- total price
  const totalPrice = cartProducts?.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/*--------------- background*/}
      <div onClick={closeCart} className="w-full h-screen bg-[#d7cbcb60] top-0 right-0 z-10 fixed flex justify-end"> </div>

      {/* --------------------- cart content */}
      <div className="w-full sm:w-[400px] h-full bg-amber-50 ml-auto p-2 sm:p-[10px] flex flex-col absolute top-0 right-0 z-20">

        {/* ---------------- cart + button */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-[36px] font-semibold font-poppins text-second">Cart</h2>
          <ImCross onClick={closeCart} className="cursor-pointer text-lg sm:text-xl" />
        </div>

        {/* ---------------- product list*/}
        <div className="AllProduct flex-1 mt-6 sm:mt-[40px] overflow-y-auto max-h-[50vh] sm:max-h-[600px]">
          {cartProducts?.map((item, i) => (
            <div key={i} className="flex justify-between items-center mb-4 ">
              <div className="proImg_name flex gap-2 sm:gap-[20px] items-center sm:w-auto">
                {/* ------------ delete button */}
           <button onClick={() => handleDelete(item.id)}>
  <MdDeleteOutline className="text-[25px]" />
</button>
                <div className="proimg w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] bg-gray-100 rounded-2xl overflow-hidden ">
                  <img src={item.images} alt="product-Img" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-[14px] sm:text-[16px] truncate w-[200px] sm:w-[200px] font-poppins font-bold text-primary">{item.title}</h2>
              </div>
              <p className="text-[13px] font-medium font-poppins text-second ">{item.price} $</p>
            </div>
          ))}
        </div>

        {/* --------------------- total price */}
        <div className="flex items-center justify-between mt-6 sm:mt-[50px]">
          <p className="text-[14px] font-medium font-poppins text-primary">Total :</p>
          <p className="text-[14px] font-medium font-poppins text-primary">{totalPrice} $</p>
        </div>

        {/* ---------------- check button */}
        <div className="mt-4 sm:mt-[20px]">
          <Link
            to="/CheckOut"
            className="w-full block p-2 sm:p-[10px] bg-black hover:bg-green-400 text-[16px] sm:text-[20px] font-semibold font-poppins text-white text-center rounded-2xl sm:rounded-4xl transition-colors duration-200">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;




