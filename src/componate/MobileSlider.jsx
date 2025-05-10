import React, { useState, useEffect } from "react";
import { navbar } from "../conts/data";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";

const MobileSlider = ({ isOpen, onClose }) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

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
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl border-l border-gray-200 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4 h-full flex flex-col overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-800">
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          {navbar.map((item) => (
            <div key={item.id} className="dropdown-wrapper">
              {!item.list ? (
                <Link
                  to={item.link}
                  onClick={onClose}
                  className="block py-2 text-gray-900 hover:text-blue-700 font-primary"
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
                            onClick={onClose}
                            className="block py-1 text-sm text-gray-700 hover:text-blue-600 font-primary"
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
    </>
  );
};

export default MobileSlider;
