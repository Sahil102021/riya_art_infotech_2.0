import React from "react";
import "./WavyAnimation.css";

const WavyAnimation = () => {
  return (
    <div className="w-full h-72 flex justify-center items-end overflow-hidden shadow-inner-top bg-white ">
      <div className="part">
        <div className="wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="content">
          <h2>Wavy Animation</h2>
        </div>
      </div>
    </div>
  );
};

export default WavyAnimation;
