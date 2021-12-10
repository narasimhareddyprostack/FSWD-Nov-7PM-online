import React from "react";
class Employee extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Employee Id : {this.props.id}</h4>
        <h4>Employee Name : {this.props.name}</h4>
        <h4>Employee Name : {this.props.location[1]}</h4>
        <h4>Employee Name : {this.props.details.sal}</h4>
      </div>
    );
  }
}
export default Employee;
