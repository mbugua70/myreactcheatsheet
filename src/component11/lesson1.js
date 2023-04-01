import React from "react";

const initialstate = [
  {
    id: "a",
    name: "learn React",
    complete: false,
  },
  {
    id: "b",
    name: "learn Angular",
    complete: true,
  },
];
const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UN_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
const Reducerfun = () => {
  //   const counterReducer = (state, action) => {
  //     switch (action.type) {
  //       case "INCREASE":
  //         return state + 1;
  //       case "DECREASE":
  //         return state - 1;
  //       default:
  //         return state;
  //     }
  //   };
  //   const counterReducer = (person, action) => {
  //     switch (action.type) {
  //       case "CHANGE_AGE":
  //         return { ...person, age: person.age + 1 };
  //       case "CHANGE_LSTNAME":
  //         return { ...person, lastname: action.lastname };
  //       default:
  //         return person;
  //     }
  //   };
  //use of spread operator to make our immutable state to be mutable.

  //   const initialstate = {
  //     firstname: "john",
  //     lastname: "mbugua",
  //     age: 20,
  //   };

  //   const action = {
  //     // type: "CHANGE_LSTNAME",
  //     // lastname: "njeri",
  //     type: "CHANGE_AGE",
  //   };
  const [todos, dispatch] = React.useReducer(todoReducer, initialstate);

  //   const initialstate = [
  //     {
  //       id: "a",
  //       name: "learn React",
  //       complete: false,
  //     },
  //     {
  //       id: "b",
  //       name: "learn Angular",
  //       complete: true,
  //     },
  //   ];

  //   const action = {
  //     type: "UNA_TODO",
  //     id: "b",
  //   };

  const handleChange = (todo) => {
    dispatch({ type: todo.complete ? "UN_TODO" : "DO_TODO", id: todo.id });
  };

  return (
    <>
      <div>
        {/* <button
          type="button"
          onClick={() => {
            console.log(todoReducer(initialstate, action));
          }}
        >
          reducer
        </button> */}
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => {
                    handleChange(todo);
                  }}
                />
                {todo.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Reducerfun;
