import React, { useState } from "react";
import NavItems from "./NavItems";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
const Side = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`Side ${isOpen ? "open" : ""}`}>
      {/* Sidebar content */}
      <div className="hidden md:block w-72 bg-gray-900 text-white">
        {/* Sidebar header */}
        <div className="p-4 flex justify-between items-center">
          <div>Logo</div>
          {/* Burger menu icon */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <HiMenuAlt2 />
          </button>
        </div>
        {/* Sidebar navigation */}
        <nav className="px-4">
          <ul>
            {NavItems.map((item, index) => (
              <li key={index} className="mb-2">
                {/* Check if item has subItems (dropdown) */}
                {item.subItems ? (
                  <div className="relative">
                    <a href="#" className="flex items-center">
                      <item.icon className="w-6 h-6 mr-2" />
                      {item.name}
                      {/* Chevron icon */}
                      <IoMdArrowDropdown />
                    </a>
                    {/* Dropdown content */}
                    <ul className="absolute left-12 top-0 mt-8 bg-gray-800 p-2 rounded">
                      {item.subItems.map((subItem, index) => (
                        <li key={index}>
                          <a href="#" className="block text-white">
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Render regular item
                  <a href="#" className="flex items-center">
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Side;
