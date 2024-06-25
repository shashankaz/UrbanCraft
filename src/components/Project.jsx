import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="my-[50px] flex flex-col">
      <div className="text-5xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">Our Projects</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div
            id="card"
            className="w-[50%] h-[250px] bg-[#c4c4c4] animate-pulse"
          ></div>
          <div
            id="card"
            className="w-[50%] h-[250px] bg-[#c4c4c4] animate-pulse"
          ></div>
        </div>
        <div className="flex gap-4">
          <div
            id="card"
            className="w-[33%] h-[250px] bg-[#c4c4c4] animate-pulse"
          ></div>
          <div
            id="card"
            className="w-[33%] h-[250px] bg-[#c4c4c4] animate-pulse"
          ></div>
          <div
            id="card"
            className="w-[33%] h-[250px] bg-[#c4c4c4] animate-pulse"
          ></div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/project">
          <div className="bg-[#333] text-white flex items-center justify-center gap-4 uppercase font-light w-[250px] h-[70px] mt-[50px]">
            All Projects
            <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
