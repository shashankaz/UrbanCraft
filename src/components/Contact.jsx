import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="my-[50px] flex flex-col">
      <div className="text-5xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">Contact Us</h1>
      </div>
      <div>
        <form className="flex flex-col gap-4 w-[500px]">
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="number"
            placeholder="Phone Number*"
            required
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="email"
            placeholder="Email*"
            required
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="text"
            placeholder="Interested In"
          />
          <textarea
            className="bg-[#f3f3f3] py-3 px-5"
            placeholder="Message*"
            required
            rows={5}
            style={{ resize: "none" }}
          ></textarea>
          <button>
            <div className="bg-[#333] text-white flex items-center justify-center gap-4 uppercase font-light w-[220px] h-[70px] mt-[50px]">
              Send Email <BsArrowRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
