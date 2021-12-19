import React, { useState } from "react";
let Message = () => {
  let [state, setState] = useState({ message: "Hello" });
  //let [size,setSize] = useState([1,2,3])
  let gmHandler = () => {
    setState({ message: "Good Morning" });
  };
  return (
    <>
      <h1>Message Component</h1>
      <h5>Message :{state.message}</h5>
      <button onClick={gmHandler}>GM</button>
      <button
        onClick={() => {
          setState({ message: "Good Night" });
        }}
      >
        GN
      </button>
    </>
  );
};

export default Message;
