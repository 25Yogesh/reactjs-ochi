import React from "react";
import aboutImg from "../assets/images/about.jpg";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <div className="w-full p-20">
        <h1 className="font-['Neue-Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
      </div>
      <div className="w-full flex gap-10 p-10 border-t-[1px] border-[#A1B562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex gap-5 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full uppercase text-white">
            Read More
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#B0C859] rounded-3xl">
          <img
            className="w-full rounded-3xl h-[60vh] object-fill"
            src={aboutImg}
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
