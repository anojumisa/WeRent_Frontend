"use client";

import React from "react";

const Banner = () => {
    return (
        <div
            className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-[url('/werent-banner.jpg')] bg-cover bg-center mt-20 lg:mt-28 text-white"
        >
            <h1 className="text-2xl md:text-4xl uppercase font-bold drop-shadow-md">
                We Rent
            </h1>
            <p className="mt-4 text-lg md:text-xl">Providing best user experience</p>
        </div>
    );
};

export default Banner;
