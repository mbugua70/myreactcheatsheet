import React from "react";
import ListItem from "./lesson2";

// below illustrations of use useMemo

const List = React.memo(({ onRemove, list }) => {
  console.log("render:list");
  return (
    <ul>
      {list.map((item) => {
        return <ListItem key={item.id} onRemove={onRemove} item={item} />;
      })}
    </ul>
  );
});

export default List;
