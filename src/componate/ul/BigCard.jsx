import React, { useState } from "react";
import { motion } from "framer-motion";

const BigCard = () => {
  const [posts] = useState([
    {
      id: 1,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 21, 2021",
      desc: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
      hiddenOnSmall: false,
    },
    {
      id: 2,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 22, 2021",
      desc: "Mei ex aliquid eleifend forensibus...",
      hiddenOnSmall: false,
    },
    {
      id: 3,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 23, 2021",
      desc: "Mei ex aliquid eleifend forensibus...",
      hiddenOnSmall: false,
    },
    {
      id: 4,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 24, 2021",
      desc: "Mei ex aliquid eleifend forensibus...",
      hiddenOnSmall: true,
    },
    {
      id: 5,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 25, 2021",
      desc: "Mei ex aliquid eleifend forensibus...",
      hiddenOnSmall: true,
    },
    {
      id: 6,
      img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
      title: "In usu laoreet repudiare legendos",
      date: "January 26, 2021",
      desc: "Mei ex aliquid eleifend forensibus...",
      hiddenOnSmall: true,
    },
  ]);
  return (
    <section className="w-full">
      <div className=" sm:p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-lg overflow-hidden "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", }}
        >
          <img
            src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-2 sm:p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              rel="noopener noreferrer"
              href="#"
              className={`max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-100 rounded-lg overflow-hidden ${
                post.hiddenOnSmall ? "hidden sm:block" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", }}
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={post.img}
                alt={post.title}
              />
              <div className="p-2 sm:p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {post.title}
                </h3>
                <span className="text-xs dark:text-gray-600">{post.date}</span>
                <p>{post.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="flex justify-center">
        
        </div>
      </div>
    </section>
  );
};

export default BigCard;
