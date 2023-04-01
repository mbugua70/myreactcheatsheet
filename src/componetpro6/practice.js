import React from "react";
import image from "./3.jpg";

const Practice = () => {
  function handleChange() {
    console.log("button clicked");
  }

  function handleHover() {
    console.log("hover working");
  }
  return (
    <>
      <div className="practice6">
        <img src={image} alt="house" onMouseOver={handleHover} />
        <button type="button" className="button" onClick={handleChange}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Practice;
