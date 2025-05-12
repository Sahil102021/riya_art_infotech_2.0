import React from "react";
import { logo1 } from "../assets/images";
import { svgIcon } from "../conts/svgIcon";
import { NavLink } from "react-router-dom";

let AboutUs = [
  {
    name: "Company History",
    link: "/",
  },
  {
    name: "Meet the Team",
    link: "/",
  },
  {
    name: "Employee Handbook",
    link: "/",
  },
  {
    name: "Careers",
    link: "/",
  },
];

let OurServices = [
  {
    name: "Web Developmen",
    link: "/",
  },
  {
    name: "Web Design",
    link: "/",
  },
  {
    name: "Marketing",
    link: "/",
  },
  {
    name: "Google Ads",
    link: "/",
  },
];

let HelpfulLinks = [
  {
    name: "FAQs",
    link: "/",
  },
  {
    name: "Support",
    link: "/",
  },
];

let FooterIcon = [
  {
    icon: svgIcon.facebook,
    link: "/",
  },
  {
    icon: svgIcon.instagram,
    link: "/",
  },
  {
    icon: svgIcon.twitter,
    link: "/",
  },
  {
    icon: svgIcon.dribbble,
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-6 sm:pt-16 pb-6 lg:pt-12 bg-[var(--bg-color-xii)]">
      <div className="main-container ">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="">
            <NavLink to="/" className="flex items-center space-x-3" >
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-full overflow-hidden">
                <img src={logo1} width="100%" alt="Company Logo" />
              </div>
              <span className="font-size-xl font-semibold font-primary text-white">
                Riya Art Infotech
              </span>
            </NavLink>

            <p className="max-w-md mt-3 font-size-sm leading-relaxed text-gray-200 sm:max-w-xs sm:mx-0 sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="flex justify-start gap-4 mt-3 sm:mt-8 md:gap-8 sm:justify-start">
              {FooterIcon.map((el, i) => {
                return (
                  <li key={i}>
                    <a
                      href={el.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-[var(--bg-color-xxi)] transition hover:text-[var(--bg-color-iii)]"
                    >
                      <span className="sr-only">Facebook</span>
                      {el.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4 gap-4 md:gap-0">
            <div className="text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <nav className="mt-3 sm:mt-4 xl:mt-6 2xl:mt-8">
                <ul className="space-y-1 sm:space-y-2 xl:space-y-3 2xl:space-x-4">
                  {AboutUs.map((el, i) => {
                    return (
                      <li key={i}>
                        <a
                          className="text-gray-300 font-size-sm transition linkEffect linkEffect--insideOut"
                          href={el.link}
                        >
                          {el.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <nav className="mt-3 sm:mt-4 xl:mt-6 2xl:mt-8">
                <ul className="space-y-1 sm:space-y-2 xl:space-y-3 2xl:space-x-4">
                  {OurServices.map((el, i) => {
                    return (
                      <li key={i}>
                        <a
                          className="text-gray-300 font-size-sm transition linkEffect linkEffect--insideOut "
                          href={el.link}
                        >
                          {el.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <nav className="mt-3 sm:mt-4 xl:mt-6 2xl:mt-8">
                <ul className="space-y-1 sm:space-y-2 xl:space-y-3 2xl:space-x-4">
                  {HelpfulLinks.map((el, i) => {
                    return (
                      <li key={i}>
                        <a
                          className="text-gray-300 font-size-sm transition  linkEffect linkEffect--insideOut"
                          href={el.link}
                        >
                          {el.name}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      className="flex group justify-start sm:justify-start gap-1.5 "
                      href="/"
                    >
                      <span className="text-gray-300 font-size-sm transition  linkEffect linkEffect--insideOut">
                        Live Chat
                      </span>
                      <span className="relative flex w-2 h-2 -mr-2">
                        <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-3 sm:mt-4 xl:mt-6 2xl:mt-8 space-y-1 sm:space-y-2 xl:space-y-3 2xl:space-x-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-start sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <div className="w-5 h-5 text-gray-300 shrink-0 group-hover:text-[var(--bg-color-iii)]">
                      {svgIcon.mail}
                    </div>
                    <span className="text-gray-300 font-size-sm transition group-hover:text-[var(--bg-color-iii)]">
                      john@doe.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-start sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <div className="w-5 h-5 text-gray-300 shrink-0 group-hover:text-[var(--bg-color-iii)]">
                      {svgIcon.contact}
                    </div>
                    <span className="text-gray-300 font-size-sm transition group-hover:text-[var(--bg-color-iii)]">
                      0123456789
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-start gap-1.5 sm:justify-start group">
                  <div className="w-5 h-5 text-gray-300 shrink-0 group-hover:text-[var(--bg-color-iii)]">
                    {svgIcon.location}
                  </div>
                  <address className="-mt-0.5 font-size-sm not-italic text-gray-300 group-hover:text-[var(--bg-color-iii)]">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 mt-4 sm:mt-12 border-t border-gray-300">
          <div className=" flex justify-between text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline font-size-xxs ">All rights reserved.</span>
              <a
                className="inline-block font-size-xxs text-gray-400 underline transition hover:text-[var(--bg-color-iii)]"
                href="/"
              >
                Terms & Conditions
              </a>
              <span>&middot;</span>
              <a
                className="inline-block font-size-xxs text-gray-400 underline transition hover:text-[var(--bg-color-iii)]"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p className=" text-gray-400 font-size-xxs sm:order-first sm:mt-0">
              &copy; 2022 Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
