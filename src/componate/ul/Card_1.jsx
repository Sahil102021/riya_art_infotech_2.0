import React from "react";
import { svgIcon } from "../../conts/svgIcon";

const Card_1 = ({ quote, img, imgname, name, role }) => {
  return (
    <div>
      <div className="flex flex-col max-w-sm mx-auto border border-[var(--bg-color-xxi)] rounded-xl overflow-hidden bg-white shadow-md">
        <div className="px-4 pb-10 pt-3 lg:pt-4 rounded-t-lg  md:px-6 bg-[var(--bg-color-xxi)]">
          <p className="relative py-1 text-lg italic text-center text-gray-800">
            <div className="w-8 h-8 text-[var(--bg-color-xi)]">
              {svgIcon.doubleQuatLeft}
            </div>
            <span className="font-size-md">{quote}</span>
            <div className="w-8 h-8 text-[var(--bg-color-xi)]">
              {svgIcon.doubleQuatRight}
            </div>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg">
          <div className="w-16 h-16 -mt-16 rounded-full overflow-hidden">
            <img
              src={img}
              alt={imgname}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold leading-tight font-size-md">{name}</p>
          <p className="uppercase font-size-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card_1;
