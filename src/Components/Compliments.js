import React from "react";

const Compliments = () => {
  return (
    <section id="miscellaneous" className="py-5">
      <div className="container mx-auto pt-10 pb-10 grid grid-cols-1 md:grid-cols-4">
        <div className="flex items-center flex-col p-7">
          <i className="fa-solid fa-heart text-5xl pb-10 text-pink-300"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col p-7">
          <i className="fa-solid fa-child-reaching text-5xl pb-10 text-pink-300"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col p-7">
          <i className="fa-solid fa-handshake text-5xl pb-10 text-pink-300"></i>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            consequatur.
          </p>
        </div>
        <div className="flex items-center flex-col p-7">
          <i className="fa-solid fa-house-chimney-medical text-5xl pb-10 text-pink-300"></i>
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
