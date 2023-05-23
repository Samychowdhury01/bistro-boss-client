import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="text-center text-white md:flex md:h-[400px] w-full">
        <div className="bg-[#1F2937] flex items-center justify-center md:w-1/2 p-10">
          <div className="space-y-5">
            <h3 className="text-3xl font-medium">CONTACT US</h3>
            <div>
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] flex items-center justify-center md:w-1/2 p-10">
          <div className="space-y-5">
            <h3 className="text-3xl font-medium">Follow US</h3>
            <p>Join us on social media</p>
            <div className="flex items-center gap-8">
                <FaFacebookF className="text-3xl"/>
                <FaInstagram className="text-3xl"/>
                <FaTwitter className="text-3xl"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 text-white">
        <h5 className="text-xl text-center font-medium">
        Copyright {(new Date().getFullYear())} © CulinaryCloud. All rights reserved.
        </h5>
      </div>
    </>
  );
};

export default Footer;
