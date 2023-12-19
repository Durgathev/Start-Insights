import React from "react";
import pc from "../assets/images/Group 601.svg";
import sx from "../assets/images/Group 602.svg";
import ax from "../assets/images/Group 603.svg";
import pitch from "../assets/images/pitch-do.svg";
import svgbg from "../assets/images/Group 637.png";
import svgr from "../assets/images/Group 636.png";
import ProductItem from "./ProductItem";

const Product = () => {
  const products = [
    {
      title: "Pitch Craft",
      live: "Live",
      para: "<b>Create your pitch deck in an instant using our pre designedtemplates.</b> Working on an investment-ready pitch deck is no more a big task with our easy-to-use templates.(Coming soon)",
      image: pc,
    },
    {
      title: "Start X",
      live: "Live",
      para: "<b> Start X is an <b>90 days impulsive scale-up program</b> where the founders are groomed via hybrid mode sessions with a <b>360-degree approach</b> to creating and building a prominent company.",
      image: ax,
    },
    {
      title: "Pitch Do",
      live: "under Development",
      para: "<b>Create your pitch deck in an instant using our pre designedtemplates.</b> Working on an investment-ready pitch deck is no more a big task with our easy-to-use templates.(Coming soon)",
      image: pitch,
    },
    {
      title: "Angel X",
      live: "Under Development",
      para: "<b> Start X is an <b>90 days impulsive scale-up program</b> where the founders are groomed via hybrid mode sessions with a <b>360-degree approach</b> to creating and building a prominent company.",
      image: sx,
    },
  ];
  return (
    <>
      <section className="relative bg-gradient-to-t from-[#0166FF] to-[#0B2373] px-8 py-10 overflow-hidden">
        <div className=" sm:conatiner lg:container lg:px-28 mx-auto py-4 ">
          <div className="text-container text-center">
            <h2 className="block  lg:inline text-xl md:text-2xl p-2 bg-[#00FFD1] lg:text-3xl font-bold rounded-md">
              Early-stage fundraising is hard.
            </h2>
            <h3 className="text-white text-2xl md:text-2xl lg:text-3xl py-5 font-semibold">
              Our products makes it easy for you.
            </h3>
          </div>

          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 pt-7 ">
            {products.map((prod) => {
              return (
                <ProductItem
                  title={prod.title}
                  live={prod.live}
                  para={prod.para}
                  image={prod.image}
                />
              );
            })}
          </div>
        </div>

        <img
          src={svgbg}
          className="hidden lg:block lg:absolute lg:top-0 lg:bottom-0 lg:left-20 lg:min-h-min"
          alt="group"
        />
        <img
          src={svgr}
          className="hidden lg:block lg:absolute lg:top-0 lg:bottom-0 lg:right-20 lg:min-h-min"
          alt="group"
        />
      </section>
    </>
  );
};

export default Product;
