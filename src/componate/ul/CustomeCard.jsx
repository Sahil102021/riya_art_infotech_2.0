import React from "react";
import { motion } from "framer-motion";

const CustomeCard = ({ img, title, description, price, offPrice, off }) => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <motion.div
        className="w-full h-full transform overflow-hidden rounded-lg bg-white shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}
      >
        <img
          className="h-72 w-full object-cover object-center"
          src={img}
          alt="Product"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-primary font-semibold text-gray-900 ">
            {title}
          </h2>
          <p className="mb-2 font-size-xxs text-gray-700 font-primary ">
            {description}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 ">
              {price}
            </p>
            <p className="text-base font-medium text-gray-500 line-through ">
              {offPrice}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              {off}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomeCard;
