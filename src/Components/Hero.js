import React from "react";
import familyImg from "../asserts/family.jpg";

const Hero = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center  mx-2 md:mx-auto mt-10 space-y-0 space-x-4">
      <div className="flex flex-col mb-10 md:w-1/2 items-center">
        <div className="space-y-12 py-6">
          <h1 className="mx-2 text-3xl font-bold text-center md:text-4xl md:text-left md:justify-center">
            Welcome to my website
          </h1>
          <p className="text-md md:text-left text-center max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
            consectetur eligendi!
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="./page/Gallery.js"
              className="text-white shadow-xl font-bold p-2 py-3 px-10 bg-[#74b9ff] rounded-full hover:bg-slate-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-3/5 items-center border-white border-8 shadow-xl">
        <img src={familyImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
