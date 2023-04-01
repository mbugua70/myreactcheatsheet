import React from "react";
import { ReactDOM } from "react";

const PracticeTwo = () => {
  // const thingsArray = ["Thing 1", "Thing 2"];
  const [thingsArray, setthingsArray] = React.useState(["Thing 1", "Thing 2"]);
  function addItem() {
    // const addedItem = `Thing ${thingsArray.length + 1}`;
    // thingsArray.push(addedItem);
    // console.log(thingsArray);
    setthingsArray((value) => [...value, `Thing ${value.length + 1}`]);
  }
  const date = new Date();
  const hours = date.getHours();
  function stateTest(name) {
    if (hours < 11) {
      console.log("Good morning " + name);
    }
    console.log(hours);
  }
  return (
    <>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      {thingsArray}
      <button type="button" onClick={stateTest("bob")}>
        click me
      </button>
    </>
  );
};

export default PracticeTwo;
