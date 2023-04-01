import React from "react";
import Counter from "./Counter";

const PracticeThree = () => {
  //   const state = React.useState("yes");
  //   const [isImportant, setisImportant] = React.useState("yes");
  //   function handleClick() {
  //     setisImportant("no");
  //   }

  const [counter, setcounter] = React.useState(0);
  function addCount() {
    // setcounter(counter + 1);
    // using callback function instead
    setcounter((prevCount) => prevCount + 1);
  }
  function reduceCount() {
    // setcounter(counter - 1);
    // using callback function instead.
    setcounter((prevCount) => prevCount - 1);
  }
  return (
    <>
      {/* <div className="usestate">
        <h3 className="state--title">Is state important to know?</h3>
        <p className="state--value" onClick={handleClick}>
          {isImportant}
        </p>
      </div> */}
      <div className="counter">
        <button className="counter--decrease" onClick={reduceCount}>
          -
        </button>
        {/* replacing below code with a component */}
        <Counter number={counter} />
        {/* <p className="counter--value">{counter}</p> */}
        <button className="counter--increase" onClick={addCount}>
          +
        </button>
      </div>
    </>
  );
};

export default PracticeThree;
