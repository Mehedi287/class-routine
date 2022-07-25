import React from "react";
import { useNavigate } from "react-router-dom";
const ClassRoutine = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/home");
  };
  return (
    <div>
      <button onClick={home} className="">
        Create a routine
      </button>
    </div>
  );
};

export default ClassRoutine;
