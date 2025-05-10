import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import "./CustomeCard.css";
const CustomeCard = ({ img, title, description, price, offPrice, off }) => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <motion.div
        className="group relative w-full h-full overflow-hidden rounded-xl bg-white shadow-md transition-all min-h-[550px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <div className="relative overflow-hidden">
          <img
            className="h-80
            2 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            src={img}
            alt={title}
          />
          <div className="shine-on-hover pointer-events-none"></div>
        </div>

        <div className="p-4 flex flex-col justify-between h-full max-h-58">
          <div>
            <h2 className="mb-2 text-lg font-primary font-semibold text-gray-900 line-clamp-2"  >
              {title}
            </h2>
            <p className=" text-sm text-gray-700 font-primary line-clamp-4">
              {description}
            </p>
          </div>
          <div className="">
            <Button
              normal
              variant={"top-slide"}
              name={`$ ${price}`}
            />

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomeCard;
