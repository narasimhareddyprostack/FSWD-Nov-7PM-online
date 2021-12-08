import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar/Navbar";
import Employee from "./Employee/Employee";
import User from "./User/User";
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor - executing - First");
  }
  render() {
    console.log("render method - second");
    return (
      <div>
        <Navbar />
        <h1>Hello, App Component</h1>
        <h2>Welcome to React World</h2>
        <hr />
        <Employee />
        <hr />
        <User />
      </div>
    );
  }
}
export default App;
