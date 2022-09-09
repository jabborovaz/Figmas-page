import React from "react";
import { useState } from "react";
import photo from "../img/logolasles.svg";
import illustrationPhoto from "../img/illustration.svg";
function OwnPage() {
  const [btnClass, setBtnClass] = useState(
    "block hamburger md:hidden focus:outline-none"
  );
  const [menuClass, setMenuClass] = useState(
    "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
  );

  let openClose = () => {
    if (btnClass.includes("open") && !menuClass.includes("hidden")) {
      setBtnClass("block hamburger md:hidden focus:outline-none");
      setMenuClass(
        "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      );
    } else {
      setBtnClass("block hamburger open md:hidden focus:outline-none");
      setMenuClass(
        "absolute flex-col items-center flex self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      );
    }
  };
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
          <div className="sm:hidden md:flex flex-row space-x-4 text-sm">
            <button className="font-bold hover:underline">Sign In</button>
            <button className="border border-[#F53855] px-6 text-sm whitespace-nowrap font-bold text-[#F53855] py-2 rounded-full hover:text-white hover:bg-[#F53855]">
              Sign Up
            </button>
          </div>
          <div>
            <button class={btnClass} onClick={openClose}>
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        <div class="md:hidden">
          <div class={menuClass}>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Help</a>
            <button className="font-bold text-[#F53855] hover:underline">
              Sign In
            </button>
            <button className="border border-[#F53855] px-6 text-sm whitespace-nowrap font-bold text-[#F53855] py-2 rounded-full hover:text-white hover:bg-[#F53855]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-8 sm:flex-col-reverse md:flex-row">
        <div className="sm:ml-6 md:ml-32 sm:mt-4 md:mt-12">
          <p className="sm:text-3xl md:text-5xl md:leading-snug font-semibold">
            Want anything to be easy with{" "}
            <span className="font-extrabold">LaslesVPN.</span>
          </p>
          <p className="text-base mt-6 text-[#4F5665]">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-bold">LaslesVPN</span> discover interesting
            features from us.
          </p>
          <button className="mt-8 border border-[#F53838] rounded-md px-12 py-2 text-base text-[#F53838] font-bold hover:bg-[#F53838] hover:text-white">
            Get Started
          </button>
        </div>
        <div className="sm:mr-3 md:mr-32 sm:mt-4 md:mt-12">
          <img src={illustrationPhoto} />
        </div>
      </div>
    </div>
  );
}

export default OwnPage;
