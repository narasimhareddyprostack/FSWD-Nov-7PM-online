import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactApp from "./ContactApp/ContactApp";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/contact" element={<ContactApp />} />
           
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
