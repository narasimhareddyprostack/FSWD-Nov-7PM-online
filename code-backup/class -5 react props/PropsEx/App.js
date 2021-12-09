import React from "react";
import CompA from "./PropsEx/CompA";
class App extends React.Component {
  render() {
    console.log("render method - second");
    return (
      <div>
        <h1>React Props Example</h1>
        <CompA />
      </div>
    );
  }
}
export default App;
