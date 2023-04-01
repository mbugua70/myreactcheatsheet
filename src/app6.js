import React from "react";
import "./App.css";
import Window from "./component10/windowtrack";
const AppSix = () => {
  // const [starwars, setstarwars] = React.useState({});
  // const [count, setcount] = React.useState(1);
  // console.log("all is rendered");
  // React.useEffect(() => {
  //   console.log("Effect function currently running");
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then((res) => res.json())
  //     .then((data) => setstarwars(data));
  // }, [count]);
  // fetch("https://swapi.dev/api/people/1")
  //   .then((res) => res.json())
  //   .then((data) => setstarwars(data));

  const [show, setshow] = React.useState(true);
  function toggle() {
    setshow((prev) => !prev);
  }
  return (
    <div className="container10">
      {/* <p>{JSON.stringify(starwars, null, 2)}</p> */}
      {/* <h1> we are on count: {count}</h1>
      <button
        type="button"
        onClick={() => {
          setcount((prev) => prev + 1);
        }}
      >
        Add
      </button> */}

      {/* <button
        type="button"
        onClick={() => {
          setcount((prev) => prev + 1);
        }}
      >
        get next character
      </button> */}

      <button type="button" onClick={toggle}>
        Toggle window tracker
      </button>
      {show ? <Window /> : null}
    </div>
  );
};

export default AppSix;
