import React from "react";
import imgfooter from "../assets/images/SI_Logo_footer.svg";
import email from "../assets/images/fi-rr-envelope.png";
import location from "../assets/images/fi-rr-marker.png";
import fb from "../assets/images/Combined-Shape.png";
import twitter from "../assets/images/Combined-Shape-path.png";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/Instagram.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-[#212237] xs:px-10 xs: py-10 md:px-16 md:py-12">
        <div className=" xs:container sm:conatiner lg:container  mx-auto  ">
          <div className="flex xs: px-10 xs: py-10 xs: flex-col  lg:flex-row justify-between">
            <div className="imge-container">
              <img src={imgfooter} alt="logo" className="w-full" />
            </div>
            <div className="text-container">
              <h1 className="xs: text-3xl md:text-4xl lg:text-4xl font-bold text-white xs: pt-4">
                A platform for Founders to build
              </h1>
            </div>
          </div>
          <div className="grid xs: grid-cols-1 md:grid-cols-2 xs: px-10 lg:grid-cols-5 xs: gap-10 md:gap-4 lg:gap-3 py-8">
            <div className="">
              <address className="flex gap-2">
                <div>
                  <img src={location} alt="location__icon" />
                </div>
                <div>
                  <p className="text-white">
                    Sona Incubation Foundation, Salem, Tamil Nadu - 636005.
                  </p>
                </div>
              </address>

              <address className="flex gap-2">
                <div>
                  <img src={email} alt="email__icon" />
                </div>
                <div>
                  <a
                    href="mailto:scaleup@startinsights.co"
                    className="text-white"
                  >
                    scaleup@startinsights.co
                  </a>
                </div>
              </address>
            </div>

            <div>
              <p>
                {" "}
                <NavLink to="/PitchCraft" className="text-white">
                  Pitch Craft
                </NavLink>
              </p>
              <p>
                {" "}
                <NavLink to="/StartX" className="text-white">
                  Start X
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Our Case Studies
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Why Start Insights?
                </NavLink>
              </p>
            </div>
            <div>
              <p>
                {" "}
                <NavLink to="/About" className="text-white">
                  About Us
                </NavLink>
              </p>
              <p>
                {" "}
                <NavLink to="/StartX" className="text-white">
                  Teams
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Careers
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Blog
                </NavLink>
              </p>
            </div>
            <div>
              <p>
                {" "}
                <NavLink to="/PitchCraft" className="text-white">
                  Marketing Kit
                </NavLink>
              </p>
              <p>
                {" "}
                <NavLink to="/StartX" className="text-white">
                  Terms & Conditions
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Privacy Policy
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Contact Us
                </NavLink>
              </p>
            </div>

            <div>
              <h6 className="text-white">Follow Me</h6>
              <div className="flex py-2">
                <Link className="px-2">
                  <img src={fb} alt="facebook" />
                </Link>
                <Link className="px-2">
                  <img src={twitter} alt="twitter" />
                </Link>
                <Link className="px-2">
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link className="px-2">
                  <img src={linkedin} alt="linked in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
