import React from "react";
import { motion, useAnimation } from "framer-motion";
import featuredImg1 from "../assets/images/featured-image-1.png";
import featuredImg2 from "../assets/images/featured-image-2.png";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: 0 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className="w-full">
      <div className="w-full pt-25 pb-10 px-15">
        <h1 className="text-6xl font-['Neue-Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="w-full border-t-[1px] border-zinc-700 px-20">
        <div className="cards w-full flex gap-10 my-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter  text-7xl">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={`card-first-${index}`}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={featuredImg1}
                alt="featured-img-1"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter  text-7xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={`card-second-${index}`}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src={featuredImg2}
                alt="featured-img-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
