import React, { useState, useEffect } from "react";
import { navbar } from "../conts/data";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { logo1 } from "../assets/images";
import Button from "./ul/Button/Button";

const Header = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  return (
    <header className="w-full bg-[var(--bg-primary-transpant)] fixed w-full z-30 top-0 border-b border-gray-200 backdrop-blur-xl shadow-sm">
      <div className="main-container w-full h-full">
        <div className="w-full h-full mx-auto  flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo1}
              className="h-12 rounded-full"
              alt="Logo"
            />
            <span className="text-xl font-semibold font-primary text-white">
              Riya Art Infotech
            </span>
          </Link>

          

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 justify-center items-center">
            {navbar.map((item) => (
              <div key={item.id} className="relative dropdown-wrapper">
                {!item.list ? (
                  <Link
                    to={item.link}
                    className="text-white font-szie-sm relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full focus:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center gap-1 text-white text-sm relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full focus:after:w-full after:transition-all after:duration-300 cursor-pointer" 
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdownId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdownId === item.id && (
                      <ul className="absolute top-full mt-2 left-0 bg-white border rounded shadow-lg z-50 min-w-[180px]">
                        {item.list.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.link}
                              onClick={() => setOpenDropdownId(null)}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 transition font-primary"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
            {/* late's talk */}
            <div className="">
            <Button variant={"simple-shine-blue"} name={"late's talk"} />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar Right */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white  z-50 shadow-xl border-l border-gray-200  transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 space-y-4 h-full flex flex-col overflow-y-auto">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            {navbar.map((item) => (
              <div key={item.id} className="dropdown-wrapper">
                {!item.list ? (
                  <Link
                    to={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-gray-900  hover:text-blue-700 transition font-primary"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center justify-between w-full text-gray-900 py-2 font-primary"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdownId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdownId === item.id && (
                      <ul className="pl-4 space-y-1">
                        {item.list.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.link}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenDropdownId(null);
                              }}
                              className="block py-1 text-sm text-gray-700  hover:text-blue-600 transition font-primary"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
