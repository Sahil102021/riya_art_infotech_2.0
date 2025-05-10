import React from 'react';
import Button from './Button/Button';

const HeroBannerCard = ({img ,title , description ,develop}) => {
  return (
    <div className="w-full">
  <div className="w-full flex flex-col 2xl:flex-row rounded-lg overflow-hidden " style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
    
    {/* Product Image */}
    <div className="w-full 2xl:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] 2xl:h-[420px]">
      <img
        src={img}
        alt="Harvest Vase"
        className="w-full h-full object-cover rounded-t-lg 2xl:rounded-t-none 2xl:rounded-l-lg"
      />
    </div>

    {/* Product Info */}
    <div className="w-full 2xl:w-1/2 bg-white flex flex-col justify-between rounded-b-lg 2xl:rounded-b-none 2xl:rounded-r-lg">
      
      {/* Text Content */}
      <div className="p-2 xs:p-4 sm:p-6 space-y-2">
        <h1 className="font-size-2xl text-black font-semibold font-primary">{title}</h1>
        <h2 className="font-size-xs uppercase tracking-[0.1em] text-gray-500 font-raleway">{develop}</h2>
        <p className="font-size-sm text-gray-700 font-primary leading-relaxed line-clamp-6 tracking-wide">
          {description}
        </p>
      </div>

      {/* Price and Button */}
      <div className="flex items-center gap-4 px-2 xs:px-4 sm:px-6 pb-2 xs:pb-4 sm:pb-6">
        <p className="text-xl font-primary text-black">$78</p>
        <Button variant="simple-blue" name="More..." link="/" />
      </div>
    </div>
  </div>
</div>

  );
};

export default HeroBannerCard;
