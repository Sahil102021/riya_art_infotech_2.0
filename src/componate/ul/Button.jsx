import clsx from "clsx";
import React from "react";

const Button = ({ variant, link, name, id, type }) => {
  return (
    <div>
      <button type={type} id={id}>
        <div
          className={clsx({
            ["px-8 py-3 text-lg rounded bg-violet-600 text-white dark:bg-violet-600 dark:text-gray-50 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-black focus:-translate-y-1 focus:bg-black focus:outline-none focus:ring-4 focus:ring-violet-400"]:
              variant === "simple-blue",
            ["px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-violet-600 hover:text-white focus:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400"]:
              variant === "simple-border",
            ["px-8 py-3 text-lg font-semibold bg-[var(--bg-color-i)] border rounded dark:border-gray-800 transition-transform transition-colors duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-[var(--bg-color-iii)]  focus:-translate-y-1 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400"]:
              variant === "simple-border-i",
          })}
        >
          <a href={link}>{name}</a>
        </div>
      </button>
    </div>
  );
};

export default Button;
