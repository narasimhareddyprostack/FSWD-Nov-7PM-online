import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form acclassNametion="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Id"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Password"
                  />
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
