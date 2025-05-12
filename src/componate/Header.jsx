import React, { useState, useEffect } from "react";
import { navbar } from "../conts/data";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { logo1 } from "../assets/images";
import Button from "./ul/Button/Button";
import MobileSlider from "./MobileSlider";

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
    <>
    <header className="w-full bg-[var(--bg-primary-transpant)] fixed z-30 top-0 border-b border-gray-200 backdrop-blur-xl shadow-sm">
      <div className="main-container w-full h-full">
        <div className="w-full h-full mx-auto flex items-center justify-between ">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo1} className="h-12 rounded-full" alt="Logo" />
            <span className="font-size-2xl font-semibold font-primary text-white">
              Riya Art Infotech
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navbar.map((item) => (
              <div key={item.id} className="relative dropdown-wrapper">
                {!item.list ? (
                  <Link
                    to={item.link}
                    className="text-white font-primary font-size-xxs uppercase relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-[-8px] after:left-0 hover:after:w-full focus:after:w-full after:transition-all after:duration-400"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={openDropdownId === item.id}
                      className="flex items-center gap-1 font-primary font-size-xxs uppercase text-white relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full focus:after:w-full after:transition-all after:duration-300"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdownId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdownId === item.id && (
                      <ul className="absolute top-full mt-2 right-0 bg-white border border-gray-500 rounded shadow-xl overflow-hidden z-50 min-w-[250px]">
                        {item.list.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.link}
                              onClick={() => setOpenDropdownId(null)}
                              className="block px-4 py-2 font-primary font-size-xs text-gray-700 hover:bg-[var(--bg-color-i)] transition font-primary"
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

            {/* Let's Talk Button */}
            <div>
              <Button normal variant="simple-shine-blue" name={"Get Touch"} link={'/contact'}></Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden text-white"
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

        {/* Mobile Sidebar */}
      </div>
    </header>
        <MobileSlider isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}  />
        </>
  );
};

export default Header;
