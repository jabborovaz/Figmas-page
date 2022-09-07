import React from "react";
import photo from "../img/logolasles.svg";
function OwnPage() {
  return (
    <div>
      <div className="sm:mx-6 md:mx-32 sm:mt-4 md:mt-12">
        <nav className="flex flex-row justify-between items-center">
          <div>
            <img src={photo} alt="logo" />
          </div>
          <div className="sm:hidden md:flex flex-row space-x-8 text-sm text-[#4F5665]">
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Features
            </a>
            <a className="hover:underline" href="#">
              Pricing
            </a>
            <a className="hover:underline" href="#">
              Testimonials
            </a>
            <a className="hover:underline" href="#">
              Help
            </a>
          </div>
          <div className="flex flex-row space-x-4 text-sm">
            <button className="font-bold hover:underline">Sign In</button>
            <button className="border border-[#F53855] px-6 text-sm whitespace-nowrap font-bold text-[#F53855] py-2 rounded-full hover:text-white hover:bg-[#F53855]">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default OwnPage;
