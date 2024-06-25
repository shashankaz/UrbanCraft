import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setInterest("");
    setMessage("");
    notify();
  };

  const notify = () => toast("Thank you for contacting us!");

  return (
    <div className="my-[50px] flex flex-col">
      <div className="text-5xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">Contact Us</h1>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
        <form className="flex flex-col gap-4 md:w-[500px] w-full">
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="number"
            placeholder="Phone Number*"
            required
            max={9999999999}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="email"
            placeholder="Email*"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-[#f3f3f3] py-3 px-5"
            type="text"
            placeholder="Interested In"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <textarea
            className="bg-[#f3f3f3] py-3 px-5"
            placeholder="Message*"
            required
            rows={5}
            style={{ resize: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit}>
            <div className="bg-[#333] text-white flex items-center justify-center gap-4 uppercase font-light w-[220px] h-[70px] mt-[50px]">
              Send Email <BsArrowRight />
            </div>
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
