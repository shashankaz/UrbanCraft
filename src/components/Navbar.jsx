import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import icon from "../assets/icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="h-[100px] md:px-[80px] px-[20px] pb-2 flex items-center justify-between">
        <div className="md:text-3xl text-2xl uppercase">
          <Link to="/">
            <div className="flex items-center">
              <img className="w-8" src={icon} alt="UrbanCraft Icon" />
              UrbanCraft
            </div>
          </Link>
        </div>
        <nav className="md:flex hidden text-[#333] uppercase gap-10 stroke">
          <ul className="flex gap-10">
            <li className="px-[5px]">
              <NavLink to="/">Main</NavLink>
            </li>
            <li className="px-[5px]">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="px-[5px]">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="px-[5px]">
              <NavLink to="/certifications">Certifications</NavLink>
            </li>
            <li className="px-[5px]">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex text-2xl">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white text-[#333] uppercase z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <NavLink to="/" onClick={handleLinkClick}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={handleLinkClick}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={handleLinkClick}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" onClick={handleLinkClick}>
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" onClick={handleLinkClick}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
