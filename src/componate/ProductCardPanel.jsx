import React from "react";
import HeroBannerCard from "./ul/HeroBannerCard";
import { motion } from "framer-motion";
import Button from "./ul/Button/Button";

const data = [
  {
    img: 'https://img.freepik.com/free-vector/neon-landing-page-with-smartphone_52683-28231.jpg?semt=ais_hybrid&w=740',
    title: 'Harvest Vase',
    develop: 'android ',
    description: 'A reinterpretation of peeled fruits and vegetables as functional objects.',
  },
  {
    img: 'https://img.freepik.com/free-vector/neon-landing-page-with-smartphone_52683-28231.jpg?semt=ais_hybrid&w=740',
    title: 'Modern Lamp',
    develop: 'web develomate',
    description: 'Elegant lighting with a touch of modern minimalism.',
  },
  {
    img: 'https://img.freepik.com/free-vector/neon-landing-page-with-smartphone_52683-28231.jpg?semt=ais_hybrid&w=740',
    title: 'Wooden Chair',
    develop: 'SaaS',
    description: 'Handcrafted wooden chair made for comfort and durability.',
  },
  {
    img: 'https://img.freepik.com/free-vector/neon-landing-page-with-smartphone_52683-28231.jpg?semt=ais_hybrid&w=740',
    title: 'Glass Pot',
    develop: 'ios',
    description: 'Translucent and chic, perfect for indoor greenery.',
  },
];


const ProductCardPanel = () => {
  return (
    <div className="w-full">
  {/* Title Section with Fade-In */}
  <motion.div
    className="text-center mb-3 md:mb-6 2xl:mb-12"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="font-size-3xl font-tertiary text-[var(--bg-primary)]">
      Discover Our Exclusive Collection
    </h2>
    <p className="font-size-xs text-gray-500">
      Handpicked items crafted with care and creativity — perfect for modern living
    </p>
  </motion.div>

  {/* Grid with Staggered Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    {data.map((el, i) => (
      <motion.div
        key={i}
        className="col-span-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
      >
        <HeroBannerCard
          img={el.img}
          title={el.title}
          description={el.description}
          develop={el.develop}
        />
      </motion.div>
    ))}
  </div>
  <div className="w-full mx-auto flex  max-w-40 pt-8">
    <Button normal variant={"simple-blue"} name={"See More ..."} />
  </div>
</div>

  );
};

export default ProductCardPanel;
