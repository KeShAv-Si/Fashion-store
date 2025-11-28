import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-wide mb-5">UrbanZila</h1>
          <p className="w-full md:w-2/3 text-gray-600">
            UrbanZila is your premier destination for timeless fashion and style. We curate the finest collection of clothing and accessories, bringing you quality products that last. Shop with confidence and discover fashion that defines urban elegance.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <li className="cursor-pointer hover:text-black">Home</li>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <li className="cursor-pointer hover:text-black">About Us</li>
            </Link>
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
              <li className="cursor-pointer hover:text-black">Privacy policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9060992250</li>
            <li>contact@urbanzila.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2025@ urbanzila.com All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
