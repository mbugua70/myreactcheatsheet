import React from "react";
import "./App.css";
import boxese from "./component8/boxes";
import Box from "./component8/box";

const AppFour = () => {
  const [boxes, setBoxes] = React.useState(boxese);
  function toggle(id) {
    setBoxes((prev) =>
      // const newArray = [];
      // for (let i = 0; i < prev.length; i++) {
      //   const currentArray = prev[i];
      //   if (currentArray.id === id) {
      //     const updateArray = {
      //       ...currentArray,
      //       on: !currentArray.on,
      //     };
      //     newArray.push(updateArray);
      //   } else {
      //     newArray.push(currentArray);
      //   }
      // }
      // return newArray;
      // using the map method to do the above task.

      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  //   const styles = {
  //     backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  //   };
  const boxElement = boxes.map((item) => (
    <Box on={item.on} toggle={toggle} id={item.id} />
    // another way to pass an id above could be as follows below
    //  toggle = {()=> toggle(item.id)}
    // the on Box component you will only pass toggle function as a prop
  ));

  return (
    <>
      <main>
        <div>
          <h1>display of boxes will be here</h1>

          <div className="flex8">
            {/* {boxes.map((item) => {
            return <p style={styles} key={item.id} className="boxes8"></p>;
          })} */}
            {boxElement}
          </div>
        </div>
      </main>
    </>
  );
};

export default AppFour;
