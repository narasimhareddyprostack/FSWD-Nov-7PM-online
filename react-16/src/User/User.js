import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  state = {
    users: [],
  };
  getDataHanlder = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        this.setState({ users: response.data });
        console.log("Hello,Good");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.getDataHanlder}> User Data</button>
        <table className="table table-hover">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
