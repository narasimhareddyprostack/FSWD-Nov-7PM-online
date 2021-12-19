import React, { Component } from "react";

class ContactDetails extends Component {
  render() {
    return (
      <div>
        {/*  <pre>{JSON.stringify(this.props)}</pre> */}
        <h1>Contact Details</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <img src={this.props.contact.picture.medium} />
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{this.props.contact.email}</li>
                    <li class="list-group-item">
                      {this.props.contact.location.country}
                    </li>
                    <li class="list-group-item">
                      {this.props.contact.dob.age}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
