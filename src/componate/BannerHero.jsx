import React from 'react';

const banners = [
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFijl88ova6Gb_h3B4hvZpHWoFnmQyWqicDmR3rv6OhcFC_jXJGgUuVROEcKCFlZFQsco&usqp=CAU",
    text: "We're not reinventing the wheel",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
    buttonText: "Action",
    reverse: false, // Controls layout direction
  },
  {
    imgSrc: "https://athemes.com/wp-content/uploads/Techza-wordpress-theme-680x383.jpg",
    text: "We're not reinventing the wheel",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
    buttonText: "Action",
    reverse: true,
  },
  {
    imgSrc: "https://market-resized.envatousercontent.com/previews/files/633039309/preview/preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=99acddb798a7bbd40c7afdbb2b70002121661a8cc5b24f8122d8302ad149e3d7",
    text: "We're not reinventing the wheel",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
    buttonText: "Action",
    reverse: false,
  },
];

const BannerHero = () => {
  return (
    <div>
      <section className="w-full">
        <div className="w-full space-y-12">
          {banners.map((banner, index) => (
            <div key={index} className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${banner.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <img src={banner.imgSrc} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                <h3 className="text-3xl font-bold">{banner.text}</h3>
                <p className="my-6 dark:text-gray-600">{banner.description}</p>
                <button type="button" className="self-start">{banner.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BannerHero;
