import React, { useEffect, useState } from "react";

const Scrollbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-white overflow-hidden z-50">
      <div
        className="h-full bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 transition-width duration-100 ease-out"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default Scrollbar;
