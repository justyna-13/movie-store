import React, { Component } from "react";

import Cart from "../Cart/Cart.js";
import "./Home.css";
import Movie from "../Movies/Movie";
import api from "../api/movies";

class Home extends Component {
  state = {
    movie: [],
    added: []
  };

  componentDidMount() {
    const movies = async () => {
      await api
        .get("/discover/movie?")
        .then(res =>
          this.setState({
            movie: res.data.results.slice(0, 8)
          })
        )
        .catch(error => console.log(error));
    };
    movies();
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const added = state.added;
      let productAlreadyInCart = false;

      added.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        added.push({
          ...product,
          count: 1
        });
      }
      return {
        added: added
      };
    });
  };

  render() {
    if (this.state.movie !== null) {
      return (
        <div className="row mainView">
          <Cart added={this.state.added} />{" "}
          <Movie
            movies={this.state.movie}
            handleAddToCart={this.handleAddToCart}
          />{" "}
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

export default Home;
