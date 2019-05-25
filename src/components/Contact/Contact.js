import React, { Component } from "react";

import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <i className="material-icons person">person</i>
        <h1>CONTACT</h1>
        <p>mail@mail.pl</p>
        <a href="tel: 123-456-789">tel. 123-456-789</a>
        <p>tel. 123-456-789</p>
        <p>ul.Domak</p>
        <p>00-000 Wrocław</p>
      </div>
    );
  }
}
