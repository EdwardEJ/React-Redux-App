import Axios from 'axios';

//ACTION TYPES
export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR";

//ACTION CREATORS
export const fetchFilms = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_FILMS });
    Axios.get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        dispatch({ type: FETCH_FILMS_SUCCESS, payload: res.data })
      })
      .catch(res => {
        console.log(res)
      })
  }
}