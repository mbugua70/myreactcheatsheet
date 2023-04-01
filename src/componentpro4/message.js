import React from "react";

const Message = () => {
  const [message, setMessage] = React.useState(["a", "b"]);
  return (
    <>
      <div>
        {message.length === 0 && <h1>you are all caught up</h1>}
        {message.length === 1 ? (
          <h1> you have a message</h1>
        ) : (
          <h1>you have {message.length} message</h1>
        )}
      </div>
    </>
  );
};

export default Message;
