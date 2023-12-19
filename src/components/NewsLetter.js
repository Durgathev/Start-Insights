import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section className="bg-white xs:px-10 xs: py-10 md:px-16 md:py-16">
        <div className=" xs:container sm:conatiner lg:container  mx-auto py-5 ">
          <div className="text-container text-center">
            <h2 className="xs: text-3xl md:text-3xl font-bold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-thin xs: w-[90%] md:w-[70%] text-center mx-auto py-4 text-gray-600">
              Drive your startup's growth now through our data-driven insights,
              case studies of established founders, market research data and
              everything about startups knocking at your email door!
            </p>
            <div className="text-center mx-auto m-3">
              <input
                type="text"
                className="peer m-3 px-14 py-3 outline outline-1  rounded-md outline-blue-400"
                placeholder="Your Email Address"
              />

              <input
                type="submit"
                className="px-14 py-3 bg-blue-600 text-white rounded-md"
                value="Subscribe"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
