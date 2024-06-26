import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:h-[400px] w-full md:gap-8 bg-[#fafafa]">
        <div className="h-[300px] w-full md:h-full bg-[#c4c4c4] animate-pulse"></div>
        <div className="flex flex-col md:w-[800px] md:justify-between gap-4 py-8 md:px-0 mr-8 px-4">
          <div className="w-full h-[20px] bg-[#c4c4c4] animate-pulse"></div>
          <div className="w-full h-[20px] bg-[#c4c4c4] animate-pulse"></div>
          <div className="w-full h-[20px] bg-[#c4c4c4] animate-pulse"></div>
          <div className="w-full h-[20px] bg-[#c4c4c4] animate-pulse"></div>
          <div className="w-full h-[20px] bg-[#c4c4c4] animate-pulse"></div>
          <div className="w-[200px] h-[70px] bg-[#c4c4c4] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
