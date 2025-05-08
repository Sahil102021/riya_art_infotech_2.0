import React from "react";
import { motion } from "motion/react";

const techLogos = [
  {
    name: "mySqul",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-mysql-144_uyzutz.png",
  },
  {
    name: "MongoDB",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-mongodb-144_begfuo.png",
  },
  {
    name: "Angular",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-angular-144_ne2gfu.png",
  },
  {
    name: "javaScript",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-js-144_gzf7ya.png",
  },
  {
    name: "css3",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-css-100_g3jlda.png",
  },
  {
    name: "html5",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693024/icons8-html-100_onrsjv.png",
  },
  {
    name: "vue",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693025/icons8-vue-js-144_yv9dlx.png",
  },
  {
    name: "paython",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693025/icons8-python-144_cdnrvc.png",
  },
  {
    name: "React js",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693025/download_nfqqyh.png",
  },
  {
    name: "node js",
    icon: "https://res.cloudinary.com/dttftmu4m/image/upload/v1746693025/icons8-node-js-144_wjyaea.png",
  },
];

const Stats_2 = () => {
  return (
    <section className="w-full">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800  mb-12">
          Use Programing language
        </h2>
        <div className="flex flex-wrap justify-center gap-10 lg:justify-between">
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="relative group w-20 h-20 flex items-center justify-center rounded-xl shadow-lg hover:bg-[var(--bg-color-i)]  hover:scale-110 focus:scale-110 transition-all duration-300 cursor-pointer border border-transparent hover:border-[var(--bg-color-iii)] "
              tabIndex="0"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-6 group-focus:rotate-6"
              />
              <span className="absolute bottom-[-1.5rem] opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-sm text-gray-700 dark:text-gray-300 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats_2;
