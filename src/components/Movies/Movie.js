import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Movie.css";
import Button from "../Button";

class Movie extends Component {
  render() {
    const movieList = this.props.movies.map(movie => {
      const url = "https://image.tmdb.org/t/p/w154";

      return (
        <div className="singleMovie card" key={movie.id}>
          <img src={url + movie.poster_path} alt={movie.original_title} />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <Button />
          <Link to={"/selected/" + movie.id}>
            <button className="btn">Details</button>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <div className="movieTile">{movieList} </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
export default connect(mapStateToProps)(Movie);
