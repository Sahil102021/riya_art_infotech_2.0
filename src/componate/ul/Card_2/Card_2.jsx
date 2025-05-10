import React from "react";
import "./Card_2.css";

const Card_2 = ({ title, image, description, highlight }) => {
  return (
    <div className="w-full flex mx-auto">
      <div
        className="card_2 group  relative aspect-[9/12] w-[90vw] md:w-[40vw] rounded-md shadow-[rgba(255,255,255,0.3)_0_5vw_6vw_-8vw,_rgba(0,0,0,0.8)_0_4vw_5vw_-3vw] overflow-hidden flex flex-col transition-shadow duration-1000 ease-[cubic-bezier(0.66,0.08,0.19,0.97)] focus:shadow-[white_0_5vw_6vw_-9vw,theme(colors.white)_0_5.5vw_5vw_-7.5vw,rgba(50,50,80,0.5)_0px_4vw_8vw_-2vw,rgba(0,0,0,0.8)_0px_4vw_5vw_-3vw]"
        style={{ "--highlight": highlight }}
        tabIndex="0"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-[800ms] ease-[cubic-bezier(0.66,0.08,0.19,0.97)]"
        />
        <div className="absolute inset-[20px] bottom-0 z-20 text-white">
          <h2 className="font-primary font-size-xl font-bold mb-1">{title}</h2>
          <p className="font-size-sm font-primary leading-snug">
            {description}
          </p>
        </div>
        <div className="before absolute top-0 left-0 w-full h-1/2 bg-black/50 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.66,0.08,0.19,0.97)] z-10"></div>
        <div className="after absolute top-1/2 left-0 w-full h-1/2 bg-black/50 origin-left group-hover:scale-x-100 delay-[150ms] transition-transform  duration-500 ease-[cubic-bezier(0.66,0.08,0.19,0.97)] z-10"></div>
      </div>
    </div>
  );
};

export default Card_2;
