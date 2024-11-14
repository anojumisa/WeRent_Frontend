"use client";

import React from "react";

const Banner = () => {
    return (
        <div
            className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-[url('/werent-banner.jpg')] bg-cover bg-center"
        >
            <h1 className="text-2xl md:text-4xl uppercase font-bold text-white drop-shadow-md">
                We Rent
            </h1>
        </div>
    );
};

export default Banner;
