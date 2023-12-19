import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import maskg from "../../src/assets/images/Mask group.png";
import mask1 from "../assets/images/mask1.png";

const CaseStudy = () => {
  return (
    <>
      <section className="relative bg-[#F6F6F6] px-16 py-28">
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
        <div className=" xs:container sm:conatiner lg:container  mx-auto py-5 ">
          <div className="flex xs: flex-col sm:flex-col lg:flex-row  justify-between">
            <div>
              <h3 className=" text-3xl lg:text-3xl font-bold">Case Studies</h3>
              <p className="text-light pt-3 sm:w-[100%] md:w-[55%]">
                Cras mattis consectetur purus sit amet fermentum. Donec
                ullamcorper nulla non metus auctor fringilla. Integer posuere
                erat.
              </p>
            </div>
            <div className="pt-3 lg:p-0  ">
              <button className=" text-[#0133DC] border border-[#0133DC] outline-current rounded-md px-3 py-2 hover:text-white hover:bg-[#0133DC] ">
                <div className="flex justify-evenly items-center gap-6">
                  <span className="block">View More</span>
                  <span className="block">
                    <FaAngleRight />
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className=" xs:px-10 xs: py-16 md:px-20 md:py-16 grid xs:grid-rows-3 md:grid-rows-4 md:grid-flow-col xs: gap-5 md:gap-2 text-center">
            <div class="max-w-sm md:row-span-4 md:col-span-2 rounded-lg border border-gray-800 overflow-hidden  shadow-[7px_7px_0px_0px_#000000CC]">
              <img class="w-full" src={maskg} alt="mask__group" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Private One to One Communication Cras mattis consectetur purus
                  sit amet{" "}
                </div>
                <p class=" text-gray-400 text-base">
                  Cras mattis consectetur purus sit amet fermentum. Donec
                  ullamcorper nulla non metus sit ametsit amet auctor fringilla.
                </p>
              </div>
              <div class="px-6 pt-4 pb-7 float-end">
                <div className="">
                  <button className=" text-[#0133DC] border border-[#0133DC] outline-current rounded-md px-3 py-2 hover:text-white hover:bg-[#0133DC] ">
                    <div className="flex justify-evenly items-center gap-6">
                      <span className="block">View Full Case Study</span>
                      <span className="block">
                        <MdArrowOutward />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="max-w-sm md:row-span-2 md:col-span-2 rounded-lg border border-gray-800 overflow-hidden hover:shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
              <img class="w-full" src={mask1} alt="mask__group" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-dark flex justify-between">
                  <p>
                    Private One to One Communication Cras mattis consectetur
                    purus sit amet{" "}
                  </p>
                  <div>
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-sm  md:row-span-2 md:col-span-2 rounded-lg border border-gray-800 overflow-hidden hover:shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
              <img class="w-full" src={mask1} alt="mask__group" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-dark flex justify-between">
                  <p>
                    Private One to One Communication Cras mattis consectetur
                    purus sit amet{" "}
                  </p>
                  <div>
                    <MdArrowOutward />
                  </div>
                </div>
              </div>
            </div>
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

export default CaseStudy;
