import React from "react";
// import image from "../images/favicon.ico";
import Star from "./start";

const Card = () => {
  const [name, setName] = React.useState({
    firstName: "john",
    lastName: "mbugua",
    phone: "+254 728781720",
    email: "johnmbugua23code@gmail.com",
    isImage: true,
  });

  // let imageIcon = name.isImage ? image : null;

  function toggleButton() {
    setName((prev) => {
      return {
        ...prev,
        isImage: !prev.isImage,
      };
    });
  }

  return (
    <article>
      {/* we will move the image below into its own image called Star */}
      {/* <img width="40px" src={imageIcon} alt="myicon" onClick={toggleButton} /> */}
      <Star isFilled={name.isImage} handleClick={toggleButton} />
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <address>{name.phone}</address>
      <p>{name.email}</p>
    </article>
  );
};

export default Card;
