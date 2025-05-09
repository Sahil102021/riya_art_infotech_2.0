import clsx from "clsx";
import React from "react";

const Button = ({ variant, link, name, id, type }) => {
  return (
 
      <button type={type} id={id} className="flex grow-1">
        <div
          className={clsx({
            ["px-4 py-2 ms:px-8 ms:py-3 w-full text-lg font-semibold rounded bg-[var(--bg-color-xi)] text-white  ransition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-black focus:-translate-y-1 focus:bg-black focus:outline-none focus:ring-4"]:
              variant === "simple-blue",
            ["px-4 py-2 ms:px-8 ms:py-3 w-full text-lg font-semibold border rounded transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-color-xi)] hover:text-white focus:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-2 "]:
              variant === "simple-border",
            ["px-4 py-2 ms:px-8 ms:py-3 w-full text-lg font-semibold bg-[var(--bg-color-i)] border rounded dark:border-gray-800 transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-color-iii)]  focus:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400"]:
              variant === "simple-border-i",
          })}
        >
          <a href={link}>{name}</a>
        </div>
      </button>
  );
};

export default Button;
