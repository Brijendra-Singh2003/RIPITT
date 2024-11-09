import React from "react";

function HeroSection({ image, text }) {
  return (
    <div
      className="bg-blue-500 py-16 sm:bg-fixed text-center text-white bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight py-8">{text}</h1>
      </div>
    </div>
  );
}

export default HeroSection;
