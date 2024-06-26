import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:h-[400px] w-full md:gap-8 bg-[#fafafa]">
        <div className="h-[300px] w-full md:h-full bg-[#c4c4c4]">
          <img
            className="h-full w-full object-cover"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col md:w-[800px] md:justify-between gap-4 py-8 md:px-0 px-4">
          <h1 className="text-4xl text-[#777] font-light">{props.title}</h1>
          <p className="font-light">{props.description}</p>
          <Link to={props.slug}>
            <div className="bg-white flex items-center justify-center gap-4 uppercase font-normal w-[200px] h-[70px]">
              View More <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
