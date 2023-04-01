import React from "react";
import image from "../images/favicon.ico";

const Star = (props) => {
  let imageIcon = props.isFilled ? image : null;
  return (
    <img
      width="40px"
      src={imageIcon}
      alt="myicon"
      onClick={props.handleClick}
    />
  );
};

export default Star;
