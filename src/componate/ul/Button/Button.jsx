import clsx from "clsx";
import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
const Button = ({ variant, link, name, id, type, normal , handleClick }) => {
  return (
    <button type={type} id={id} className="flex grow-1" onClick={handleClick}>
      {normal ? (
        <NavLink to={link} className={"w-full h-full"}>
          <div
            className={clsx( "px-4 py-1.5 xs:py-2 ms:px-8 ms:py-3 w-full font-size-sm font-primary  rounded-md overflow-hidden cursor-pointer" , {
              [" bg-[var(--bg-color-xi)] text-white  ransition-transform duration-300 ease-in-out hover:shadow-md  hover:-translate-y-1 hover:bg-black focus:-translate-y-1 focus:bg-black focus:outline-none  focus:shadow-md "]:
                variant === "simple-blue",
              [" border  transition-transform  duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-color-xi)] hover:text-white focus:-translate-y-1 focus:shadow-md   "]:
                variant === "simple-border",
              [" bg-[var(--bg-color-i)] border  dark:border-gray-800 transition-transform  duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-color-iii)]  focus:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400"]:
                variant === "simple-border-i",
              ["button two bg-[var(--bg-color-xi)] text-white  ransition-transform duration-300 ease-in-out  "]:
                variant === "simple-shine-blue",
              ["relative inline-block  tracking-wide text-[var(--bg-color-xi)] bg-white cursor-pointer transition-all duration-500 border-1 border-[var(--bg-color-xi)] rounded-[10px] shadow-[inset_0_0_0_0_#725AC1] hover:text-white hover:shadow-[inset_0_-100px_0_0_#725AC1] active:scale-90"]:
                variant === "top-slide",
            })}
          >
            <span>{name}</span>
          </div>
        </NavLink>
      ) : (
        ""
      )}
      
    </button>
  );
};

export default Button;
