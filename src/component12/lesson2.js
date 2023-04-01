import React from "react";

const ListItem = React.memo(({ item, onRemove }) => {
  console.log("render:listitem");
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        remove
      </button>
    </li>
  );
});

export default ListItem;
