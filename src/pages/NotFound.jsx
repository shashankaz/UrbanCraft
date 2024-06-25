import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="md:px-[80px] px-[20px] py-[50px] h-[80vh] flex flex-col items-center justify-center gap-4">
      <div className="md:text-5xl text-4xl flex flex-col items-center justify-center gap-4">
        <h1 className="uppercase font-light text-[#777]">404</h1>
        <h1 className="font-semibold">Page not found</h1>
      </div>
      <div>
        <p className="text-center">
          The Page you are looking for doesn't exist or an other error occurred.
          <br />
          Go back, or head over to <Link to={"/"}>URBANCRAFT</Link> to choose a
          new direction.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
