import React, { Component } from "react";

import "./Cart.css";

export default class Cart extends Component {
  state = { number: 3, name: "sth" };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightblue" }} className="cart">
        <div>CONTACT</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Cart</p>
        <p>{this.state.name}</p>
        <p>Number: {this.state.number}</p>
      </div>
    );
  }
}
