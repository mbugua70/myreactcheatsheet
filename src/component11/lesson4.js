import React from "react";

const Item = ({ item, onUpdateName }) => {
  const [name, setName] = React.useState(item.name);
  function handlechange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <div>
        {/* having our own input field field we will want to update our values hence we will have usestate */}
        {item.name}
        <input type="text" value={name} onChange={handlechange} />
        <button
          type="button"
          onClick={() => {
            onUpdateName(item, name);
          }}
        >
          update
        </button>
      </div>
    </>
  );
};

export default Item;
