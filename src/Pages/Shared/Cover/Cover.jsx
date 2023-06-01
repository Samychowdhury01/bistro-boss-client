import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero md:h-[700px]">
        <div className="bg-black bg-opacity-50 w-full md:w-2/3 h-[300px]"></div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold styled-text">{title}</h1>
            <p className="mb-5">{description && description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
