import React from "react";
import bg from "../assets/images/BGbakground.svg";
import hero from "../assets/images/home.png";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <section
        className="px-14 py-4 min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sm:container lg:container mx-auto pt-4 ">
          <div
            className=" bg-gradient-to-r my-5 from-[#0133DC] to-[#5994FF] border border-[#5994FF] text-white px-4 py-3 rounded-md relative"
            role="alert"
          >
            <div className=" flex  flex:col lg:flex-row justify-between">
              <div>
                <p className="block sm:inline sm:text-sm">
                  💰 Start Insights Secures USD 1 million in Pre-Seed round
                </p>
              </div>

              <div className="">
                <span className="hidden md:inline border-b-2 border-b-white font-thin hover:opacity-90 cursor-pointer mx-10">
                  Read More
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-white hover:opacity-80"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-center items-center py-7">
            <div className="lg:w-1/2 w-full">
              <h1 className=" text-center lg:text-start text-5xl pt-4 lg:p-0 lg:text-5xl font-semibold">
                A platform for <br />{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FF52F8] to-[#0133DC]">
                  Founders
                </span>{" "}
                to build a <br />
                <span className=" text-[#0133DC]">Prominent Venture</span>
              </h1>

              <p className="text-xl font-normal md:text-justify py-5">
                To <strong>unleash your blindfolds </strong>and{" "}
                <strong>early-stage chaos</strong> about venture building and{" "}
                <strong>gear up your scale-up game.</strong>
              </p>

              <div className="py-5">
                <button className="bg-black text-white rounded-md px-3 py-2 hover:opacity-75 ">
                  <div className="flex justify-evenly items-center gap-6">
                    <span className="block">Get Started</span>
                    <span className="block">
                      <FaAngleRight />
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-full">
              <img src={hero} className="w-[100%]" alt="__Hero__Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
