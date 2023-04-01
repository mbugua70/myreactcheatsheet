import React from "react";

const Joke = ({ setup, punchline, bolean }) => {
  const [isshown, setIsshown] = React.useState(true);
  function toggle() {
    // console.log(isshown);
    setIsshown((prev) => !prev);
  }
  return (
    <>
      <p>setup:{setup}</p>
      {/* the use of conditional rendering */}
      {/* <p>punchline:{punchline}</p> */}
      {isshown && <p>punchline:{punchline}</p>}
      <p>{bolean}</p>
      {/* using conditional rendering and ternary operator */}
      {/* {isshown && (
        <button type="button" onClick={toggle}>
          Hide
        </button>
      )}
      {!isshown && (
        <button type="button" onClick={toggle}>
          Show
        </button>
      )} */}
      <button type="button" onClick={toggle}>
        {isshown ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default Joke;
