import React, { Component } from "react";
import Message from "./Message/Message";
import Login from "./Login/Login";
class App extends Component {
  render() {
    return (
      <div>
        <h3>App Component</h3>
        <hr />
        <Login />
      </div>
    );
  }
}

export default App;
