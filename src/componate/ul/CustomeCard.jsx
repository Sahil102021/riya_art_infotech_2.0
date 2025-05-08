import React from "react";
import { motion } from "framer-motion";

const CustomeCard = () => {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className="mx-auto w-full transform overflow-hidden rounded-lg bg-white shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          className="h-72 w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Product"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Product Name
          </h2>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            Product description goes here.
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              $20.00
            </p>
            <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
              $25.00
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomeCard;
