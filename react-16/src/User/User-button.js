import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  getUserDataHandler = () => {
    /*  Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(() => {})
      .catch(() => {}); */
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resonse) => {
        console.log(resonse.data);
      })
      .catch(() => {});
  };
  render() {
    return (
      <div>
        <h1>User Component</h1>
        <button onClick={this.getUserDataHandler}>User Data</button>
      </div>
    );
  }
}

export default User;
