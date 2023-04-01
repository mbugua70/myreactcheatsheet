import React from "react";

const Box = (props) => {
  // example below is the use of props as our intial state value
  // const [boxon, setBoxon] = React.useState(props.on);

  // const styles = {
  //   backgroundColor: boxon ? "#222222" : "#cccccc",
  // };
  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
  };
  // function handleClick() {
  //   setBoxon((prev) => {
  //     return !prev;
  //   });
  // }

  return (
    <>
      {/* <p style={styles} className="boxes8" onClick={handleClick}></p> */}
      <p
        style={styles}
        className="boxes8"
        onClick={() => props.toggle(props.id)}
      ></p>
    </>
  );
};
export default Box;
