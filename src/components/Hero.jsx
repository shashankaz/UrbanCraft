import React from "react";
import { BsArrowRight } from "react-icons/bs";
import cover from "../assets/cover.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="md:block hidden text-5xl">
        <h1 className="uppercase font-light text-[#777]">Project</h1>
        <h1 className="font-semibold">Lorem</h1>
      </div>
      <div className="relative h-[80vh] md:w-[700px] w-full">
        <img className="h-full w-full object-cover bg-[#c4c4c4]" src={cover} alt="" />
        <Link to="/project">
          <div className="absolute bottom-0 left-0 bg-white flex items-center gap-4 pl-4 uppercase font-light w-[200px] h-[70px]">
            View Project
            <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
