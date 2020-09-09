import {
  FETCH_FILMS,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR,
  fetchFilms
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
    default:
      return state
  }
}