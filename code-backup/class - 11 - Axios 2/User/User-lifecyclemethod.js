import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor method - First");
  }
  componentDidMount = () => {
    console.log("life cycle Method  - Third");
  };

  render() {
    console.log("Render method - second");
    return <div></div>;
  }
}

export default User;
