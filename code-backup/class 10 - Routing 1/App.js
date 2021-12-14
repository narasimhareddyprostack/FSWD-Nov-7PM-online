import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Industry from "./TCS/Industry";
import Services from "./TCS/Services";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/industry" element={<Industry />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
