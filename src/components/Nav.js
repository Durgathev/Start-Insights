import React from "react";
import logo from "../assets/images/SI_Logo.svg";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav className="flex justify-between items-center px-10 py-4 mx-auto bg-white">
          <div>
            <img src={logo} alt="Start__Insights__Logo" />
          </div>
          <div
            className={` md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              menu ? "top-[11%]" : "top-[-100%]"
            } md:w-auto w-full flex items-center px-5 `}
          >
            <ul className="flex md:flex-row flex-col  md:items-center md:gap-[2vw] gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-700 hover:text-blue-500 active"
                      : "font-normal text-black  hover:text-blue-500"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/PitchCraft"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-700 hover:text-blue-500 active"
                      : "font-normal text-black  hover:text-blue-500"
                  }
                >
                  Pitch Craft
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/StartX"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-700 hover:text-blue-500 active"
                      : "font-normal text-black  hover:text-blue-500"
                  }
                >
                  Start X
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-700 hover:text-blue-500 active"
                      : "font-normal text-black  hover:text-blue-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <button className=" hidden md:block text-[#276CEC] outline rounded-md    px-3 py-2 hover:bg-blue-400 hover:text-white hover:outline-white">
              Say Hello <span className="hidden md:inline">&#128075;</span>
            </button>
            <CiMenuBurger
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
