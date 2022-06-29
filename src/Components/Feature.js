import React from "react";
import Support from "../asserts/support.svg";

const Feature = () => {
  return (
    <section id="feature" className="md:py-2">
      <div className="container flex flex-col md:flex-row  md:mx-auto mt-10 space-y-0 space-x-4">
        <div className="flex flex-col mb-10 md:w-1/2 ">
          <div className="space-y-12 py-6">
            <h1 className=" text-3xl font-bold md:text-4xl md:text-left md:justify-center">
              Welcome to my website
            </h1>
            <p className="text-md md:text-left  max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <img className="w-3/5" src={Support} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5  pt-2 md:w-1/2"></div>
      </div>
    </section>
  );
};

export default Feature;
