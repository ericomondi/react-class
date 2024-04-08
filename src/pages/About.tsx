import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckLoginStatus from "../store/RouteAuth";

function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <CheckLoginStatus />
      <div>This is about us! </div>
      <button onClick={handleClick}>home </button>
    </>
  );
}

export default About;
