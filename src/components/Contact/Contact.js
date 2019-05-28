import React, { Component } from "react";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <i className="material-icons person">person</i>
        <h2>CONTACT</h2>
        <p>mail@mail.pl</p>
        <p>tel. 123-456-789</p>
        <p>tel. 123-456-789</p>
        <p>ul.Wrocławska</p>
        <p>00-000 Wrocław</p>
      </div>
    );
  }
}
