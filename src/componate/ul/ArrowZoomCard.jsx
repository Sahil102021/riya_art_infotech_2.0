import React, { useRef } from 'react';

const data = [
  {
    buttonTitle: "Featured",
    title: "Modern Design Card",
    description:
      "A beautifully crafted card component featuring glassmorphism, smooth animations, and gradient accents. Perfect for showcasing content in a modern and elegant way.",
    part1: "100%",
    subTitle1: "Responsive",
    part2: "Modern",
    subTitle2: "Design",
    part3: "Smooth",
    subTitle3: "Animations",
  },
  {
    buttonTitle: "Featured",
    title: "Modern Design Card",
    description:
      "A beautifully crafted card component featuring glassmorphism, smooth animations, and gradient accents. Perfect for showcasing content in a modern and elegant way.",
    part1: "100%",
    subTitle1: "Responsive",
    part2: "Modern",
    subTitle2: "Design",
    part3: "Smooth",
    subTitle3: "Animations",
  }, {
    buttonTitle: "Featured",
    title: "Modern Design Card",
    description:
      "A beautifully crafted card component featuring glassmorphism, smooth animations, and gradient accents. Perfect for showcasing content in a modern and elegant way.",
    part1: "100%",
    subTitle1: "Responsive",
    part2: "Modern",
    subTitle2: "Design",
    part3: "Smooth",
    subTitle3: "Animations",
  }
];

const ArrowZoomCard = () => {
  return (
    <div className="w-full grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => {
        const cardRef = useRef(null);

        const handleMouseMove = (e) => {
          const card = cardRef.current;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        };

        const handleMouseLeave = () => {
          const card = cardRef.current;
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        };

        return (
          <div
            key={index}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-[var(--bg-color-xi)] text-white backdrop-blur-md rounded-xl shadow-xl border p-6 transition-transform duration-300"
          >
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-green-400 text-white font-semibold shadow-md">
              {item.buttonTitle}
            </span>
            <h2 className="font-size-xl font-bold mb-3 font-primary">{item.title}</h2>
            <p className="font-size-xs font-primary mb-6">{item.description}</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-size-md font-bold font-primary">{item.part1}</div>
                <div className="font-size-xxs font-primary">{item.subTitle1}</div>
              </div>
              <div>
                <div className="font-size-md font-bold font-primary">{item.part2}</div>
                <div className="font-size-xxs text-white/70 font-primary">{item.subTitle2}</div>
              </div>
              <div>
                <div className="font-size-md font-bold font-primary">{item.part3}</div>
                <div className="font-size-xxs text-white/70 font-primary">{item.subTitle3}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArrowZoomCard;
