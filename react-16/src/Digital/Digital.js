import React, { useState, useEffect } from "react";

let Digital = () => {
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("Final");
    };
  }, []);
  return (
    <div>
      <h4>{currentTime}</h4>
    </div>
  );
};

export default Digital;
