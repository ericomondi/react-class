import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent: React.FC = () => {
  const [testState, setTestState] = useState([
    {
      name: "some name",
    },
  ]);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div>
        <p>Home Component</p>
        <h1>Welcome to Our Website!</h1>
        <p>This is the home page of our website. Feel free to explore!</p>

        <nav>
          <button onClick={handleClick}>About us </button>
        </nav>
      </div>
    </>
  );
};

export default HomeComponent;
