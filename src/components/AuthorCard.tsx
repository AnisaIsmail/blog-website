import Image from "next/image";
import React from "react";
import Author from "../../public/Images/Author.jpg"


export default function AuthorCard() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animation-fadeIn">

                <Image className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
                    src={Author} alt="AuthorImage" />

                <div>
                    <h3 className="text-xl font-bold "> Anisa Ismail </h3>
                    <p className="text-slate-500">Web Developer | SEO Expert</p>
                </div>
            </div>
        
        <p className="mt-4 text-black leading-relaxed">
             Anisa Ismail is an well-experienced web developer with extensive expertise in modern web technologies. She specialize in designing and developing responsive and user-friendly websites using frameworks like React.js, Next.js, and JavaScript.
        </p>

        <div className="mt-4 flex space-x-3">
            <a href="#"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
             Twitter
            </a>

            <a href="https://www.linkedin.com/in/anisa-ismail-66b4702ba/"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
             LinkedIn
            </a>

            <a href="https://github.com/AnisaIsmail"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
             GitHub
            </a>

        </div>
        </div>
    )
}