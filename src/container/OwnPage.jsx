import React from "react";
import { useState } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { VscTwitter } from "react-icons/vsc";
import { CgFacebook } from "react-icons/cg";
import { TiSocialInstagram } from "react-icons/ti";
import { BiCopyright } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import About from "../components/About";
import Plan from "../components/Plan";
import Reccomend from "../components/Reccomend";
import photo from "../img/logolasles.svg";
import footerLogo from "../img/footerLogo.svg";
import illustrationPhoto from "../img/illustration.svg";
import illustrationPhoto2 from "../img/illustration2.svg";
import map from "../img/huge.svg";
import users from "../img/user.svg";
import location from "../img/location.svg";
import server from "../img/server.svg";
import check from "../img/check.svg";
import littleCheck from "../img/littleCheck.svg";
import freePlan from "../img/freePlan.svg";
import standartPlan from "../img/standartPlan.svg";
import premiumPlan from "../img/premiumPlan.svg";
import netflixIcon from "../img/netflix.svg";
import redditIcon from "../img/reddit.svg";
import amazonIcon from "../img/amazon.svg";
import discordIcon from "../img/discord.svg";
import spotifyIcon from "../img/spotify.svg";
import poland from "../img/poland.svg";
import chinise from "../img/chinese.svg";
import korean from "../img/korean.svg";
function OwnPage() {
  const [btnClass, setBtnClass] = useState(
    "block hamburger md:hidden focus:outline-none"
  );
  const [menuClass, setMenuClass] = useState(
    "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
  );
  const [swiper, setSwiper] = useState(null);

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
      <div className="flex flex-row sm:mt-0 md:mt-[-33px] space-x-3">
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
      <div className="bg-[#F0F8FF] sm:px-6 md:px-24 py-12">
        <h2 className="text-3xl text-center font-bold">Choose Your Plan</h2>
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
        <div className="mt-36">
          <h2 className="text-2xl text-center font-bold sm:px-0 md:px-80">
            Huge Global Network of Fast VPN
          </h2>
          <p className="mt-6 text-center text-base text-[#4F5665] leading-relaxed sm:px-0 md:px-52">
            See <span className="font-bold">LaslesVPN</span> everywhere to make
            it easier for you when you move locations.
          </p>

          <img className="sm:mt-8 md:mt-32" src={map} alt="map" />
          <div className="flex sm:flex-col sm:space-y-5 md:space-y-0 mt-6 md:flex-row md:space-x-5 items-center">
            <a href="https://www.netflix.com/">
              <img src={netflixIcon} alt="netflix" />
            </a>
            <a href="https://www.reddit.com/">
              <img src={redditIcon} alt="reddit" />
            </a>
            <a href="https://www.amazon.com/">
              <img src={amazonIcon} alt="amazon" />
            </a>
            <a href="https://discord.com/">
              <img src={discordIcon} alt="discord" />
            </a>
            <a href="https://open.spotify.com/">
              <img src={spotifyIcon} alt="spotify" />
            </a>
          </div>
        </div>
        <div className="mt-28">
          <h2 className="text-2xl text-center font-bold sm:px-0 md:px-80">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="mt-6 text-center text-base text-[#4F5665] leading-relaxed sm:px-0 md:px-52">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="hidden md:block mt-14">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              <SwiperSlide>
                <Reccomend
                  image={poland}
                  name="Viezh Robert"
                  country="Warsaw, Poland"
                  comment="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={chinise}
                  name="Yessica Christy"
                  country="Shanxi, China"
                  comment="“I like it because I like to travel far and still can connect with high speed”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={korean}
                  name="Kim Young Jou"
                  country="Seoul, South Korea"
                  comment="“This is very unusual for my business that currently requires a virtual private network that has high security”."
                />
              </SwiperSlide>

              <SwiperSlide>
                <Reccomend
                  image={poland}
                  name="Viezh Robert"
                  country="Warsaw, Poland"
                  comment="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={chinise}
                  name="Yessica Christy"
                  country="Shanxi, China"
                  comment="“I like it because I like to travel far and still can connect with high speed”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={korean}
                  name="Kim Young Jou"
                  country="Seoul, South Korea"
                  comment="“This is very unusual for my business that currently requires a virtual private network that has high security”."
                />
              </SwiperSlide>
              <div className="flex flex-row justify-end space-x-5 items-center mr-8">
                <button
                  className="border-2 border-[#F53838] px-3 py-3 rounded-full text-2xl text-[#F53838] hover:text-white hover:bg-[#F53838]"
                  onClick={() => {
                    swiper.slidePrev();
                  }}
                >
                  <VscArrowLeft />
                </button>

                <button
                  className="border-2 border-[#F53838] px-3 py-3 rounded-full text-2xl text-[#F53838] hover:text-white hover:bg-[#F53838]"
                  onClick={() => {
                    swiper.slideNext();
                  }}
                >
                  <VscArrowRight />
                </button>
              </div>
            </Swiper>
          </div>

          <div className="md:hidden mt-8">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Reccomend
                  image={poland}
                  name="Viezh Robert"
                  country="Warsaw, Poland"
                  comment="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={chinise}
                  name="Yessica Christy"
                  country="Shanxi, China"
                  comment="“I like it because I like to travel far and still can connect with high speed”."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reccomend
                  image={korean}
                  name="Kim Young Jou"
                  country="Seoul, South Korea"
                  comment="“This is very unusual for my business that currently requires a virtual private network that has high security”."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="sm:mx-8 sm:mt-8 md:mt-20 flex sm:flex-col md:flex-row justify-between sm:px-0 md:px-14 items-center py-10 md:rounded-2xl md:shadow-[0_20px_60px_5px_rgba(220,220,220,0.5)] ">
          <div>
            <h3 className="text-2xl font-semibold">
              Subscribe Now for <br />
              Get Special Features!
            </h3>
            <p className="text-sm mt-4">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <button className="mt-8 whitespace-nowrap border border-[#F53838] rounded-md px-8 py-2 text-sm text-[#F53838] font-bold sm:shadow-none md:shadow-[0_20px_40px_0_rgba(255,0,0,0.3)] hover:bg-[#F53838] hover:text-white">
            Subscribe Now
          </button>
        </div>
      </div>
      <footer className="bg-[#E5E5E5] flex sm:flex-col-reverse justify-between md:flex-row py-8 sm:px-6 md:px-32">
        <div className="flex flex-col">
          <img src={footerLogo} alt="logotype" width={150} />
          <p className="text-sm leading-loose mt-2 text-[#4F5665]">
            <span className="font-bold">LaslesVPN</span> is a private virtual
            network that <br />
            has unique features and has high security.
          </p>
          <div className="flex flex-row mt-3 space-x-2">
            <a className="p-2 rounded-full text-[#F53838] bg-white">
              <CgFacebook />
            </a>
            <a className="p-2 rounded-full text-[#F53838] bg-white">
              <VscTwitter />
            </a>
            <a className="p-2 rounded-full text-[#F53838] bg-white">
              <TiSocialInstagram />
            </a>
          </div>
          <div className="flex flex-row items-center text-sm mt-4 text-[#AFB5C0]">
            <BiCopyright />
            <p>
              2020Lasles<span className="font-bold">VPN</span>
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col sm:pb-10 md:pb-0 md:flex-row md:space-x-14">
          <div className="flex flex-col sm:pb-8 md:pb-0 space-y-4">
            <h3 className="text-xl font-semibold">Product</h3>
            <div className="text-[#4F5665] text-sm flex flex-col space-y-2">
              <a>Download</a>
              <a>Pricing</a>
              <a>Locations</a>
              <a>Server</a>
              <a>Countries</a>
              <a>Blog</a>
            </div>
          </div>
          <div className="flex flex-col sm:pb-8 md:pb-0 space-y-4">
            <h3 className="text-xl font-semibold">Engage</h3>
            <div className="text-[#4F5665] text-sm flex flex-col space-y-2">
              <a>LaslesVPN ? </a>
              <a>FAQ</a>
              <a>Tutorials</a>
              <a>About Us</a>
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Earn Money</h3>
            <div className="text-[#4F5665] text-sm flex flex-col space-y-2">
              <a>Affiliate</a>
              <a>Become Partner</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OwnPage;
