import React from "react";
import canada from "../assets/images/canada.png";
import { MdArrowOutward } from "react-icons/md";
const InsightItem = () => {
  return (
    <>
      <div
        className="border-2 rounded-2xl border-black custombg "
        style={{
          backgroundImage: `url(${canada})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        <div className="text-container px-7 pt-72  custombgdiv ">
          <div className="text-white flex justify-between items-center">
            <h5 className="xs: text-3xl md:text-3xl lg:text-4xl font-semibold">
              Private One to One <br /> communication
            </h5>
            <span className=" text-3xl custombgicon">
              <MdArrowOutward />
            </span>
          </div>
          <p className="text-white text-justify py-3">
            Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
            nulla non metus auctor fringilla.
          </p>
        </div>
      </div>
    </>
  );
};

export default InsightItem;
