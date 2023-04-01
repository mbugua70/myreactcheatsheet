import React from "react";
// ternary operator
const PracticeFour = () => {
  //   const isGoingOut = true;
  const [isGoingOut, setisGoingOut] = React.useState(true);
  function handleClick() {
    setisGoingOut((preValue) => !preValue);
  }
  //   let answer;
  //   isGoingOut ? (answer = "yes") : (answer = "no");
  return (
    <>
      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value" onClick={handleClick}>
          {/* <h1>{answer}</h1> */}
          {isGoingOut ? <h1>yes</h1> : <h1>no</h1>}
        </div>
      </div>
    </>
  );
};

export default PracticeFour;
