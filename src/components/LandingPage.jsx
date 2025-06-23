import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import maskerImg from "../assets/images/content-image.jpg";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Created", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker" key={`masker-${index}`}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"
                  >
                    <img
                      className="w-[8vw] rounded-md h-[5.7vw] object-fill"
                      src={maskerImg}
                      alt="masker-image"
                    />
                  </motion.div>
                )}
                <h1
                  key={`landing-up-text-${index}`}
                  className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] tracking-tight font-['Founders-Grotesk'] font-semibold"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={`landing-down-text-${index}`}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex justify-center items-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
