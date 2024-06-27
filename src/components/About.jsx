import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import about_1 from "../assets/about_1.jpg";
import about_2 from "../assets/about_2.jpg";
import about_3 from "../assets/about_3.jpg";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#fafafa] flex md:flex-row flex-col items-center justify-between gap-8 md:px-[100px] px-[20px] my-[50px] py-[50px]">
      <div className="flex items-center gap-4">
        <div className="flex md:flex-col flex-row md:gap-4 gap-2">
          {loading ? (
            <>
              <Skeleton className="md:w-[250px] w-[50%] h-[250px]" />
              <Skeleton className="md:w-[250px] w-[50%] h-[250px]" />
            </>
          ) : (
            <>
              <Image src={about_1} className="md:w-[250px] w-[50%] h-[250px]" />
              <Image src={about_2} className="md:w-[250px] w-[50%] h-[250px]" />
            </>
          )}
        </div>
        <div>
          {loading ? (
            <Skeleton className="md:w-[250px] w-full md:h-[300px] h-[250px]" />
          ) : (
            <Image
              src={about_3}
              className="md:w-[250px] w-full md:h-[300px] h-[250px]"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-[400px] w-full">
        <div className="md:text-5xl text-4xl">
          <h1 className="uppercase font-light text-[#777]">About</h1>
        </div>
        <div>
          UrbanCraft is a leader in innovative construction solutions, committed
          to blending sustainability with exceptional craftsmanship. We
          specialize in residential, commercial, and industrial projects,
          delivering high-quality structures that meet today's needs and
          anticipate tomorrow's demands. Our dedicated team focuses on creating
          impactful, eco-friendly spaces that enhance communities and promote a
          greener future. Join us in building a better, more sustainable world.
        </div>
        <Link to="/about">
          <div className="bg-white flex items-center justify-center gap-4 uppercase font-light w-[200px] h-[70px]">
            Read More <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Skeleton = ({ className }) => {
  return <div className={`${className} bg-[#c4c4c4] animate-pulse`}></div>;
};

const Image = ({ src, className }) => {
  return (
    <div className={`${className} bg-[#c4c4c4]`}>
      <img className="h-full w-full object-cover" src={src} alt="" />
    </div>
  );
};

export default About;
