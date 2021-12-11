import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Hello",
    name: "",
  };
  updateMessage = (value) => {
    console.log(value);
    this.setState({ message: value.msg });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Message Component</h3>
        <h4>Message : {this.state.message}</h4>

        <button
          onClick={this.updateMessage.bind(this, { msg: "Good Morning" })}
        >
          GM
        </button>
        <button onClick={this.updateMessage.bind(this, "Good Afternoon")}>
          GA
        </button>
        <button onClick={this.updateMessage.bind(this, "Good Night")}>
          GN
        </button>
      </React.Fragment>
    );
  }
}

export default Message;
