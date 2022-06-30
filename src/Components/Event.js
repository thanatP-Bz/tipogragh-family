import React from "react";
import SupportImg from "../asserts/support.svg";
import EventImg from "../asserts/event.svg";

const Event = () => {
  return (
    <section id="event" className="py-2">
      <div className="container flex flex-col md:flex-row md:mx-auto md:justify-center my-10 space-y-0">
        <div className="flex flex-col mb-10 md:w-3/4">
          <div className="space-y-12 py-6">
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

        <div className="flex justify-center md:justify-start w-3/5 ">
          <img className="w-3/3" src={EventImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Event;
