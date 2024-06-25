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
    }, 5000);
  }, []);

  return (
    <div className="my-[50px] flex flex-col">
      <div className="text-5xl my-[50px]">
        <h5 className="uppercase font-light text-[#777]">Our Projects</h5>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex md:flex-row flex-col gap-4">
          {loading ? (
            <div
              id="card"
              className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
            ></div>
          ) : (
            <div id="card" className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4]">
              <img
                className="w-full h-full object-cover"
                src={project_1}
                alt=""
              />
            </div>
          )}
          {loading ? (
            <div
              id="card"
              className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
            ></div>
          ) : (
            <div id="card" className="md:w-[50%] w-full h-[250px] bg-[#c4c4c4]">
              <img
                className="w-full h-full object-cover"
                src={project_2}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          {loading ? (
            <div
              id="card"
              className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
            ></div>
          ) : (
            <div id="card" className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4]">
              <img
                className="w-full h-full object-cover"
                src={project_3}
                alt=""
              />
            </div>
          )}
          {loading ? (
            <div
              id="card"
              className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
            ></div>
          ) : (
            <div id="card" className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4]">
              <img
                className="w-full h-full object-cover"
                src={project_4}
                alt=""
              />
            </div>
          )}
          {loading ? (
            <div
              id="card"
              className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4] animate-pulse"
            ></div>
          ) : (
            <div id="card" className="md:w-[33%] w-full h-[250px] bg-[#c4c4c4]">
              <img
                className="w-full h-full object-cover"
                src={project_5}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <Link to="/projects">
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
