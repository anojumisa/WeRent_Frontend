"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <h4 className="text-md font-semibold mb-2">About Us</h4>
            <p className="text-sm">
              In We Rent, we offer you a solution to your everyday fashion choices.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <ul className="text-sm space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:"
                  className="hover:text-gray-300"
                >
                  
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-gray-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-600 pt-3 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} We Rent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;