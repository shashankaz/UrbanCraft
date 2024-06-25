import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="md:px-[80px] px-[20px]">
      <Hero />
      <About />
      <Mission />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
