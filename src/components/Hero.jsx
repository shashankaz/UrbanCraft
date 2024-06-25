import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import cover from "../assets/cover.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-between gap-8">
      <div className="md:block hidden text-5xl">
        <h1 className="uppercase font-light text-[#777]">Project</h1>
        <h1 className="font-semibold">Lorem</h1>
      </div>
      {loading ? (
        <div className="relative h-[80vh] md:w-[700px] w-full bg-[#c4c4c4] animate-pulse"></div>
      ) : (
        <div className="relative h-[80vh] md:w-[700px] w-full bg-[#c4c4c4]">
          <img className="h-full w-full object-cover" src={cover} alt="" />
          <Link to="/projects">
            <div className="absolute bottom-0 left-0 bg-white flex items-center gap-4 pl-4 uppercase font-light w-[200px] h-[70px]">
              View Project
              <BsArrowRight />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hero;
