import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#333]">
      <InfinitySpin
        visible={true}
        width="200"
        color="#fff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
