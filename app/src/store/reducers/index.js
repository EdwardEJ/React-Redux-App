import {
  FETCH_FILMS,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR,
} from '../actions'

const initialState = {
  films: [],
  loadingFilms: true,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS: {
      return {
        ...state,
      }
    }
    case FETCH_FILMS_SUCCESS: {
      return {
        ...state,
        films: action.payload
      }
    }
    default:
      return state
  }
}