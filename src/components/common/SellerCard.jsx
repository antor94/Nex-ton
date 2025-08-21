import React from "react";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const SellerCard = ({
  sellerImg,
  Sellerh2,
  sellerP,
  sellerText,
  sellerFont,
  showDatails,
  sellerdis,
  seelerstock,
  certClick,
}) => {

const ReatRedux = useSelector((state)=>state.SrcId.value)






  return (
    <>
      <div  onClick={certClick} className="group w-[309px] h-[448px] dark:bg-primary rounded-[16px] pb-[20px]  mb-[50px] pl-[30px] lg:pl-0 relative">
        <button
         
          className="w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center absolute top-[18px] right-[16px] transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto "> <FaCartShopping />  </button>
        <div
          onClick={showDatails}
          className="w-full rounded-2xl bg-[#F8FAFC] overflow-hidden"
        >
          {" "}
          <img className="w-[500px]" src={sellerImg} alt="reco-img" />{" "}
        </div>
        <div className="flex justify-between items-center pt-[20px]">
          <h2 className="text-[16px] truncate w-[200px] font-semibold dark:text-white font-poppins text-second">
            {Sellerh2}
          </h2>
          <h2 className="text-[16px] font-semibold font-poppins dark:text-white text-second">
            {sellerP} $
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-normal truncate w-[200px] font-poppins dark:text-white text-primary">
            {sellerText}
          </p>
          <p className="text-[14px] font-normal font-poppins dark:text-white text-primary line-through italic">
            {sellerFont}{" "}
          </p>
        </div>
        <div className="pt-[9px] flex gap-[10px] items-center">
          <GoStarFill className="text-[#FBBF24]" />
          <p className="ext-[14px] font-normal font-poppins dark:text-white text-primary">
            {sellerdis}
          </p>
          <p className="ext-[14px] font-normal font-poppins dark:text-white text-primary">
            ({seelerstock})
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerCard;
