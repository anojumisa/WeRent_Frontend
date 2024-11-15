"use client";

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div className="fixed top-0 w-full h-20 lg:h-28 z-50 text-white bg-transparent">
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Image 
                    src="/werent-logo.svg"
                    width={150}
                    height={50}
                    alt="WeRent Logo"
                    priority
                />
                
                {/* Navbar Links */}
                <ul className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold">
                    {["Home", "About", "Product"].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-gray-300">
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Login Button */}
                <div className="hidden lg:flex gap-8 items-center">
                    <button className="w-36 h-12 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-gray-200 duration-300">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
