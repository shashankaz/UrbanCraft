import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaPhone,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#2c2c2c]">
      <div className="min-h-[330px] md:px-[80px] px-[20px] py-[50px] flex flex-wrap md:gap-8 gap-6 text-white">
        <div className="uppercase w-[275px] md:text-3xl text-2xl">
          <img className="h-[150px]" src={logo} alt="Logo" />
        </div>
        <div className="w-[275px]">
          <ul className="flex flex-col gap-4 md:text-lg">
            <li className="md:text-xl text-lg font-bold pb-2">Information</li>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="w-[275px]">
          <ul className="flex flex-col gap-4 md:text-lg">
            <li className="md:text-xl text-lg font-bold pb-2">Contacts</li>
            <li className="flex gap-2 items-center">
              <FaMapMarkerAlt />
              123, Main Street, City Name
            </li>
            <li className="flex gap-2 items-center">
              <FaPhone />
              +91 123 456 7890
            </li>
            <li className="flex gap-2 items-center">
              <IoMail />
              admin@webmail.com
            </li>
          </ul>
        </div>
        <div className=" w-[275px]">
          <ul>
            <li className="md:text-xl text-lg font-bold pb-2">Social Media</li>
            <ul className="flex md:text-3xl text-2xl md:gap-8 gap-6 pt-4">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <hr />
      <div className="h-[69px] text-[#666] flex items-center justify-center">
        &copy; {year} All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
