import React from "react";

import "../App.css";
import InsightItem from "./InsightItem";

const WhyInsights = () => {
  return (
    <>
      <section className="relative bg-[#F6F6F6] px-8 py-28">
        <div className=" sm:conatiner lg:container  mx-auto py-4 ">
          <div className="text-center">
            <h2 className="block  lg:inline text-2xl md:text-3xl  lg:text-4xl font-bold ">
              Why{" "}
              <span className="bg-[#00FFD1] text-[#0133DC] p-2 rounded-md ">
                Start Insights?
              </span>
            </h2>
            <h3 className="text-black text-sm  md:text-sm w-[70%] lg:w-[30%] mx-auto lg:text-md py-5 font-light">
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla.
            </h3>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-col-1 lg:grid-cols-2 gap-4 px-28 py-7">
            <InsightItem />
            <InsightItem />
            <InsightItem />
            <InsightItem />
          </div>
        </div>

        <svg
          className="absolute bottom-5"
          width="137"
          height="206"
          viewBox="0 0 137 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M101 204C91.8 181.6 75.1667 174 68 173C89.6 166.6 99 148.333 101 140C105.4 158.4 125.167 169.667 134.5 173C114.9 176.6 104 195.167 101 204Z"
            stroke="#0133DC"
          />
          <path
            d="M34 65C24.8 42.6 8.16667 35 1 34C22.6 27.6 32 9.33333 34 1C38.4 19.4 58.1667 30.6667 67.5 34C47.9 37.6 37 56.1667 34 65Z"
            stroke="#0133DC"
          />
        </svg>
        <svg
          className="absolute top-10 right-60"
          width="182"
          height="175"
          viewBox="0 0 182 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 65C24.8 42.6 8.16667 35 1 34C22.6 27.6 32 9.33333 34 1C38.4 19.4 58.1667 30.6667 67.5 34C47.9 37.6 37 56.1667 34 65Z"
            stroke="#0133DC"
          />
          <path
            d="M146 173C136.8 150.6 120.167 143 113 142C134.6 135.6 144 117.333 146 109C150.4 127.4 170.167 138.667 179.5 142C159.9 145.6 149 164.167 146 173Z"
            stroke="#0133DC"
          />
        </svg>
      </section>
    </>
  );
};

export default WhyInsights;
