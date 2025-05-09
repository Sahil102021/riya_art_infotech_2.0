import React from "react";

const banners = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFijl88ova6Gb_h3B4hvZpHWoFnmQyWqicDmR3rv6OhcFC_jXJGgUuVROEcKCFlZFQsco&usqp=CAU",
    text: "web development involves creating a website",
    description:
      "Custom web development involves creating a website or digital solution entirely from scratch, tailored to a specific business's needs and goals. This process includes various stages like research, planning, design, development (front-end and back-end), testing, optimization, and ongoing support. It differs from using pre-built templates or platforms, offering a more personalized and flexible solution.",
    buttonText: "Action",
    reverse: false,
  },
  {
    imgSrc:
      "https://athemes.com/wp-content/uploads/Techza-wordpress-theme-680x383.jpg",
    text: "Custom software development",
    description:
      "Custom software development companies offer bespoke software solutions tailored to specific business needs, often providing advantages like 100% control over features, rapid collaboration, and cost-effectiveness compared to buying and customizing off-the-shelf software. They can also help with integrating existing systems, automating processes, and ensuring data security .",
    buttonText: "Action",
    reverse: true,
  },
  {
    imgSrc:
      "https://market-resized.envatousercontent.com/previews/files/633039309/preview/preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=99acddb798a7bbd40c7afdbb2b70002121661a8cc5b24f8122d8302ad149e3d7",
    text: "UI/UX development custom company specializes",
    description:
      "A UI/UX development custom company specializes in creating user interfaces (UI) and user experiences (UX) for digital products, focusing on usability, accessibility, and visual appeal. They tailor their solutions to specific business needs and target audiences, often collaborating with clients to understand their unique requirements. These companies may offer services like mobile app design, website design, and more . ",
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
            <div
              key={index}
              className={`flex flex-col md:flex-row overflow-hidden rounded-md bg-[var(--bg-light-blue)] shadow-sm ${
                banner.reverse ? "md:flex-row-reverse" : ""
              } mb-6`}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  src={banner.imgSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5">
                <span className="font-size-xs uppercase font-primary">
                  Join, it's free
                </span>
                <h3 className="font-size-2xl font-bold font-primary mt-2">
                  {banner.text}
                </h3>
                <p className="my-4 font-size-sm font-primary tracking-wider">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BannerHero;
