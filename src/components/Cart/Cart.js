import React, { Component } from "react";

import "./Cart.css";

export default class Cart extends Component {
  render() {
    const { added } = this.props;

    return (
      <div style={{ minWidth: "170px" }} className="container col s12 m6 l2">
        <div className="card">
          <div className="card-content">
            {added.length === 0 ? (
              "Basket is empty"
            ) : (
              <div>
                Cart ({added.length}) <hr />
              </div>
            )}
            {added.length > 0 && (
              <div>
                <ul>
                  {added.map(item => (
                    <li
                      style={{ marginBottom: "5px", listStyleType: "circle" }}
                      key={item.id}
                    >
                      <b>{item.title}</b>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
