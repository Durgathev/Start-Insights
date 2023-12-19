import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import ServeItem from "./ServeItem";

const Serves = () => {
  return (
    <>
      <section className="relative bg-[#F6F6F6] px-8 py-28">
        <svg
          className="absolute top-20 right-80"
          width="70"
          height="67"
          viewBox="0 0 70 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 65C24.8 42.6 8.16667 35 1 34C22.6 27.6 32 9.33333 34 1C38.4 19.4 58.1667 30.6667 67.5 34C47.9 37.6 37 56.1667 34 65Z"
            stroke="#0133DC"
          />
        </svg>
        <div className=" xs:container sm:conatiner lg:container  mx-auto py-6 ">
          <div className="flex xs: flex-col sm:flex-col lg:flex-row  justify-between">
            <div>
              <h3 className=" text-3xl lg:text-3xl font-bold">
                Industried we've Served
              </h3>
              <p className="text-light pt-3 sm:w-[100%] md:w-[55%]">
                Cras mattis consectetur purus sit amet fermentum. Donec
                ullamcorper nulla non metus auctor fringilla. Integer posuere
                erat.
              </p>
            </div>
            <div className="pt-3 lg:p-0  ">
              <button className=" text-[#0133DC] border border-[#0133DC] outline-current rounded-md px-3 py-2 hover:text-white hover:bg-[#0133DC] ">
                <div className="flex justify-evenly items-center gap-6">
                  <span className="block">Learn More</span>
                  <span className="block">
                    <FaAngleRight />
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className=" py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
            <ServeItem />
          </div>
        </div>

        <svg
          className=" absolute top-0 right-48"
          width="70"
          height="67"
          viewBox="0 0 70 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 65C24.8 42.6 8.16667 35 1 34C22.6 27.6 32 9.33333 34 1C38.4 19.4 58.1667 30.6667 67.5 34C47.9 37.6 37 56.1667 34 65Z"
            stroke="#0133DC"
          />
        </svg>
      </section>
    </>
  );
};

export default Serves;
