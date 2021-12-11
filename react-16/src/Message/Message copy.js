import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Hello",
  };
  gmHandler = () => {
    this.setState({ message: "Good Morning" });
  };
  gaHandler = () => {
    this.setState({ message: "Good Afternoon" });
  };
  gnHandler = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Message Component</h3>
        <h4>Message : {this.state.message}</h4>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.gnHandler}>GN</button>
      </React.Fragment>
    );
  }
}

export default Message;
