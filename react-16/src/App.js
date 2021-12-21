import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Form/Login";
import Digital from "./Digital/Digital";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/form" element={<Login />} />
            <Route path="/clock" element={<Digital />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
