import React from "react";
import ServiceSingel from "./common/ServiceSingel";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTransform } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <section id="Service" className="pt-[52px] pb-[32px] px-[24px] ">
        <div className="container">
          <div className="text-base font-semibold font-poppins dark:text-white text-second lg:hidden mb-[24px]">
            <h2>Nexton® always with you</h2>
          </div>
          <div className=" service_row lg:border dark:border-white lg:border-[#4B5563] rounded-[16px]  lg:py-6 lg:px-10 flex justify-between items-center flex-wrap gap-[24px] lg:flex lg:justify-between lg:items-center">
            <ServiceSingel
              suppottext={"Free shipping"}
              suppotp={"On orders over $50.00"}
              suppotIcon={<TbTruckDelivery className=" text-xl lg:text-3xl" />}
            />
            <span className="lg:w-[1px] lg:h-[50px] lg:bg-[#E5E7EB] inline-block"></span>
            <ServiceSingel 
              suppottext={"Very easy to return"}
              suppotp={"Just phone number"}
              suppotIcon={<TbTransform className="text-xl lg:text-3xl" />}
            />
            <span className=" lg:w-[1px]  lg:h-[50px]  lg:bg-[#E5E7EB] inline-block"></span>
            <ServiceSingel
              suppottext={"Worldwide delivery"}
              suppotp={"Fast delivery worldwide"}
              suppotIcon={<TbWorld className="text-xl lg:text-3xl" />}
            />
            <span className=" lg:w-[1px]  lg:h-[50px]  lg:bg-[#E5E7EB] inline-block"></span>
            <ServiceSingel
              suppottext={"Free Refunds policy"}
              suppotp={"60 days return for any reason"}
              suppotIcon={<RiMoneyDollarCircleLine className=" text-xl lg:text-3xl" />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
