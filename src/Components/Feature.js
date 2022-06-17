import React from "react";
import Support from "../asserts/support.svg";

const Feature = () => {
  return (
    <section id="feature" className="md:py-2">
      <div className="container flex flex-col md:flex-row mx-2 md:mx-auto mt-10 space-y-0 space-x-4">
        <div className="flex flex-col mb-10 md:w-1/2 items-center">
          <div className="space-y-12 py-6">
            <h1 className="mx-2 text-3xl font-bold text-center md:text-4xl md:text-left md:justify-center">
              Thank you Tiprogragh Family
            </h1>
            <p className="text-md md:text-left text-center max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <img className="w-3/4" src={Support} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5  pt-2 md:w-1/2">
          <div className="space-y-6 py-6">
            <h1 className="max-w-md text-xl font-bold text-center md:text-2xl md:text-left md:justify-center">
              <span className="text-white py-1 px-4 rounded-full bg-pink-300 mr-4">
                1
              </span>
              Welcome to the our website
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>

          <div className="space-y-6 py-6">
            <h1 className="max-w-md text-xl font-bold text-center md:text-2xl md:text-left md:justify-center">
              <span className="text-white py-1 px-4  rounded-full bg-pink-300 mr-4 ">
                2
              </span>
              Welcome to the our website
            </h1>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>

          <div className="space-y-6 py-6">
            <h1 className="max-w-md md:text-2xl font-bold text-center text-xl md:text-left md:justify-center">
              <span className="text-white py-1 px-4 rounded-full bg-pink-300 mr-4">
                3
              </span>
              Welcome to the our website
            </h1>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquam suscipit soluta dolorum ipsum! Fugit nihil cumque ipsum
              consectetur eligendi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
