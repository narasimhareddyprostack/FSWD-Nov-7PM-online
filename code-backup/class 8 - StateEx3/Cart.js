import React, { Component } from "react";

class Cart extends Component {
  state = {
    product_Name: "MSI GF63 Thin Core i5 10th Gen - (8 GB)",
    product_Price: 53990,
    image:
      "https://rukminim1.flixcart.com/image/224/224/ko7idu80/computer/x/l/i/gf63-thin-10scxr-1616in-notebook-msi-original-imag2q55h6w2avfr.jpeg?q=90",
    qty: 2,
  };
  incrHanlder = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="bg-primary">
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.product_Name}</td>

                  <td>
                    <img src={this.state.image} height="80px" />
                  </td>
                  <td>{this.state.product_Price}</td>

                  <td>
                    <i class="fa fa-minus-circle" onClick={this.decHandler}></i>
                    {this.state.qty}
                    <i class="fa fa-plus-circle" onClick={this.incrHanlder}></i>
                  </td>

                  <td>{this.state.product_Price * this.state.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
