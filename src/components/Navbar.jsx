import React, { useState } from "react";


export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-transparent">
            <div className="mx-auto px-5 py-8 lg:px-10 xl:px-16 lg:py-4 xl:py-4 lg:flex lg:items-center ">
                <div className="flex items-center justify-between">
                    
                    <div className="flex items-center w-52">
                        <img src="carlogo.png" alt="dieCar Logo" className="w-auto h-8 lg:h-10 xl:h-12 mr-2" />
                        <span className="text-gray-800 font-bold text-lg lg:text-xl xl:text-3xl">dieCar</span>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } mt-4 lg:flex items-center text-center lg:mt-0 justify-between w-full`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:pr-8 w-[100%] justify-center">
                        <a
                            href="#"
                            className="hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-gray-800"
                        >
                            HOME
                        </a>
                        <a
                            href="#"
                            className="hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-gray-800"
                        >
                            SHOPS
                        </a>
                        <a
                            href="#"
                            className="hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-gray-800"
                        >
                            EVENTS
                        </a>
                        <a
                            href="#"
                            className="hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-gray-800"
                        >
                            COMPANY
                        </a>

                    </div>

                    {/* Request a quote button */}
                    <div className="flex flex-col lg:flex-row ">
                        <a
                            href="#"
                            className="mt-6 lg:mt-0 inline-block px-4 py-2 border-2 mr-3 border-black rounded-3xl hover:bg-slate-900 hover:text-white font-medium xl:font-semibold text-gray-800 w-52"
                        >
                            SCHEDULE DEMO
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
