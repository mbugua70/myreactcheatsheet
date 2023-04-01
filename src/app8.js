import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./component12/lesson1.";
const AppEight = () => {
  console.log("render:app");
  const [users, setUsers] = React.useState([
    {
      id: "a",
      name: "mary",
    },
    {
      id: "b",
      name: "njoki",
    },
  ]);
  const [text, setText] = React.useState("");
  const handletext = (event) => {
    setText(event.target.value);
  };
  const handleAddUser = () => {
    setUsers(users.concat({ id: uuidv4(), name: text }));
  };
  //   everytime one type into to the input field will cause the handRemove function to redefined hence causing a rerender
  //   for this problem we can use useCallback to memoize the function
  const handleRemove = React.useCallback(
    (id) => setUsers(users.filter((user) => user.id !== id)),
    [users]
  );

  return (
    <>
      <div>
        <input type="text" value={text} onChange={handletext} />
        <button type="button" onClick={handleAddUser}>
          add user
        </button>
        <List list={users} onRemove={handleRemove} />
      </div>
    </>
  );
};

export default AppEight;
