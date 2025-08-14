import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import SellerCard from "../components/common/SellerCard";
import Pagination from "../components/Pagination";
import BreadCrum from "../components/common/BreadCrum";
import { useNavigate } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const Sellercomponents = () => {
  const [products, setProducts] = useState([]);

  // -------------- pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  //------------ Calculate the start and end index for the current page
  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // ------------- api fatch
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) =>{
        
      } )
      .catch((err) => console.log(err));
  }, []);

  // -------------- navigate

  const navigate = useNavigate();
  const handlebutton = (productInfo) => {
    navigate(`/AboutProducts/${productInfo.id}`);
  };

  // ---------------- store application

  const handelShow = (data) => {
    let exisId = JSON.parse(localStorage.getItem("productID")) || [];
    exisId.push(data);
    localStorage.setItem("productID", JSON.stringify(exisId));
  };

  return (
    <>
      <section id="seller-components" className="dark:bg-primary">
        <div className="container">
          <BreadCrum
            breadContent={" Sellercomponents"}
            breadLink={"/Sellercomponents"}
          />
          <div id="seller_row" className="pb-[72px]">
            <div className="mt-10 flex flex-col lg:flex-row lg:gap-[44px] ml-4 lg:ml-[24px]">
              {/*--------------------------- Sidebar/filter section for all screens, horizontal on mobile, vertical on desktop */}
              <div className="flex justify-around items-center lg:hidden">

              <div className="w-[75px] border border-[#E5E7EB] rounded-full py-[6px] px-[12px]"><p className="text-[12px] font-normal font-poppins flex items-center gap-[5px] text-primary dark:text-white"><FiFilter /> Filters</p></div>
              <div className="w-[128px] border border-[#E5E7EB] rounded-full py-[6px] px-[12px]"><p className="text-[12px] font-normal font-poppins text-primary flex items-center  dark:text-white">Rows per page <IoMdArrowDropdown /></p></div>
              </div>
              <div className="w-full lg:w-auto mb-8 lg:mb-0">
                {/* --------------- category */}
                <div className="hidden lg:block mb-8">
                  {/* ------------ catagory */}
                  <div>
                    <h2 className="text-[18px] font-semibold font-poppins text-second dark:text-white">
                      {" "}
                      Categories{" "}
                    </h2>{" "}
                  </div>

                  <div className="mt-[24px] flex gap-[12px] mb-[16px]">
                    <input id="cat-men" className="w-[20px]  h-[20px] bg-red-200"  type="checkbox"  />
                    <label  htmlFor="cat-men" className="cursor-pointer select-none text-[14px] font-normal font-poppins text-primary dark:text-white"> Men’s fashion </label>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Women’s fashion
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Kids & Toys
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Accessories
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Cosmetics
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Shoes
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-[4px] "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Sports
                    </h2>
                  </div>
                </div>

                {/* ---------------- price range */}
                <div className="py-8 hidden lg:block mb-8">
                  <div>
                    <h2 className="text-[18px] font-semibold font-poppins text-second dark:text-white">
                      Price range
                    </h2>
                  </div>
                  <div className="pt-[24px]"><input className="w-[285px]  dark:text-[#0EA5E9]" type="range" /></div>
                  <div className="flex gap-[24px] ">
                    <div>
                      <h2 className="text-[16px] font-normal font-poppins text-primary dark:text-white mt-[20px] mb-[4px]">
                        Min price
                      </h2>
                      <div className="w-[130px] h-[36px] border border-[#E5E7EB]  rounded-full px-[16px] flex justify-between items-center">
                         <input className="w-[90%] text-[14px] font-normal border-none  outline-none font-poppins dark:text-white text-primary" type="number" placeholder="100" />
                        <p className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                          $
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[16px] font-normal font-poppins text-primary dark:text-white mt-[20px] mb-[4px]">
                        Max price
                      </h2>
                      <div className="w-[130px] h-[36px] border border-[#E5E7EB]  rounded-full px-[16px] flex justify-between items-center">
                        <input className="w-[90%] text-[14px] font-normal font-poppins border-none  outline-none dark:text-white text-primary" type="number" placeholder="500" />
                 
                        <p className="text-[14px] font-normal font-poppins text-primary dark:text-white">   $</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------------- sort-order */}
                <div className="mt-8 mb-10 hidden lg:block">
                  <div>
                    <h2 className="text-[18px] font-semibold font-poppins text-second dark:text-white">
                      Sort order
                    </h2>
                  </div>

                  <div className=" flex gap-[12px] mb-[16px] mt-[24px]">
                    <input
                      id="most-popular"
                      type="checkbox"
                      className="w-[20px] h-[20px] border rounded-full border-[#94A3B8] "
                    />
                    <label
                      htmlFor="most-popular"
                      className="text-[14px] font-normal font-poppins text-primary dark:text-white cursor-pointer select-none"
                    >
                      Most Popular
                    </label>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8]  rounded-full "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Best Rating
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-full "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Newest
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-full "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Price Low - Hight
                    </h2>
                  </div>
                  <div className=" flex gap-[12px] mb-[16px]">
                    <button className="w-[20px] h-[20px] border border-[#94A3B8] rounded-full "></button>
                    <h2 className="text-[14px] font-normal font-poppins text-primary dark:text-white">
                      Price Hight - Low
                    </h2>
                  </div>
                </div>
              </div>

              {/* --------------- right-side product cart */}

              <div className="flex-1">
                <div className="seller_row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                  {currentItems.map((item, i) => (
                    <SellerCard
                      key={i}
                      showDatails={() => handlebutton(item)}
                      certClick={() => handelShow(item.id)}
                      sellerImg={item.images}
                      Sellerh2={item.title}
                      sellerP={item.price}
                      sellerText={item.category.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              setPage={setPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sellercomponents;
