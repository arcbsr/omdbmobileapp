import { FETCH_MOVIES, ADD_BOOKMARK, REMOVE_BOOKMARK, SET_LOADING } from './actions';

export const initialState = {
  movies: [],
  bookmarks: [],
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      console.log('Removing bookmark:', state.bookmarks.filter((movie) => movie.imdbID  !== action.payload));
      console.log('Removing bookmarkss:', action.payload);
      return {
        ...state,
        bookmarks: state.bookmarks.filter((movie) => movie.imdbID  !== action.payload.imdbID),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
