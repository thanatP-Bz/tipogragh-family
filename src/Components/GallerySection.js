import React from "react";
import img1 from "../asserts/j-1.jpg";
import img2 from "../asserts/j-2.jpg";
import img3 from "../asserts/j-3.jpg";
import img4 from "../asserts/j-4.jpg";
import img5 from "../asserts/kid-1.jpg";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-5">
      <div className="container px-5 px2 mx-auto">
        <div className="flex flex-wrap -m-1 justify-center  items-center md:justify-start">
          <div className="flex flex-wrap w-3/5 md:w-1/4 ">
            <div className="w-full p-1 flex ">
              <img
                src={img1}
                alt=""
                className=" object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-3/5 md:w-1/4 ">
            <div className="w-full p-1 flex ">
              <img
                src={img2}
                alt=""
                className=" object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-3/5 md:w-1/4 ">
            <div className="w-full p-1 flex ">
              <img
                src={img3}
                alt=""
                className=" object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-3/5 md:w-1/4 ">
            <div className="w-full p-1 flex ">
              <img
                src={img4}
                alt=""
                className=" object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-16">
        <a
          href="./page/Gallery.js"
          className="text-white shadow-xl font-bold p-3 py-4 px-10 bg-[#74b9ff] rounded-full hover:bg-slate-600"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
