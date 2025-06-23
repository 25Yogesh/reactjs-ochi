import React from "react";
import cardLogo1 from "../assets/images/card-logo-1.svg";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-24 gap-5">
      <div className="cardcontainer w-1/2 h-[55vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
          <img className="w-32" src={cardLogo1} alt="card-logo-1" />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[55vh]">
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#192826]">
          {" "}
          <img className="w-32" src={cardLogo1} alt="card-logo-1" />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#192826]">
          {" "}
          <img className="w-32" src={cardLogo1} alt="card-logo-1" />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
