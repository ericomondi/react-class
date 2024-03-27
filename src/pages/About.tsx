import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/")
  }
  return (
    <>
      <div>This is about us! </div>
      <button onClick={handleClick}>home      </button>
    </>
  )
}

export default About;