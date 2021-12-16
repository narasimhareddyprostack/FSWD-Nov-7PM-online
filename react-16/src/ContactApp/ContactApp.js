import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount = () => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        console.log(response.data);
        this.setState({ contacts: response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ContactList contacts={this.state.contacts} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactApp;
/*
API Name: https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist

Method: GET 
Type: Public 
*/
