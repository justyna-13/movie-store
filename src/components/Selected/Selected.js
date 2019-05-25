import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";

import Cart from "../Cart/Cart.js";
import Button from "../Button";

class Selected extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.props.fetchMovies();

    let id = this.props.match.params.id;

    let selectedMovie = this.props.movies.filter(el => {
      return el.id == id;
    });
    this.setState({ movies: selectedMovie[0] });
  }

  handleCart = () => {
    console.log("Added id: ", this.state.movies.id);
  };

  render() {
    if (this.state.movies) {
      return (
        <div style={{ display: "flex" }}>
          <Cart />
          <div style={{ maxWidth: "750px" }} className="card">
            <img
              src={
                "https://image.tmdb.org/t/p/w154" +
                this.state.movies.poster_path
              }
              alt="cos"
            />
            <h2>{this.state.movies.title}</h2>
            <h3>{this.state.movies.overview}</h3>
            <Button addToCart={this.handleCart} />
          </div>
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
)(Selected);
