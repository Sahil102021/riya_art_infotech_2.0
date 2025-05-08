import React from "react";
import { svgIcon } from "../conts/svgIcon";
import { motion } from "framer-motion";

const features = [
  "Mobile and web development",
  "Software development",
  "UI/UX design",
  "Responsive design",
  "E-commerce solutions",
  "Content management systems",
  "API development",
  "Database management",
  "Seo optimization",
];

const Services = () => {
  return (
    <div className="w-full relative overflow-hidden ">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="font-size-3xl font-secondary font-extrabold mb-2 sm:mb-12 tracking-tight text-[var(--bg-primary)]">
            We Offer In Our Service :
        </h2>

        <motion.ul
          className="grid sm:gap-2 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 p-1 hover:scale-[1.03]  transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="">{svgIcon.trueIcon}</span>
              <span className="font-size-sm text-black font-primary">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Services;
