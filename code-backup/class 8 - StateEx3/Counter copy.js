import React from "react";
class Counter extends React.Component {
  state = {
    counter: 1,
  };
  incrCounterHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
    // console.log("check ", this.state.counter);
  };
  decrCounterHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    console.log("First");
    return (
      <React.Fragment>
        <h1>Counter Value... : {this.state.counter}</h1>
        <button onClick={this.incrCounterHandler}>Increment Counter</button>
        <button onClick={this.decrCounterHandler}>Decr Counter</button>
      </React.Fragment>
    );
  }
}
export default Counter;
