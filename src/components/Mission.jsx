import React from "react";

const Mission = () => {
  return (
    <div className="my-[50px]">
      <div className="md:text-5xl text-4xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">
          Main Focus/Mission Statement
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex items-start md:w-1/2 w-full gap-4">
          <div className="text-6xl md:text-8xl text-gray-200">1</div>
          <div className="px-4 md:px-6">
            At UrbanCraft, our mission is to revolutionize the construction
            industry by delivering innovative, sustainable, and high-quality
            building solutions. We are committed to creating structures that not
            only meet the highest standards of excellence but also enhance the
            quality of life for communities and contribute to a greener future.
          </div>
        </div>
        <div className="flex items-start md:w-1/2 w-full gap-4">
          <div className="text-6xl md:text-8xl text-gray-200">2</div>
          <div className="px-4 md:px-6">
            UrbanCraft is dedicated to transforming construction through
            cutting-edge technology, exceptional craftsmanship, and eco-friendly
            practices. Our focus is to build lasting, impactful spaces that
            inspire and support the well-being of individuals and communities,
            while maintaining a strong commitment to environmental stewardship.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
