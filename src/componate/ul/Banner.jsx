import React from "react";
import Button from "./Button/Button.jsx";
import { about } from "../../assets/images/index.js";
const Banner = () => {
  return (
      <div className="w-full">
        <div className="w-full md:grid md:grid-cols-2 md:items-center ">
          <div className="max-w-prose text-left">
            <h1 className="font-size-4xl font-primary font-bold text-gray-900 sm:text-5xl">
              Understand user flow and
              <strong className="text-indigo-600"> increase </strong>
              conversions
            </h1>

            <p className="mt-4 font-primary font-size-sm text-gray-700 sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Button normal variant={"simple-blue"} name={"Let's talk"} />
              
            </div>
          </div>

          <div className="h-[275px] xl:h-[450px] overflow-hidden flex justify-center items-center">
            <img src={about} width="100%" height="100%" className=" object-fite " alt="about page " />
          </div>
        </div>
      </div>

  );
};

export default Banner;
