import React, { useState } from "react";
import { Globe } from "lucide-react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 text-[16px] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px- py-3">
        
        {/* Left Section */}
        <div className="flex items-center space-x-3 ">
          {/* Uber Logo */}
          <a href="/" className="text-2xl font-bold">
            <img src="./Logo.png" alt="Uber Logo" className="w-[70px] h-[40px]" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <a href="#" className="  rounded-4xl px-2 py-1  hover:bg-gray-900">Ride</a>
            <a href="#" className=" rounded-4xl px-2 py-1  hover:bg-gray-900">Drive</a>
            <a href="#" className=" rounded-4xl px-2 py-1  hover:bg-gray-900">Business</a>

            {/* Dropdown */}
            <div className="relative ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" rounded-4xl px-2 py-1  focus:bg-gray-900 focus:border-4 flex items-center hover:bg-gray-900 " 
              >
                About
                <FiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-4 w-52 text-gray-500 rounded shadow-xl bg-white">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">About us</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our offerings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">How Uber works</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sustainability</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Explore</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Newsroom</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Investor relations</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Autonomous</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-1  rounded-4xl px-2 py-1  hover:bg-gray-900">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </button>
          <a href="#" className=" rounded-4xl px-2 py-1  hover:bg-gray-900">Help</a>
          <a href="#" className=" rounded-4xl px-2 py-1  hover:bg-gray-900">Log in</a>
          <a
            href="#"
            className="bg-white w-[73.6875px] h-[36px] text-sm text-black px-2  py-1 rounded-full font-medium hover:bg-gray-200 flex items-center justify-center"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-3">
          <a href="#" className="block hover:underline">Ride</a>
          <a href="#" className="block hover:underline">Drive</a>
          <a href="#" className="block hover:underline">Business</a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center hover:underline w-full"
          >
            About
            <FiChevronDown
              className={`ml-1 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isOpen && (
            <div className="pl-4 space-y-2">
              <a href="#" className="block hover:underline">About us</a>
              <a href="#" className="block hover:underline">Our offerings</a>
              <a href="#" className="block hover:underline">How Uber works</a>
              <a href="#" className="block hover:underline">Sustainability</a>
              <a href="#" className="block hover:underline">Explore</a>
              <a href="#" className="block hover:underline">Newsroom</a>
              <a href="#" className="block hover:underline">Investor relations</a>
              <a href="#" className="block hover:underline">Autonomous</a>
              <a href="#" className="block hover:underline">Blog</a>
              <a href="#" className="block hover:underline">Careers</a>
            </div>
          )}

          <hr className="border-gray-700 my-2" />

          {/* Mobile Right Section */}
          <button className="flex items-center space-x-1 hover:underline">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </button>
          <a href="#" className="block hover:underline">Help</a>
          <a href="#" className="block hover:underline">Log in</a>
          <a
            href="#"
            className="bg-white w-full text-sm text-black px-2 py-2 rounded-full font-medium hover:bg-gray-200 flex items-center justify-center"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
