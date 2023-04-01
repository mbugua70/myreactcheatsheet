import React from "react";
import meme from "./smile.png";

const Header = () => {
  return (
    <header className="header6">
      <div className="flex6">
        <div className="box1">
          <img src={meme} alt="mem" />
          <h1>Meme Generator</h1>
        </div>
        <div className="box2">
          <h4>React Course-project 3</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
