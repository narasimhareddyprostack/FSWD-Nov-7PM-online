import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./Counter/Counter";
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/message" element={<Message />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
