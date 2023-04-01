import React from "react";

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { ...state, count: state.count + 1 };
//     case "DECREASE":
//       return { ...state, count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// };

// instead of using above method we can instead use payload

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_OR_DECREASE_BY":
      return state + action.by;
    default:
      throw new Error();
  }
};

const ReducerTwo = () => {
  // below we used count as a state object.
  //   const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });
  // instead of above method  we can use instead js primitive method

  const [count, dispatch] = React.useReducer(counterReducer, 0);

  const handleIncrease = () => {
    // dispatch({ type: "INCREASE" });
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: 1 });
  };
  const handleDecrease = () => {
    // dispatch({ type: "DECREASE" });
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: -1 });
  };
  return (
    <>
      <p>count:{count}</p>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
    </>
  );
};

export default ReducerTwo;
