import React from "react";

const gradientStyles = [
  "bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500",
  "bg-gradient-to-br from-sky-500 via-pink-500 to-red-500",
  "bg-gradient-to-br from-lime-400 via-cyan-400 to-sky-400",
];

const AnimationCard = () => {
  return (
    <div className="flex justify-center items-center flex-wrap py-10">
      {gradientStyles.map((gradient, index) => (
        <div
          key={index}
          className={`relative w-[320px] h-[400px] flex justify-center items-center m-8 transition-all duration-500 group `}
        >
          <div
            className={`absolute top-0 left-[50px] w-1/2 h-full rounded-lg skew-x-[15deg] ${gradient} transition-all duration-500 group-hover:skew-x-0 group-hover:left-5 group-hover:w-[calc(100%-90px)] blur-[10px]` }
            style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}
         ></div>

          <span className="absolute inset-0 z-10 pointer-events-none z-20">
            <span className="absolute top-0 left-0 w-0 h-0 rounded-lg bg-white/10 backdrop-blur-md opacity-0 transition-all duration-100 group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100 animate-float z-20" />
            <span className="absolute bottom-0 right-0 w-full h-full rounded-lg bg-white/10 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100 animate-float delay-[0.5s] z-20" />
          </span>

          <div className="relative p-5 px-10 bg-white/5 backdrop-blur-md shadow-md rounded-lg z-10 text-white transition-all duration-500 group-hover:-translate-x-6 group-hover:py-16">
            <h2 className="font-size-xl font-secondary font-bold mb-3 text-[var(--bg-color-xi)]">Card {index + 1}</h2>
            <p className="font-size-xs font-primary leading-relaxed mb-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-bold text-black bg-white px-4 py-2 rounded hover:bg-[var(--bg-color-i)] hover:shadow-md transition"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimationCard;
