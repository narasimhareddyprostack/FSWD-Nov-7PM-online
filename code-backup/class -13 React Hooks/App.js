import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/message" element={<Message />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
