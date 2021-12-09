import React from "react";
import CompB from "./CompB";
class CompA extends React.Component {
  employee_Id = 101;
  employee_PreferredLoc = ["Bangalore", "USA"];
  employee_Details = { name: "Rahul Gandhi", sal: 45000 };
  render() {
    return (
      <div>
        <h1>Component A</h1>
        <h4>Employee Id {this.employee_Id}</h4>
        <h4>Employee Name:{this.employee_Details.name}</h4>
        <hr />
        <CompB
          id={this.employee_Id}
          loc={this.employee_PreferredLoc}
          details={this.employee_Details}
        />
      </div>
    );
  }
}

export default CompA;
