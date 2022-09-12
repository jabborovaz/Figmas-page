import React from "react";

function Plan(props) {
  const { image, title, descriptionCol, price, inMounth } = props;
  return (
    <div className="flex flex-col justify-between items-center border-2 border-[#DDDDDD] rounded-lg bg-white sm:py-6 md:py-4 hover:border-[#F53838]">
      <div className="flex flex-col space-y-7 sm:px-8 md:px-16 sm:pt-6 md:pt-12  ">
        <img src={image} alt="plan" width={150} />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      <div className="space-y-3 py-6 text-[#4F5665]">{descriptionCol}</div>
      <div className="flex flex-col py-8 space-y-6">
        <h3 className="text-2xl font-semibold text-center">
          {price} <span className="text-[#4F5665]">{inMounth}</span>
        </h3>
        <button className="border-2 border-[#F53838] text-base font-semibold text-[#F53838] rounded-full px-12 py-2 hover:text-white hover:bg-[#F53838]">
          Select
        </button>
      </div>
    </div>
  );
}

export default Plan;
