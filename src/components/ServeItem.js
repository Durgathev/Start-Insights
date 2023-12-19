import React from "react";
import { CiDollar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ServeItem = () => {
  return (
    <>
      <button
        className=" text-black border border-black outline-current rounded-md px-16 py-5 shadow-[7px_7px_0px_0px_#000000CC]
       hover:bg-gradient-to-r from-[#7BFFE7] to-[#FF75F95C]"
      >
        <div className="flex justify-center gap-1 items-center font-semibold">
          <span className="block font-semibold">
            <svg
              width="32"
              height="32"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="2"
                width="32"
                height="32"
                rx="15"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M20.9023 8.5V12.0039H19.0977V8.5H20.9023ZM20.6797 27.6367V30.7773H18.8867V27.6367H20.6797ZM22.4492 23.8516C22.4492 23.3984 22.3555 23.0039 22.168 22.668C21.9883 22.3242 21.6914 22.0156 21.2773 21.7422C20.8633 21.4609 20.3086 21.1992 19.6133 20.957C18.6133 20.6055 17.7383 20.2109 16.9883 19.7734C16.2461 19.3281 15.668 18.7812 15.2539 18.1328C14.8477 17.4766 14.6445 16.6602 14.6445 15.6836C14.6445 14.7227 14.8633 13.8906 15.3008 13.1875C15.7461 12.4844 16.3633 11.9414 17.1523 11.5586C17.9414 11.1758 18.8633 10.9844 19.918 10.9844C20.7305 10.9844 21.4609 11.1055 22.1094 11.3477C22.7656 11.5898 23.3242 11.9453 23.7852 12.4141C24.2461 12.8828 24.5977 13.4609 24.8398 14.1484C25.0898 14.8281 25.2148 15.6094 25.2148 16.4922H22.4023C22.4023 15.9922 22.3438 15.5469 22.2266 15.1562C22.1172 14.7578 21.9531 14.4219 21.7344 14.1484C21.5156 13.8672 21.25 13.6523 20.9375 13.5039C20.6328 13.3555 20.2852 13.2812 19.8945 13.2812C19.3398 13.2812 18.8828 13.3867 18.5234 13.5977C18.1641 13.8008 17.8984 14.082 17.7266 14.4414C17.5625 14.8008 17.4805 15.2109 17.4805 15.6719C17.4805 16.1172 17.5664 16.5078 17.7383 16.8438C17.9102 17.1797 18.2031 17.4844 18.6172 17.7578C19.0391 18.0234 19.6172 18.293 20.3516 18.5664C21.3594 18.9258 22.2305 19.3281 22.9648 19.7734C23.707 20.2109 24.2773 20.7539 24.6758 21.4023C25.082 22.043 25.2852 22.8516 25.2852 23.8281C25.2852 24.8359 25.0508 25.6914 24.582 26.3945C24.1211 27.0977 23.4727 27.6328 22.6367 28C21.8086 28.3594 20.8438 28.5391 19.7422 28.5391C19.0469 28.5391 18.3555 28.4492 17.668 28.2695C16.9883 28.082 16.3711 27.7773 15.8164 27.3555C15.2617 26.9336 14.8203 26.375 14.4922 25.6797C14.1641 24.9766 14 24.1172 14 23.1016H16.8359C16.8359 23.7109 16.918 24.2188 17.082 24.625C17.2461 25.0312 17.4688 25.3516 17.75 25.5859C18.0312 25.8203 18.3438 25.9883 18.6875 26.0898C19.0391 26.1914 19.3906 26.2422 19.7422 26.2422C20.3281 26.2422 20.8203 26.1445 21.2188 25.9492C21.625 25.7461 21.9297 25.4648 22.1328 25.1055C22.3438 24.7383 22.4492 24.3203 22.4492 23.8516Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="block">Fintech</span>
        </div>
      </button>
    </>
  );
};

export default ServeItem;
