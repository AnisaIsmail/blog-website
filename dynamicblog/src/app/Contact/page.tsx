import React from "react";

export default function Contact() {
    return (
        <div className="shopsect text-center p-4">
            {/* Title Section */}
            <h3 className="font-bold text-[1.5rem] md:text-[2rem] text-center mt-4">
                Join The Conversation!
            </h3>
            <h5 className="shopPara text-center text-sm md:text-base mt-8">
                <span className="font-bold">We value your feedback and inquiries. 
                    <br />
                     If you have any questions about our Blog website or would like to share your suggestions,
                      please feel free to reach out to us.
                      <br />
                       Our goal is to provide you with the best possible experience.
                       <br />
                        You can contact us via email, phone, or by filling out the form below.
                        <br />
                         Your input is invaluable to us, and our team is always ready to assist you. </span>
            </h5>

            {/* Contact Form Section */}
            <div className="flex justify-center mt-8">
                <section className="contact-form w-full max-w-[600px] bg-gray-100 p-6 rounded-md shadow-md">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
                        Contact Us
                    </h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        ></textarea>

                        <div className="flex justify-center items-center">
                            <button
                                className="bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 md:px-6 md:py-3 text-sm md:text-base"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}