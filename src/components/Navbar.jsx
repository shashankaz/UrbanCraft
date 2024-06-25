import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="h-[100px] md:px-[80px] px-[20px] flex items-center justify-between">
      <div className="md:text-3xl text-2xl uppercase">
        <Link to={"/"}>UrbanCraft</Link>
      </div>
      <div>
        <ul className="md:flex hidden text-[#333] uppercase gap-10">
          <li className="px-[5px]">
            <NavLink to={"/"}>Main</NavLink>
          </li>
          <li className="px-[5px]">
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li className="px-[5px]">
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li className="px-[5px]">
            <NavLink to={"/certifications"}>Certifications</NavLink>
          </li>
          <li className="px-[5px]">
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex text-2xl">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;