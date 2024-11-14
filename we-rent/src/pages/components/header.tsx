"use client";

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
    return (
      <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                <Image 
                    src="/werent-logo.svg"
                    width={150}
                    height={50}
                    alt="WeRent Logo"
                    priority
                />
                <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
                    {["Home", "About", "Product"].map((item) => (
                        <li key={item} className="navbarLi cursor-pointer hover:text-gray-300">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:inline-flex gap-8 items-center">
                    <button className="w-48 h-14 bg-white text-lime-950 uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-lime-900 duration-300">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
