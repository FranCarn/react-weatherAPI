import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-36">
      <ClipLoader size={80} color={"#000"} />
    </div>
  );
};

export default Loader;
