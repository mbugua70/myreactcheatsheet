import React from "react";
import Item from "./lesson4";
const UserProps = ({ list, onUpdateName }) => {
  return (
    <>
      <div>
        <ul>
          {list.map((item) => {
            // return <li key={item.id}>{item.name}</li>;
            return (
              <Item key={item.id} item={item} onUpdateName={onUpdateName} />
            );
          })}

          {}
        </ul>
      </div>
    </>
  );
};

export default UserProps;
