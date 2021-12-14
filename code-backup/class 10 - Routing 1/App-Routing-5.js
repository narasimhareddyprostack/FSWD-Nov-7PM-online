import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Industry from "./TCS/Industry";
import Services from "./TCS/Services";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/industry" component={Industry} />
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
