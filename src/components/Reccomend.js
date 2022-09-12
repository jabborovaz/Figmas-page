import React from "react";
import star from "../img/star.svg";

function Reccomend(props) {
  const { image, name, country, comment } = props;
  return (
    <div className="h-[230px] flex flex-col border-2 rounded-md">
      <div className="flex flex-row justify-around mt-5 items-center">
        <div className="flex flex-row space-x-4">
          <img src={image} alt="human" />
          <div className="flex flex-col">
            <h4 className="text-base font-semibold">{name}</h4>
            <p className="text-sm text-[#4F5665]">{country}</p>
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <p>4.5</p>
          <img src={star} alt="star" />
        </div>
      </div>
      <p className="text-sm px-5 pt-5">{comment}</p>
    </div>
  );
}

export default Reccomend;
