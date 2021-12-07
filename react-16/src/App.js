import React from "react";
import Navbar from "./Navbar/Navbar";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello, App Component</h1>
        <h2>Welcome to React World</h2>
      </div>
    );
  }
}
export default App;
