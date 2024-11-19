"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log("Mobile menu toggled:", isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 w-full h-20 lg:h-28 z-50 bg-black bg-opacity-70 text-white">
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                <Image
                    src="/werent-logo.svg"
                    width={150}
                    height={50}
                    alt="WeRent Logo"
                    priority
                />

                <ul className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold">
                    {["Home", "About", "Product"].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-gray-300">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-4">
                    <button className="w-36 h-12 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-gray-200 duration-300">
                        Login
                    </button>
                </div>

                <div className="lg:hidden cursor-pointer text-2xl" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 uppercase text-sm font-semibold">
                    {["Home", "About", "Product"].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-gray-300">
                            {item}
                        </li>
                    ))}
                    <button className="w-36 h-12 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-gray-200 duration-300">
                        Login
                    </button>
                </ul>
            </div>
        </header>
    );
};

export default Header;
