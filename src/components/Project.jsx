import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import project_1 from "../assets/project_1.jpg";
import project_2 from "../assets/project_2.jpg";
import project_3 from "../assets/project_3.jpg";
import project_4 from "../assets/project_4.jpg";
import project_5 from "../assets/project_5.jpg";

const Project = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="my-[50px] flex flex-col">
      <div className="md:text-5xl text-4xl my-[50px]">
        <h5 className="uppercase font-light text-[#777]">Our Projects</h5>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row flex-col gap-4">
          {loading ? (
            <>
              <ProjectOneSkeleton />
              <ProjectOneSkeleton />
            </>
          ) : (
            <>
              <ProjectOne project_img={project_1} />
              <ProjectOne project_img={project_2} />
            </>
          )}
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          {loading ? (
            <>
              <ProjectTwoSkeleton />
              <ProjectTwoSkeleton />
              <ProjectTwoSkeleton />
            </>
          ) : (
            <>
              <ProjectTwo project_img={project_3} />
              <ProjectTwo project_img={project_4} />
              <ProjectTwo project_img={project_5} />
            </>
          )}
        </div>
      </div>
      <div className="flex md:justify-end">
        <Link to="/projects">
          <button className="w-[250px] h-[70px] mt-[50px] main-btn">
            <span>
              All Projects
              <BsArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const ProjectOneSkeleton = () => {
  return (
    <div
      id="card"
      className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
    ></div>
  );
};

const ProjectOne = (props) => {
  return (
    <div id="card" className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4]">
      <img
        className="w-full h-full object-cover"
        src={props.project_img}
        alt=""
      />
    </div>
  );
};

const ProjectTwoSkeleton = () => {
  return (
    <div
      id="card"
      className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
    ></div>
  );
};

const ProjectTwo = (props) => {
  return (
    <div id="card" className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4]">
      <img
        className="w-full h-full object-cover"
        src={props.project_img}
        alt=""
      />
    </div>
  );
};

export default Project;
