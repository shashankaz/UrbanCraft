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
import logo from "../assets/logo_light.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-col">
        <hr className="w-[95%] border border-black mx-auto" />
        <div className="flex flex-wrap md:gap-8 gap-6 min-h-[330px] md:px-[80px] px-[20px] py-[50px]">
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
              <li className="md:text-xl text-lg font-bold pb-2">
                Social Media
              </li>
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
      </div>
      <hr className="w-[95%] border border-black mx-auto" />
      <div className="py-[50px] flex items-center justify-between md:px-[80px] px-[20px]">
        <div>&copy; {year} | All Rights Reserved</div>
        <div className="flex gap-4">
          <Link to={"/terms"}>Terms of Use</Link>|
          <Link to={"/privacy"}>Privacy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
