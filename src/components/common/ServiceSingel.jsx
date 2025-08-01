import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const ServiceSingel = ({ suppottext, suppotp, suppotIcon }) => {
  return (
    <>
      <div className="flex gap-[16px] items-center">
        {suppotIcon}
        <div>
          <h2 className=" text-[14px] font-normal text-primary dark:text-white lg:text-[18px] lg:font-semibold font-poppins lg:text-second">
            {suppottext}
          </h2>
          <p className="text-[14px] font-normal font-poppins dark:text-white text-primary hidden lg:block ">
            {suppotp}
          </p>
        </div>
      </div>

    
    </>
  );
};

export default ServiceSingel;
