import React from "react";

const Header = () => {
    return (
            <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
                <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
                    <img 
                        src="/werent-logo.svg"
                        width={500}
                        height={500}
                        alt="WeRent Logo"
                    />
                    <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
                        <li className="navbarLi">Home</li>
                        <li className="navbarLi">About</li>
                        <li className="navbarLi">Product</li>
                    </ul>

                    <div className="hidden lg:inline-flex gap-8 items-center">
                        <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
                            Login
                        </button>
                    </div>
                </div>
            </div>        
    );
}

export default Header;