'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 text-black">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={50}
            width={50}
            className="w-[70px] h-[60px] bg-black object-cover rounded-full"
          />
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800">Blog.</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-red-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex md:ml-auto flex-wrap items-center text-black justify-center`}
        >
          <Link
            href={"/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href={"/About"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href={"/Blog"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            href={"/Contact"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* YouTube Button */}
        <button className="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0 transiton-colors duration-300">
          YouTube
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
