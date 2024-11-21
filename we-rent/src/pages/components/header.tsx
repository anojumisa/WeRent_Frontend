import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log("Mobile menu toggled:", isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 w-full h-16 lg:h-20 z-50 bg-black bg-opacity-70 text-white">
            <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                <Link href="/" passHref>
                    <Image
                        src="/werent-logo.svg"
                        width={150}
                        height={50}
                        alt="WeRent Logo"
                        priority
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold">
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/product">Product</Link>
                    </li>
                </ul>

                {/* Desktop Login Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/signup">
                        <button className="w-36 h-12 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-gray-200 duration-300">
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden cursor-pointer text-2xl" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 uppercase text-sm font-semibold">
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                        <Link href="/product" onClick={() => setIsMobileMenuOpen(false)}>
                            Product
                        </Link>
                    </li>
                    <Link href="/signup" passHref>
                        <button
                            className="w-36 h-12 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-gray-200 duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Login
                        </button>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;