import React from "react";
import "../App.css";

const ProductItem = (props) => {
  return (
    <>
      <div className=" border rounded-lg p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className=" text-2xl lg:text-3xl font-bold">{props.title}</h3>
          </div>

          <div
            className={
              props.live === "Live"
                ? "bg-[#03F1A9] px-2 rounded-sm"
                : "bg-[#FFF500CC] px-2 rounded-sm"
            }
          >
            {props.live === "Live" ? <span className="live"></span> : null}
            <span className="px-2">{props.live}</span>
          </div>
        </div>
        <p className="py-4 text-light">{props.para}</p>

        <div className="imgae-comtainer mb-3">
          <img src={props.image} alt="Pitch Craft" className=" " />
        </div>
      </div>
    </>
  );
};

export default ProductItem;
