import React from "react";
import SupportImg from "../asserts/support.svg";

const Feature = () => {
  return (
    <section id="feature" className="py-2">
      <div className="container flex flex-col md:flex-row-reverse md:mx-auto md:justify-center my-5 space-y-0">
        <div className="flex flex-col mb-10 md:w-1/2">
          <div className="space-y-12 py-6 ml-16">
            <h1 className=" text-3xl font-bold md:text-2xl md:text-left text-center">
              Welcome to my website
            </h1>
            <p className="text-md text-center md:text-left  max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start w-1/2  ">
          <img className="w-3/3 h-3/4 " src={SupportImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
