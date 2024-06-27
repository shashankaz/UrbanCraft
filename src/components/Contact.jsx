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
      <div className="md:text-5xl text-4xl my-[50px]">
        <h1 className="uppercase font-light text-[#777]">Contact Us</h1>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between gap-4">
        <form
          className="flex flex-col gap-4 md:w-[500px] w-full"
          onSubmit={handleSubmit}
        >
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
          <button
            className="w-[220px] h-[70px] mt-[50px] main-btn"
            type="submit"
          >
            <span>
              Send Email <BsArrowRight />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
