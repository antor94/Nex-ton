import React from "react";
import { Link } from "react-router";
import Aboutimg from "../../assets/images/aboutImg.png";
import Aboutimg2 from "../../assets/images/Aboutimage2.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import BreadCrum from "./BreadCrum";

const AboutFile = () => {
  return (
    <>
      <section className="mt-[40px] lg:mb-[72px] mb-[92px]">
        <div className="container">
          <BreadCrum breadContent={'About'} />
          <div className="about_row px-[24px] lg:px-0">
            <div>
              <div>
                <h1 className=" text-[24px] lg:text-[36px] font-semibold pb-[12px] font-poppins text-second dark:text-white">
                  About us
                </h1>
                <p className="w-[312px] lg:w-[643px] text-[14px] lg:text-[16px] font-medium font-poppins text-primary dark:text-white">
                  We not only help you design exceptional products, but also
                  make it easy for you to share your designs with more
                  like-minded people.
                </p>
              </div>

              <div className=" mt-[72px] lg:mt-[64px] pb-[52px] lg:pb-0 lg:flex lg:gap-[120px]">
                <Link>
                  <img
                    className="w-[312px] lg:w-[622px] lg:h-[506px]"
                    src={Aboutimg2}
                    alt="about-img"
                  />
                </Link>

                <div className=" lg:py-[177px] flex flex-col gap-[14px] lg:gap-[16px] ">
                  <h2 className="w-[248px] mt-[32px] lg:mt-0 lg:w-[297px] text-[20px] lg:text-[24px] font-semibold font-poppins text-second dark:text-white">
                    Provide fashionable and qualifed products
                  </h2>
                  <p className=" w-[312px] lg:w-[554px] text-[14px] lg:text-[16px] font-normal font-poppins text-primary dark:text-white">
                    Already millions of people are very satisfied by thi. s page
                    builder and the number is growing more and more. Technolog
                    developing, requirements are increasing. Riode has brought.
                  </p>
                </div>
              </div>

              <div className="mt-[52px] pb-[72px]  lg:mt-[64px] lg:flex lg:gap-[120px]">
                <Link className="">
                  <img
                    className="w-[312px]  lg:hidden"
                    src={Aboutimg}
                    alt="about-img"
                  />
                </Link>
                <div className=" lg:py-[177px] flex flex-col gap-[14px] lg:gap-[16px] ">
                  <h2 className="w-[248px] mt-[32px] lg:mt-0 lg:w-[297px] text-[20px] lg:text-[24px] font-semibold font-poppins text-second dark:text-white">
                    Provide fashionable and qualifed products
                  </h2>
                  <p className=" w-[312px] lg:w-[554px] text-[14px] lg:text-[16px] font-normal font-poppins text-primary dark:text-white">
                    Already millions of people are very satisfied by thi. s page
                    builder and the number is growing more and more. Technolog
                    developing, requirements are increasing. Riode has brought.
                  </p>
                </div>
                <Link>
                  <img
                    className="w-[312px] lg:w-[622px] lg:h-[506px] hidden lg:block"
                    src={Aboutimg}
                    alt="about-img"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-[72px] lg:mt-0">
              <div>
                <h2 className="text-[20px] lg:text-[24px] font-semibold font-poppins text-second dark:text-white mb-[32px] lg:mb-[40]">
                  Get in touch with us
                </h2>
              </div>

              <div className=" lg:flex lg:gap-[96px]">

        

              <div className="w-[600] h-[336px]  ">
                <div>
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second dark:text-white"> Address</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second dark:text-white"> Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="mt-[32px]">
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second dark:text-white">Email</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second dark:text-white">nexton@example.com</p>
                </div>
                <div className="mt-[32px]">
                  <h2 className="text-[16px] lg:text-[14px] font-semibold font-poppins text-second dark:text-white">Phone</h2>
                  <p className="text-[14px] lg:text-[16px] font-normal font-poppins text-second dark:text-white">000-123-456-7890</p>
                </div>
                <div className="mt-[32px] hidden lg:block">
                  <h2 className="text-[16px] lg:text-[18px] font-semibold font-poppins text-second dark:text-white">Socials</h2>
                  
                  <div className=" sm:hidden  lg:flex gap-[10px] mt-[8px]">  

                  <Link className="w-[24px] h-[24px] text-[#4676ED]"><FaFacebook /></Link>
                  <Link className="w-[24px] h-[24px] text-[#DA0000]"><FaYoutube /></Link>
                  <Link className="w-[24px] h-[24px] text-[#38B0E3]" ><FaTelegram /></Link>
                  <Link className="w-[24px] h-[24px] text-[#5A99EC]"><FaTwitterSquare /> </Link>
                  </div>
                  
                </div>
                <div>


              </div>
                 </div>

                 <div>

             

                                <div>
                    <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second dark:text-white">Full name</h2>
                    <input className="w-[312px] lg:w-[600px] h-[43px] mt-[8px] border border-[#E5E7EB] dark:text-white rounded-[12px] outline-none mb-[24px]" type="text" />
                </div>
                                <div>
                    <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second dark:text-white">Email address</h2>
                    <input className="w-[312px] lg:w-[600px] h-[43px] mt-[8px] border border-[#E5E7EB] dark:text-white rounded-[12px] outline-none mb-[24px]" type="text" />
                </div>
                                                <div>
                    <h2 className="text-[14px] lg:text-[16px] font-poppins font-semibold text-second dark:text-white">Message</h2>
                    <input className="w-[312px] lg:w-[600px] h-[132px] flex  lg:h-[128px] mt-[8px] border dark:text-white border-[#E5E7EB] rounded-[12px] outline-none mb-[24px]" type="text" />
                </div>

                <button className="w-full  lg:w-[182px] h-[40px] lg:h-[52px] bg-second rounded-full text-[14px] lg:text-[16px] font-medium font-poppins text-white hover:scale-[1.1] duration-[.3s]">Send Message</button>
                    </div>

                      </div>
             

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFile;
