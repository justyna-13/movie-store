import React, { Component } from "react";

import Tiles from "../Tiles/Tiles";
import Cart from "../Cart/Cart.js";
import "./Home.css";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    if (this.props.movie !== null) {
      return (
        <div className="mainView">
          <Cart />
          <Tiles />
        </div>
      );
    } else {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Home);
