import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiGitMerge } from "react-icons/bi";
import { AArrowDown, Armchair, Eraser, Scaling } from "lucide-react";
import icon from "../assets/images/item-image.png";
import BreadCrum from "../components/common/BreadCrum";
import axios from "axios";
import { RiDeleteBin4Line } from "react-icons/ri";

const CheckOut = () => {
  const [value, setValue] = useState(1);

  const localIds = JSON.parse(localStorage.getItem("productID"));

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  // ---------------------api fatch

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        const cartData = res.data.filter((item) => {
          return localIds?.includes(item.id);
        });
        const withQty = cartData.map((item) => {
          return { ...item, qty: 1, unitPrice: item.price };
        });
        setCartProduct(withQty);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddQty = (data) => {
    setCartProduct((prev) =>
      prev.map((item) => {
        if (item.id != data) return item;

        const undateQty = item.qty + 1;
        const updatePrice = item.unitPrice * undateQty;
        return { ...item, qty: undateQty, price: updatePrice };
      })
    );
  };

  const totalPrice = cartProduct.reduce((sum, cartProduct) => {
    return sum + cartProduct.price;
  }, 0);

  //-------- delete function

  const handleDelete = (id) => {
    const existingIds = JSON.parse(localStorage.getItem("productID")) || [];
    const updatedIds = existingIds.filter((itemId) => itemId !== id);
    localStorage.setItem("productID", JSON.stringify(updatedIds));
    const updatedCart = cartProduct?.filter((item) => item.id !== id);
    setCartProduct(updatedCart);
  };

  return (
    <>
      <section id="checkout" className="dark:bg-primary">
        <div className="container">
          <div className="checkout_row pt-6 px-2 sm:px-4 md:px-8 lg:px-0">
            {/* ----------------------- responsive order summary (mobile) */}
            <div className="lg:hidden w-full max-w-[400px] mx-auto">
              {/* -------------------------- product-details */}

              <div>
                <h2 className="text-[20px] lg:text-[24px] font-semibold font-poppins  dark:text-white     text-second">
                  Order summary
                </h2>
              </div>
              <span className="inline-block w-full border dark:text-white border-[#E5E7EB]"></span>

              {/* ------------------------- 1st div item */}
              <div className="pt-[24px] flex justify-between items-center">
                <div className=" flex gap-[20px] ">
                  <div>
                    <img src={icon} alt="icon" />
                  </div>
                  <div>
                    <h2 className=" text-[9px] font-semibold font-poppins  dark:text-white     text-second ">
                      Black Automatic Watch
                    </h2>
                    <p className="text-[12px] font-semibold font-poppins  dark:text-white     text-primary">
                      One size
                    </p>
                    <div className=" py-[20px] flex items-center gap-[33px]">
                      {/* --------------------- subtotal */}

                      <div className=" flex  justify-between items-center">
                        <div className=" ">
                          <h2 className="text-[14px] font-semibold font-poppins  dark:text-white     text-second">
                            $169.99
                          </h2>
                          <p className=" line-through text-[12px] flex justify-start font-medium  dark:text-white     font-poppins text-primary">
                            $199.99
                          </p>
                        </div>
                      </div>

                      {/* ----------------------------- button */}
                      <div className="w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full">
                        <button
                          onClick={decrement}
                          className=" border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center "
                        >
                          -
                        </button>
                        <h2 className="text-[16px] font-medium font-poppins text-primary">
                          1
                        </h2>
                        <button
                          onClick={increment}
                          className="border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* ------------------ 2nd div item */}
              <div className="pt-[24px] flex justify-between items-center">
                <div className=" flex gap-[20px] ">
                  <div>
                    <img src={icon} alt="icon" />
                  </div>
                  <div>
                    <h2 className=" text-[9px] font-semibold font-poppins  dark:text-white     text-second ">
                      Black Automatic Watch
                    </h2>
                    <p className="text-[12px] font-semibold font-poppins  dark:text-white     text-primary">
                      One size
                    </p>
                    <div className=" py-[20px] flex items-center gap-[33px]">
                      <div className=" flex  justify-between items-center">
                        <div className=" ">
                          <h2 className="text-[14px] font-semibold font-poppins  dark:text-white     text-second">
                            $169.99
                          </h2>
                          <p className=" line-through text-[12px] flex  dark:text-white     justify-start font-medium font-poppins text-primary">
                            $199.99
                          </p>
                        </div>
                      </div>
                      <div className="w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full">
                        <button className=" border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center ">
                          -
                        </button>
                        <h2 className="text-[16px] font-medium font-poppins text-primary">
                          1
                        </h2>
                        <button className="border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center">
                          <p className="">+</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-[30px] lg:pt-0">
              <CommonHead headh2={"Checkout"} />
            </div>
            <BreadCrum breadContent={" Checkout"} />

            {/* --------------------- lg device */}
            <div className=" lg:flex lg:justify-between">
              {/* ----------------------- left side */}
              <div className="w-full max-w-[638px] mx-auto">
                {/* ------------------ contact-info */}
                <div className="w-full mb-[24px]  lg:mb-[40px] border border-[#E5E7EB]">
                  <div className="py-[24px] pl-[24px] flex  items-center gap-[10px]">
                    <FaRegCircleUser />
                    <p className="text-[14px] lg:text-[16px] font-medium   dark:text-white     font-poppins text-primary">
                      CONTACT INFO
                    </p>
                  </div>
                  <span className=" inline-block w-full border border-[#E5E7EB]"></span>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px]  dark:text-white     font-semibold font-poppins text-second">
                        Your phone number
                      </label>
                      <input
                        className="w-full max-w-[283px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px]  dark:text-white     font-semibold font-poppins text-second">
                        Email address
                      </label>
                      <input
                        className="w-full max-w-[283px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
                {/* ------------- shipping address */}
                <div className="w-full mb-[24px] lg:mb-[40px] border border-[#E5E7EB]">
                  <div className="py-[24px] pl-[24px] flex  items-center gap-[10px]">
                    <BiGitMerge />
                    <p className="text-[14px] lg:text-[16px] font-medium  dark:text-white      font-poppins text-primary">
                      SHIPPING ADDRESS
                    </p>
                  </div>
                  <span className=" inline-block w-full border border-[#E5E7EB]"></span>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        First name
                      </label>
                      <input
                        className="w-full max-w-[282px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col  lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] dark:text-white font-semibold font-poppins text-second">
                        Last name
                      </label>
                      <input
                        className="w-full max-w-[282px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        Address line 1
                      </label>
                      <input
                        className="w-full max-w-[384px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col pt-[24px] lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        Apt, Suite
                      </label>
                      <input
                        className="w-full max-w-[180px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="hidden lg:flex gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col w-full">
                      <label className="pb-[8px] text-[14px] lg:text-[16px] font-semibold dark:text-white font-poppins text-second">
                        Address line 2
                      </label>
                      <input
                        className="w-full max-w-[588px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        City
                      </label>
                      <input
                        className="w-full max-w-[282px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col  lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        Country
                      </label>
                      <input
                        className="w-full max-w-[282px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold   dark:text-white    font-poppins text-second">
                        State/Province
                      </label>
                      <input
                        className="w-[123px] h-[43px] pl-[20px] lg:w-[282px] rounded-[12px]   dark:text-white      border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col  lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold   dark:text-white    font-poppins text-second">
                        Postal code
                      </label>
                      <input
                        className="w-[123px] h-[43px] pl-[20px] lg:w-[282px] rounded-[12px]   dark:text-white      border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
                {/* ------------ payment */}
                <div className="w-full mb-[24px] lg:mb-[40px] border border-[#E5E7EB]">
                  <div className="py-[24px] pl-[24px] flex  items-center gap-[10px]">
                    <Eraser />
                    <p className="text-[14px] lg:text-[16px] font-medium   dark:text-white     font-poppins text-primary">
                      PAYMENT
                    </p>
                  </div>
                  <span className=" inline-block w-full border border-[#E5E7EB]"></span>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px]  dark:text-white     font-semibold font-poppins text-second">
                        Card number
                      </label>
                      <input
                        className="w-full max-w-[590px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="pl-[24px]">
                    <div className="flex flex-col  lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px]   dark:text-white    font-semibold font-poppins text-second">
                        Name on the card
                      </label>
                      <input
                        className="w-full max-w-[590px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] py-[24px] pl-[24px]">
                    <div className="flex flex-col ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold  dark:text-white     font-poppins text-second">
                        Expiration date{" "}
                        <span className=" hidden lg:inline-block">(MM/YY)</span>
                      </label>
                      <input
                        className="w-full max-w-[386px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex flex-col  lg:pt-0 ">
                      <label className=" pb-[8px] text-[14px] lg:text-[16px] font-semibold   dark:text-white    font-poppins text-second">
                        CVC
                      </label>
                      <input
                        className="w-full max-w-[180px] h-[43px] pl-[20px] rounded-[12px] dark:text-white border border-[#E5E7EB] outline-none"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------- right side */}

              <div>
                {/* ------------------ order summary */}
                <div className="hidden lg:block w-full max-w-[618px] px-4 lg:px-0">
                  <div>
                    <h2 className="text-[20px] lg:text-[24px]   dark:text-white    font-semibold font-poppins text-second">
                      Order summary
                    </h2>
                  </div>

                  {cartProduct.map((item) => (
                    <div
                      key={item.id}
                      className="pt-[24px] flex justify-between items-center"
                    >
                      <div className=" flex gap-[20px]">
                        <div className="w-[100px] rounded-[8px]">
                          <img
                            className="rounded-[8px]"
                            src={item.images[0]}
                            alt="icon"
                          />
                        </div>
                        <div>
                          <h2 className="text-[16px] font-semibold font-poppins truncate w-[200px] dark:text-white     text-second">
                            {item.title}
                          </h2>
                          <p className="text-[14px] font-normal dark:text-white flex gap-[10px] font-poppins text-primary">
                            <Scaling />
                            One size
                          </p>
                          {/* ------------------ button */}
                          <div className="py-[38px] flex items-center justify-between">
                            <div className="w-[110px] bg-[#F8F8F8] flex justify-around py-[8px] px-[12px] rounded-full">
                              <button className=" border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex bg-white justify-center items-center ">
                                -
                              </button>
                              <h2 className="text-[16px] font-medium font-poppins text-primary">
                                {item.qty}
                              </h2>
                              <button
                                onClick={() => handleAddQty(item.id)}
                                className="border border-[#E5E7EB] rounded-full w-[24px] h-[24px] flex  bg-white justify-center items-center"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="absolute right-[200px]"
                        >
                          <RiDeleteBin4Line className="text-[25px]  dark:text-white  text-black" />
                        </button>
                      </div>
                      <div className=" flex  justify-between items-center">
                        <div className=" ">
                          <h2 className="text-[16px] font-semibold  dark:text-white   font-poppins text-second">
                            $ {item.price}
                          </h2>
                          <h2 className=" line-through text-[14px]  dark:text-white   flex justify-end font-medium font-poppins text-primary">
                            $199.99
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* ---------------------- res button */}
                  <button className="lg:hidden pt-[80px] pb-[24px] text-[20px] font-semibold   dark:text-white  font-poppins text-second">
                    Confirm your order
                  </button>

                  {/* ---------------------- subtotal */}
                  <div className="flex flex-col">
                    <div className="flex flex-col  pt-[32px] pb-[16px]">
                      <div className="flex justify-between">
                        <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                          Subtotal
                        </p>
                        <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                          $ {totalPrice}
                        </p>
                      </div>
                      <div className="flex justify-between py-[12px] lg:py-[8px]">
                        <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                          Shipping estimate
                        </p>
                        <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                          $5.00
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[16px] font-normal   dark:text-white  font-poppins text-primary">
                          Tax estimate
                        </p>
                        <p className="text-[16px] font-normal   dark:text-white  font-poppins text-primary">
                          $24.90
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-[16px] pb-[33px]">
                      <h2 className="text-[16px] font-semibold  dark:text-white   font-poppins text-second">
                        Order total
                      </h2>
                      <h2 className="text-[16px] font-semibold  dark:text-white   font-poppins text-second">
                        $ {totalPrice + 5 + 24.98}{" "}
                      </h2>
                    </div>
                  </div>
                </div>
                <button className="lg:hidden pt-[80px]  lg:px-0 pb-[24px] text-[20px]  dark:text-white   font-semibold font-poppins text-second">
                  Confirm your order
                </button>

                {/*--------------- res subtotal  */}
                <div className="flex flex-col lg:hidden ">
                  <div className="flex flex-col  pt-[32px] pb-[16px]">
                    <div className="flex justify-between">
                      <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                        Subtotal
                      </p>
                      <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                        $169.99
                      </p>
                    </div>
                    <div className="flex justify-between py-[12px] lg:py-[8px]">
                      <p className="text-[16px] font-normal   dark:text-white  font-poppins text-primary">
                        Shipping estimate
                      </p>
                      <p className="text-[16px] font-normal   dark:text-white  font-poppins text-primary">
                        $5.00
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[16px] font-normal   dark:text-white  font-poppins text-primary">
                        Tax estimate
                      </p>
                      <p className="text-[16px] font-normal  dark:text-white   font-poppins text-primary">
                        $24.90
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[16px] pb-[33px]">
                    <h2 className="text-[16px] font-semibold   dark:text-white  font-poppins text-second">
                      Order total
                    </h2>
                    <h2 className="text-[16px] font-semibold  dark:text-white   font-poppins text-second">
                      $199.89
                    </h2>
                  </div>
                </div>
                {/* ------------- button */}
                <div className="w-full max-w-[400px] pb-[72px] lg:pb-0 mx-auto">
                  <button className="w-full max-w-[400px] lg:max-w-[618px] bg-second hover:scale-[1.1] hover:bg-green-300 duration-[.4s] rounded-full py-[14px] text-[16px] font-medium dark:text-white font-poppins text-white">
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
