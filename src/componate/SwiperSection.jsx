import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://source.unsplash.com/50x50/?portrait?4",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://source.unsplash.com/50x50/?portrait?4",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://source.unsplash.com/50x50/?portrait?4",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    name: "Distinctio Animi",
    role: "Aliquam illum",
    img: "https://source.unsplash.com/50x50/?portrait?4",
  },
];

export default function SwiperSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full "
    >
      <div className="w-full">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-size-3xl text-center font-tertiary">
            What our customers are saying about us
          </h1>
        </div>

        <Swiper
        slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1599: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="flex flex-col max-w-sm mx-auto border border-[var(--bg-color-xxi)] rounded-xl overflow-hidden bg-white shadow-md">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[var(--bg-color-xxi)]">
                  <p className="relative py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-[var(--bg-color-xi)]"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    <span className="font-size-sm">{item.quote}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-[var(--bg-color-xi)]"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
                  <div className="w-16 h-16 -mt-16 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <p className=" font-semibold leading-tight font-size-md">
                    {item.name}
                  </p>
                  <p className=" uppercase font-size-xs ">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
