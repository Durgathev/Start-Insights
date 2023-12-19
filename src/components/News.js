import React, { useState } from "react";

import "./Style.css";
import maskg from "../../src/assets/images/Mask group.png";

export default function News() {
  return (
    <>
      <section className="relative bg-[#F6F6F6] px-16 py-28">
        <div className=" xs:container sm:conatiner lg:container  mx-auto py-5 ">
          <div className="flex xs: flex-col sm:flex-col lg:flex-row  justify-between">
            <div>
              <h3 className=" lnline text-white px-2 py-2 rounded-md text-3xl lg:text-3xl font-bold bg-[#0133DC]">
                News & Insights
              </h3>
            </div>
            <div className="pt-3 lg:p-0  "></div>
          </div>
          <div className="slider-container">
            <div className="slider">
              <div class="max-w-sm sli rounded-lg border border-gray-800 overflow-hidden shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
                <img class="w-full" src={maskg} alt="mask__group" />
                <div class="px-3 py-4">
                  <div className="flex justify-between mb-3">
                    <h6 className="inline text-base bg-blue-300 px-5 py-1 text-blue-700 rounded-md">
                      Funding
                    </h6>
                    <h6 className="inline text-base text-blue-300 px-10 py-1">
                      June 26, 2023
                    </h6>
                  </div>
                  <div class="font-bold text-xl mb-2 text-dark ">
                    <p>
                      Private One to One Communication Cras mattis mattis mattis
                      diwere consectetur purus sit amet
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-sm sli  rounded-lg border border-gray-800 overflow-hidden shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
                <img class="w-full" src={maskg} alt="mask__group" />
                <div class="px-3 py-4">
                  <div className="flex justify-between mb-3">
                    <h6 className="inline text-base bg-blue-300 px-5 py-1 text-blue-700 rounded-md">
                      Funding
                    </h6>
                    <h6 className="inline text-base text-blue-300 px-10 py-1">
                      June 26, 2023
                    </h6>
                  </div>
                  <div class="font-bold text-xl mb-2 text-dark ">
                    <p>
                      Private One to One Communication Cras mattis mattis mattis
                      diwere consectetur purus sit amet
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-sm sli  rounded-lg border border-gray-800 overflow-hidden shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
                <img class="w-full" src={maskg} alt="mask__group" />
                <div class="px-3 py-4">
                  <div className="flex justify-between mb-3">
                    <h6 className="inline text-base bg-blue-300 px-5 py-1 text-blue-700 rounded-md">
                      Funding
                    </h6>
                    <h6 className="inline text-base text-blue-300 px-10 py-1">
                      June 26, 2023
                    </h6>
                  </div>
                  <div class="font-bold text-xl mb-2 text-dark ">
                    <p>
                      Private One to One Communication Cras mattis mattis mattis
                      diwere consectetur purus sit amet
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-sm sli rounded-lg border border-gray-800 overflow-hidden shadow-[7px_7px_0px_0px_#000000CC] cursor-pointer">
                <img class="w-full" src={maskg} alt="mask__group" />
                <div class="px-3 py-4">
                  <div className="flex justify-between mb-3">
                    <h6 className="inline text-base bg-blue-300 px-5 py-1 text-blue-700 rounded-md">
                      Funding
                    </h6>
                    <h6 className="inline text-base text-blue-300 px-10 py-1">
                      June 26, 2023
                    </h6>
                  </div>
                  <div class="font-bold text-xl mb-2 text-dark ">
                    <p>
                      Private One to One Communication Cras mattis mattis mattis
                      diwere consectetur purus sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
