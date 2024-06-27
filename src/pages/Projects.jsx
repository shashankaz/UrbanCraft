import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <div className="md:px-[80px] px-[20px] py-[50px]">
      <div className="md:text-5xl text-4xl mb-[50px]">
        <h1 className="uppercase font-light text-[#777]">Our</h1>
        <h1 className="font-semibold">Projects</h1>
      </div>
      <hr />
      <div className="my-[50px] flex flex-col gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id}>
            {loading ? <ProjectCardSkeleton /> : <ProjectCard {...project} />}
          </div>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center">
          <button onClick={loadMoreProjects}>
            <div className="bg-[#333] text-white flex items-center justify-center gap-4 uppercase font-light w-[220px] h-[70px]">
              Load More <BsArrowRight />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
