import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: {},
    };
  }
  getSelectedContact = (contact) => {
    console.log(contact.name.first);
    this.setState({ selectedContact: contact });
  };
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
        <h1>Contact App</h1>
        {/*   <pre>{JSON.stringify(this.state)}</pre> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {this.state.contacts.length > 0 ? (
                <React.Fragment>
                  <ContactList
                    contacts={this.state.contacts}
                    selectedContactMethod={this.getSelectedContact}
                  />
                </React.Fragment>
              ) : null}
            </div>
            <div className="col-md-4">
              {Object.keys(this.state.selectedContact).length > 0 ? (
                <>
                  <ContactDetails contact={this.state.selectedContact} />
                </>
              ) : null}
            </div>
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
