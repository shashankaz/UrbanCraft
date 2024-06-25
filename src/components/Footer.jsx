import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#2c2c2c]">
      <div className="min-h-[330px] md:px-[80px] px-[20px] py-[50px] flex flex-wrap md:gap-8 gap-6 text-white">
        <div className="uppercase w-[275px] md:text-3xl text-2xl">
          <img className="h-[150px]" src={logo} alt="" />
        </div>
        <div className="w-[275px]">
          <ul className="flex flex-col gap-4 md:text-lg">
            <li className="md:text-xl text-lg font-bold pb-2">Information</li>
            <li>
              <Link to={"/"}>Main</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/certifications"}>Certifications</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="w-[275px]">
          <ul className="flex flex-col gap-4 md:text-lg">
            <li className="md:text-xl text-lg font-bold pb-2">Contacts</li>
            <li className="flex gap-2 items-center">
              <FaLocationDot />
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
                <Link to={"https://www.facebook.com/"} target="blank">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to={"https://twitter.com/"} target="blank">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to={"https://in.linkedin.com/"} target="blank">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={"https://in.pinterest.com"} target="blank">
                  <FaPinterest />
                </Link>
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
