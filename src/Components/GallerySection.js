import React from "react";
import img1 from "../asserts/j-1.jpg";
import img2 from "../asserts/j-2.jpg";
import img3 from "../asserts/j-3.jpg";
import img4 from "../asserts/j-4.jpg";
import img5 from "../asserts/kid-1.jpg";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-5">
      <div className="container grid grid-cols-1 gap-8 py-0 mx-auto space-y-0 space-x-0 justify-center items-center md:flex-row md:mt-10 md:grid-cols-4 ">
        <div className="img">
          <a href="./">
            <img
              className="border-white border-8 hover:shadow-xl transition-all duration-300 object-cover"
              src={img1}
              alt=""
            />
          </a>
        </div>
        <div className="img">
          <a href="./">
            <img
              className="border-white border-8 hover:shadow-xl transition-all duration-300 object-cover"
              src={img2}
              alt=""
            />
          </a>
        </div>
        <div className="img">
          <a href="./">
            <img
              className="border-white border-8 hover:shadow-xl transition-all duration-300 object-cover"
              src={img3}
              alt=""
            />
          </a>
        </div>
        <div className="img">
          <a href="./">
            <img
              className="border-white border-8 hover:shadow-xl transition-all duration-300 object-cover"
              src={img4}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center pt-16">
        <a
          href="./page/Gallery.js"
          className="text-white shadow-xl font-bold p-3 py-4 px-10 bg-pink-300 rounded-full hover:bg-slate-600"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
