import React from "react";
import EventImg from "../asserts/event.svg";

const Event = () => {
  return (
    <section id="event" className="py-5">
      <div className="container flex items-center mx-auto  min-h-full flex-col md:flex-row  mt-6 rounded-md shadow-md  bg-gradient-to-r from-[#F2C5E0] to-pink-300">
        <div className="py-12 space-y-6 flex flex-col md:flex-row md:justify-center items-center px-6 lip-path-bg">
          <div>
            <div className="flex flex-col clip-path-bg">
              <h2 className="font-bold text-2xl pb-3 ">Next Event</h2>
              <p className="w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                alias ipsam ipsum exercitationem sunt quidem numquam harum.
                Esse, eum ad!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img className="" src={EventImg} alt="event" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
