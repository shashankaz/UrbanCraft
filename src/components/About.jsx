import React from "react";
import { BsArrowRight } from "react-icons/bs";
import about_1 from "../assets/about_1.jpg";
import about_2 from "../assets/about_2.jpg";
import about_3 from "../assets/about_3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#fafafa] h-[400px] flex items-center justify-between px-[100px] my-[50px]">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4 pt-[70px]">
          <img
            className="w-[250px] h-[250px] object-cover bg-[#c4c4c4]"
            src={about_1}
            alt=""
          />
          <img
            className="w-[250px] h-[150px] object-cover bg-[#c4c4c4]"
            src={about_2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[250px] h-[300px] object-cover bg-[#c4c4c4]"
            src={about_3}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[400px]">
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
          <div className="bg-white flex items-center gap-4 pl-4 uppercase font-light w-[250px] h-[70px]">
            Read More <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
