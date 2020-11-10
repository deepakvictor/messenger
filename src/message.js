import React from "react";

function Message({ message, username }) {
  const is_signed = username === message.username;
  return (
    <div>
      <h1>
        {message.username} : {message.message}
      </h1>
    </div>
  );
}

export default Message;
