import React, { Component } from "react";
import api from "../api/movies";

export default class Selected extends Component {
  state = { movies: [], selected: [] };

  componentDidMount() {
    let id = this.props.match.params.id;

    const selectedMovie = async () => {
      await api
        .get(`/movie/${id}`)
        .then(res =>
          this.setState({
            id: id,
            selected: res.data
          })
        )
        .catch(error => console.log(error));
    };
    selectedMovie();
  }

  handleClick = async () => {
    await this.setState({ name: "ANNNNNNA" });
    console.log(this.state.name);
  };

  render() {
    if (this.state.selected) {
      return (
        <div style={{ display: "flex" }}>
          <div
            className="container"
            style={{ maxWidth: "750px", marginTop: "30px" }}
          >
            <div className="col s12 m6 l4">
              <div className="card horizontal">
                <div className="card-image">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w154" +
                      this.state.selected.poster_path
                    }
                    alt={this.state.selected.original_title}
                  />
                </div>
                <div className="card-stacked">
                  <div className="card-content ">
                    <h2 className="header">{this.state.selected.title}</h2>
                    <p className="center-align ">
                      {this.state.selected.release_date}
                    </p>
                    <p style={{ marginTop: "10px" }} className="center-align ">
                      {this.state.selected.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
