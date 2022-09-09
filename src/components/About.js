import React from "react";

function About(props) {
  const { image, numbers, text, classText } = props;
  return (
    <div className={classText}>
      <div>
        <img src={image} />
      </div>
      <div>
        <p className="font-bold text-xl">{numbers}</p>
        <p className="text-lg text-[#4F5665]">{text}</p>
      </div>
    </div>
  );
}

export default About;
