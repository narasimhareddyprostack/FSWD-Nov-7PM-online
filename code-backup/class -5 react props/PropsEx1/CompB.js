import React from "react";
class CompB extends React.Component {
  render() {
    return (
      <div>
        <h5>Component B</h5>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee Id = {this.props.id}</h3>
        <h4>Location:{this.props.loc[0]}</h4>
        <h4>Employee Name:{this.props.details.name}</h4>
      </div>
    );
  }
}

export default CompB;
