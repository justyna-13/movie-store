import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

class Movie extends Component {
  render() {
    const movieList = this.props.movies.map(movie => {
      const url = "https://image.tmdb.org/t/p/w500";

      return (
        <div className="col s12 m4 l3" key={movie.id}>
          <div className="card large ">
            <div className="card-image ">
              <img src={url + movie.poster_path} alt={movie.original_title} />{" "}
            </div>{" "}
            <div className="card-content">
              <p className="header"> {movie.title} </p>{" "}
              <p> {movie.release_date} </p>{" "}
            </div>{" "}
            <div className="card-action">
              <button
                className="btn small"
                onClick={e => this.props.handleAddToCart(e, movie)}
              >
                Add To Cart{" "}
              </button>{" "}
              <Link to={"/selected/" + movie.id}>
                <button className="btn small"> Details </button>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      );
    });

    return <div className="col s12 m10 row movieTile"> {movieList} </div>;
  }
}

export default Movie;
