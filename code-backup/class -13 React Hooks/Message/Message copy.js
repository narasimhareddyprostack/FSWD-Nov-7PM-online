import React, { useState } from "react";
let Message = () => {
  let [message, setMessage] = useState("Hello");
  let gmHandler = () => {
    setMessage("Good Morning");
  };
  return (
    <>
      <h1>Message Component</h1>
      <h5>Message :{message}</h5>
      <button onClick={gmHandler}>GM</button>
      <button
        onClick={() => {
          setMessage("Good Night");
        }}
      >
        GN
      </button>
    </>
  );
};

export default Message;
