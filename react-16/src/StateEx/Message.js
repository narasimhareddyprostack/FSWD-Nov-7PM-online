import React from "react";
class Message extends React.Component {
  state = {
    message: "Hello",
  };
  emp = { name: "Rahul Gandhi" };
  //message = "Hello";
  updateMessage = () => {
    console.log("Test case 123");
    this.setState({ message: "Good Morning" });
  };
  render() {
    return (
      <div>
        <pre>{this.emp}</pre>
        <pre>{JSON.stringify(this.state)}</pre>
        <suchitra>{JSON.stringify(this.state)}</suchitra>
        <h4>Message Component</h4>
        <h3>Message:{this.state.message}</h3>
        <button onClick={this.updateMessage}>Good Morning</button>
      </div>
    );
  }
}

export default Message;
