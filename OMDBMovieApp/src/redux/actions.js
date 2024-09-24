export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const SET_LOADING = 'SET_LOADING';
import MovieRepository from '../repository/MovieRepository';

export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const addBookmark = (movie) => ({
  type: ADD_BOOKMARK,
  payload: movie,
});

export const removeBookmark = (id) => ({
  type: REMOVE_BOOKMARK,
  payload: id,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const searchMovies = (searchTerm, page = 1) => async (dispatch) => {
  dispatch(setLoading(true));
  await new Promise(resolve => setTimeout(resolve, 500)); // Add 500ms delay
  
  const movies = await MovieRepository.fetchMovies(searchTerm, page);
  dispatch(fetchMovies(movies));
  dispatch(setLoading(false));
};
