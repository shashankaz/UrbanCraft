import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import about_1 from "../assets/about_1.jpg";
import about_2 from "../assets/about_2.jpg";
import about_3 from "../assets/about_3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="bg-[#fafafa] flex md:flex-row flex-col items-center justify-between gap-8 md:px-[100px] px-[20px] my-[50px] py-[50px]">
      <div className="flex items-center gap-4">
        <div className="flex md:flex-col flex-row md:gap-4 gap-2">
          {loading ? (
            <div className="md:w-[250px] w-[50%] h-[250px] bg-[#c4c4c4] animate-pulse"></div>
          ) : (
            <div className="md:w-[250px] w-[50%] h-[250px] bg-[#c4c4c4]">
              <img
                className="h-full w-full object-cover"
                src={about_1}
                alt=""
              />
            </div>
          )}
          {loading ? (
            <div className="md:w-[250px] w-[50%] h-[250px] bg-[#c4c4c4] animate-pulse"></div>
          ) : (
            <div className="md:w-[250px] w-[50%] h-[250px] bg-[#c4c4c4]">
              <img
                className="h-full w-full object-cover"
                src={about_2}
                alt=""
              />
            </div>
          )}
        </div>
        <div>
          {loading ? (
            <div className="md:w-[250px] w-full md:h-[300px] h-[250px] bg-[#c4c4c4] animate-pulse"></div>
          ) : (
            <div className="md:w-[250px] w-full md:h-[300px] h-[250px] bg-[#c4c4c4]">
              <img
                className="h-full w-full object-cover"
                src={about_3}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-[400px] w-full">
        <div className="text-5xl">
          <h1 className="uppercase font-light text-[#777]">About</h1>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          repellendus cum consequuntur facere vel dignissimos corrupti id sed
          esse voluptate perspiciatis praesentium blanditiis, molestias rem et
          at expedita adipisci consequatur temporibus alias ullam laborum culpa
          nobis? Nihil, esse dignissimos. Vitae modi impedit aut dolorum sequi
          quo at quisquam ipsam quasi!
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

export default About;
