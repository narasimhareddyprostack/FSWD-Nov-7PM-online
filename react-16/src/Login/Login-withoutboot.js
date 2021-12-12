import React, { Component } from "react";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  updateEmailHandler = (event) => {
    /* console.log(event);
    console.log(event.target);
    console.log(event.target.value); */
    this.setState({ email: event.target.value });
  };
  updatePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <label>Email:</label>
          <input type="text" onChange={this.updateEmailHandler} /> <br />
          <label>Pasword:</label>
          <input type="text" onChange={this.updatePasswordHandler} />
          <br />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default Login;
