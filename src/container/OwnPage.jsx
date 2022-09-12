import React from "react";
import { useState } from "react";
import About from "../components/About";
import Plan from "../components/Plan";
import photo from "../img/logolasles.svg";
import illustrationPhoto from "../img/illustration.svg";
import illustrationPhoto2 from "../img/illustration2.svg";
import users from "../img/user.svg";
import location from "../img/location.svg";
import server from "../img/server.svg";
import check from "../img/check.svg";
import littleCheck from "../img/littleCheck.svg";
import freePlan from "../img/freePlan.svg";
import standartPlan from "../img/standartPlan.svg";
import premiumPlan from "../img/premiumPlan.svg";
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
  let freeDescription = (
    <>
      <div className="flex flex-row sm:mt-0 md:mt-[-30px] space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Unlimited Bandwitch</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Encrypted Connection</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">No Traffic Logs</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Works on All Devices</p>
      </div>
    </>
  );
  let standartDescription = (
    <>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Unlimited Bandwitch</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Encrypted Connection</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Yes Traffic Logs</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Works on All Devices</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Connect Anyware</p>
      </div>
    </>
  );
  let premiumDescription = (
    <>
      <div className="flex flex-row sm:mt-0 md:mt-8 space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Unlimited Bandwitch</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Encrypted Connection</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Yes Traffic Logs</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Works on All Devices</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Connect Anyware</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={littleCheck} alt="check" width={15} />
        <p className="text-sm">Get New Features</p>
      </div>
    </>
  );
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
      <div className="flex mt-8 sm:flex-col-reverse  md:flex-row">
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
          <button className="mt-8 border border-[#F53838] rounded-md px-12 py-2 text-base text-[#F53838] font-bold sm:shadow-none md:shadow-[0_20px_40px_0_rgba(255,0,0,0.3)] hover:bg-[#F53838] hover:text-white">
            Get Started
          </button>
        </div>
        <div className="sm:mr-3 md:mr-32 sm:mt-4 md:mt-12">
          <img src={illustrationPhoto} alt="first" />
        </div>
      </div>
      <div className="sm:mx-8 md:mx-32 sm:mt-8 md:mt-20 md:px-4 py-6 md:rounded-2xl md:shadow-[0_20px_60px_5px_rgba(220,220,220,0.4)] ">
        <div className="sm:ml-10 md:ml-0 flex sm:flex-col md:flex-row md:space-x-4">
          <About
            image={users}
            numbers="90+"
            text="Users"
            classText="flex flex-row sm:border-b-2 md:border-b-0 md:border-r-4 md:px-16 space-x-6 items-center p-3"
          />
          <About
            image={location}
            numbers="30+"
            text="Location"
            classText="flex sm:mt-6 md:mt-0 flex-row sm:border-b-2 md:border-b-0 md:border-r-4 md:px-16 space-x-6 items-center p-3"
          />
          <About
            image={server}
            numbers="50+"
            text="Servers"
            classText="flex sm:mt-6 md:mt-0 flex-row space-x-6 md:px-16 items-center p-3"
          />
        </div>
      </div>
      <div className="flex my-20 sm:mx-6 md:mx-32 sm:flex-col md:flex-row md:space-x-32">
        <div>
          <img src={illustrationPhoto2} alt="second" />
        </div>
        <div>
          <p className="text-3xl font-semibold leading-normal sm:pr-0 md:pr-20">
            We Provide Many Features You Can Use
          </p>
          <p className="text-base mt-4 text-[#4F5665] leading-normal">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className="flex flex-col mt-4 space-y-4">
            <div className="flex flex-row items-center space-x-2">
              <img src={check} alt="check" />
              <p className="text-sm text-[#4F5665]">
                Powerfull online protection.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={check} alt="check" />
              <p className="text-sm text-[#4F5665]">
                Internet without borders.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={check} alt="check" />
              <p className="text-sm text-[#4F5665]">Supercharged VPN</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <img src={check} alt="check" />
              <p className="text-sm text-[#4F5665]">No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E5E5E5] sm:px-6 md:px-24 py-12">
        <h2 className="text-3xl text-center font-semibold">Choose Your Plan</h2>
        <p className="mt-6 text-center text-base text-[#4F5665] leading-relaxed">
          Let's choose the package that is best for you and explore it and
          cheerfully.
        </p>
        <div className="flex sm:flex-col sm:space-y-10 mt-14 md:space-y-0 md:flex-row md:justify-between">
          <Plan
            image={freePlan}
            title="Free Plan"
            descriptionCol={freeDescription}
            price="Free"
          />

          <Plan
            image={standartPlan}
            title="Standart Plan"
            descriptionCol={standartDescription}
            price="$9"
            inMounth="/ mo"
          />

          <Plan
            image={premiumPlan}
            title="Premium Plan"
            descriptionCol={premiumDescription}
            price="$12"
            inMounth="/ mo"
          />
        </div>
      </div>
    </div>
  );
}

export default OwnPage;
