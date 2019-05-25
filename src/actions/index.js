import api from "../components/api/movies";

export const fetchMovies = () => {
  return async dispatch => {
    const res = await api.get("/discover/movie?");
    const response = await res.data.results.slice(0, 8);

    await dispatch({
      type: "FETCH_MOVIES",
      payload: response
    });
  };
};
