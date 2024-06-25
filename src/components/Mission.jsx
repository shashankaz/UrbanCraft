import React from "react";

const Mission = () => {
  return (
    <div className="my-[50px]">
      <div className="text-5xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">
          Main Focus/Mission Statement
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-8">
        <div className="flex items-center md:w-[50%] w-full">
          <div className="text-8xl text-[#e2e2e2]">1</div>
          <div className="text-lg px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nam
            cum labore doloribus odio soluta voluptates, accusamus distinctio
            amet illo!
          </div>
        </div>
        <div className="flex items-center md:w-[50%] w-full">
          <div className="text-8xl text-[#e2e2e2]">2</div>
          <div className="text-lg px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nam
            cum labore doloribus odio soluta voluptates, accusamus distinctio
            amet illo!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
