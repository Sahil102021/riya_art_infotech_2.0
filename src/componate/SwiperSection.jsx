import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import Card_2 from "./ul/Card_2/Card_2";
import Card_1 from "./ul/Card_1";


const getBreakpoints = (isTestimonial, isCard) => {
  if (isTestimonial) {
    return {
      480: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1599: { slidesPerView: 4 },
    };
  }

  if (isCard) {
    return {
      480: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1599: { slidesPerView: 6 },
    };
  }

  return {
    480: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
  };
};



export default function SwiperSection({ variant, data }) {
  const isTestimonial = variant === "testimonials";
  const isCard = variant === "cardData";
  const breakpoints = getBreakpoints(isTestimonial, isCard);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={breakpoints}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {/* Testimonials */}
          {isTestimonial &&
            data.map((item, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <Card_1
                  quote={item.quote}
                  role={item.role}
                  img={item.img}
                  name={item.name}
                />
              </SwiperSlide>
            ))}

          {/* Cards */}
          {isCard &&
            data.map((el, i) => (
              <SwiperSlide key={`card-${i}`}>
                <Card_2
                  title={el.title}
                  highlight={el.highlight}
                  image={el.image}
                  description={el.description}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
