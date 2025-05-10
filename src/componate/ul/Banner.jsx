import React from "react";
import Button from "./Button/Button.jsx";
;

const Banner = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-[var(--bg-color-xi)] rounded-lg">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center font-size-3xl text-white font-secondary tracking-tighter font-bold tracking-wide ">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
           < normal variant={"simple-border-i"} link={"/"} name={"New Website"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
