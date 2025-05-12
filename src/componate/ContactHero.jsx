import React from "react";
import { b_star, ContactHero1, ContactHeroImg, Hero12 ,  } from "../assets/images";
import Button from "./ul/Button/Button";


const ContactHero = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-0 sm:p-6 sm:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-[700px]">
            <img
              src={ContactHeroImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
            <h1 className="font-size-5xl font-bold leading-none font-secondary">
              New Web And App
              <span className="text-[var(--bg-color-xi)]">
                {" "}
                Develom mate{" "}
              </span>{" "}
              Next Genration{" "}
            </h1>
            <p className=" my-4 sm:my-6 2xl:my-12 font-size-lg font-primary">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden font-primary" />
              turpis pulvinar, est scelerisque ligula sem
            </p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div className="rotating-box ">
                <img src={b_star} width="100%" alt="" />
              </div>
              <Button normal variant={"simple-blue"} name={"Suspendisse"} link={"/"} />
              <Button normal variant={"simple-border"} name={"Malesuada"} link={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
