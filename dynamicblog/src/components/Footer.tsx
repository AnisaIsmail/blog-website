import React from "react";
import { FcTimeline } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <div>
       <FcTimeline className="h-10 w-10"/>
       </div>
          <span className="ml-3 text-xl font-bold">Blog.</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Edu. —
          <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@gmail.com</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
         
          </a>
          <a className="ml-3 text-gray-500">
          <FaTwitter />
          </a>
          <a className="ml-3 text-gray-500">
          <MdFacebook />
          </a>
          <a className="ml-3 text-gray-500">
          <FaWhatsapp />
          </a>
          <a className="ml-3 text-gray-500">
          <FaGithub />
          </a>
        </span>
      </div>
    </footer>
  )
}