import React, { useState } from "react";
import resNav from "../assets/images/reslogo.png";
import { Link, useNavigate } from "react-router";
import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { useDispatch, useSelector , } from "react-redux";

const ResNavbar = () => {
  // ---------------- button state
  const [showNav, setShownav] = useState(false);

  // --------------- search bar

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const reduxProduct = useSelector((state) => state.proId.value);

  const handleSearch = (e) => {
    // if(!searchInput) return alert('please input data')
    const filterData = product.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(filterData);
  };

  // --------------- navigete
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <nav id="resNavbar" className="lg:hidden py-5 px-4 dark:bg-primary">
        <div className="container">
          <div className="nav_row flex items-center justify-between">
            <Link to={"/"} className="NavIcon w-[24px]">
              <img src={resNav} alt="logo" />
            </Link>
            <div className="menu_src w-[200px] h-[36px] rounded-[100px] bg-[#F8F8F8] flex items-center pl-[24px]">
              <RiSearch2Line
                onClick={handleSearch}
                className="text-xl text-primary"
              />
              <input
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  handleSearch();
                }}
                className="w-full pl-[10px] outline-none border-none text-[12px] font-normal font-poppins"
                type="text"
                placeholder="Search in products..."
                value={searchInput}
              />
            </div>
            <button
              onClick={() => setShownav(!showNav)}
              className="NavItem w-[25px] h-[20px] text-primary  relative"
            >
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute top-0 left-0 rounded-full ${
                  showNav
                    ? "rotate-45 duration-[.3s] top-[8px]"
                    : "rotate-0 duration-[.3s] top-0"
                }`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute top-1/2 -translate-y-[50%] left-0 rounded-full ${
                  showNav ? "hidden duration-[.3s]" : "block duration-[.3s]"
                }`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary dark:bg-white absolute  left-0 rounded-full ${
                  showNav ? "rotate-[-45deg] top-[45%]" : "rotate-0 top-[90%]"
                }`}
              ></span>
            </button>
            <div
              className={`p-3 h-[500px] w-[200px]   z-[1] flex flex-col justify-center items-center gap-[20px] 
             dark:bg-amber-600 bg-primary rounded-[10px] mt-[20px] absolute top-10 duration-[.3s] ${
               showNav ? "right-5 block " : "right-[-100%] hidden "
             }`}
            >
              <ul className="flex flex-col items-center gap-5 text-[16px] font-poppins font-normal text-white ">
                <li>
                  <Link
                    to="./Login"
                    className="flex justify-center items-center gap-2"
                  >
                    profile <RiUserLine className="text-2xl" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="./checkout"
                    className="flex justify-center items-center gap-2"
                  >
                    cart <PiShoppingCart className="text-2xl" />
                    <span
                      className="w-[20px] h-[20px] rounded-full bg-[#0EA5E9] text-[12px] font-normal font-poppins text-[#fff] flex  justify-center
           items-center absolute top-[250px] left-[122px]"
                    >
                      3
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* -------------------- product serach */}
      <div className="flex bg-[#0000006d] justify-center">
        <div className="w-[100vw] flex flex-wrap gap-[30px] justify-center items-center pt-6">
          {searchResult?.length === 0 ? (
            <h2 className="text-[24px] font-medium font-poppins text-red-600">
              {" "}
              Product Not Found !
            </h2>
          ) : (
            searchResult?.map((item) => (
              <SellerCard
                certClick={handleProduct}
                sellerImg={item.images}
                Sellerh2={item.title}
                sellerdis={item.rating}
                sellerP={item.price}
                sellerText={item.category.slug}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ResNavbar;
