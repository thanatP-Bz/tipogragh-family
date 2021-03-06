import React from "react";

const Compliments = () => {
  return (
    <section id="compliments" className="py-5">
      <div className="container mx-auto pt-10 pb-10 grid grid-cols-1 md:grid-cols-4">
        <div className="flex items-center flex-col py-7 bg-[#e8f5fd]">
          <i className="fa-solid fa-heart text-5xl pb-10 text-[#74b9ff]"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col py-7 bg-white">
          <i className="fa-solid fa-child-reaching text-5xl pb-10 text-[#74b9ff]"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col py-7 bg-[#e8f5fd]">
          <i className="fa-solid fa-handshake text-5xl pb-10 text-[#74b9ff]"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col py-7 bg-white">
          <i className="fa-solid fa-house-chimney-medical text-5xl pb-10 text-[#74b9ff]"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Compliments;
