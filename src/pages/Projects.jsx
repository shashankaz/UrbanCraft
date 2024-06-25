import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="md:px-[80px] px-[20px] py-[50px]">
      <div className="md:text-5xl text-4xl mb-[50px]">
        <h1 className="uppercase font-light text-[#777]">Our</h1>
        <h1 className="font-semibold">Projects</h1>
      </div>
      <hr />
      <div className="my-[50px] flex flex-col gap-8">
        <div className="flex md:flex-row flex-col md:h-[400px] w-full md:gap-8 bg-[#fafafa]">
          <div className="md:w-[1500px] h-[300px] w-full md:h-full bg-[#c4c4c4]"></div>
          <div className="flex flex-col md:justify-between gap-4 py-8 md:px-0 px-4">
            <h1 className="text-4xl text-[#777] font-light">Sample Project</h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae pariatur modi et quasi laborum deserunt, sint
              consequuntur magni perspiciatis at!
            </p>
            <Link to="/project">
              <div className="bg-white flex items-center justify-center gap-4 uppercase font-normal w-[200px] h-[70px]">
                View More <BsArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
