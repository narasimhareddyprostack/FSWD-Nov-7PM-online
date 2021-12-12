import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  updateEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  updatePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHanlder = (event) => {
    event.preventDefault();
    //involing the back end api to login
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-4">
              <form acclassNametion="" onSubmit={this.submitHanlder}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Id"
                    onChange={this.updateEmailHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Password"
                    onChange={this.updatePasswordHandler}
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
