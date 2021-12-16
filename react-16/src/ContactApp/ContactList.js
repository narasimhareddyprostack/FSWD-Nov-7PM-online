import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div class="container">
          <div class="row">
            <div class="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email Id</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts.map((contact) => {
                    return (
                      <tr key={contact.login.uuid}>
                        <td>{contact.login.uuid.substring(32)}</td>
                        <td>{contact.name.first + " " + contact.name.last}</td>
                        <td>{contact.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
