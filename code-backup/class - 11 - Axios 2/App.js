import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User/User";
import Photo from "./Photos/Photo";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/userapi" element={<User />} />
            <Route path="/photo" element={<Photo />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
