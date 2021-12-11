import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Hello",
    name: "",
  };
  updateMessage = (value, name) => {
    this.setState({ message: value, name: name });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Message Component</h3>
        <h4>Message : {this.state.message}</h4>
        <h5>Name:{this.state.name}</h5>
        <button
          onClick={this.updateMessage.bind(
            this,
            "Good Morning",
            "Rahul Gandhi"
          )}
        >
          GM
        </button>
        <button onClick={this.updateMessage.bind(this, "Good Afternoon", "")}>
          GA
        </button>
        <button onClick={this.updateMessage.bind(this, "Good Night", "")}>
          GN
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
