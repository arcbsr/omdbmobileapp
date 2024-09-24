// store.js
import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './reducers'; // Assuming you have a movieReducer

const store = configureStore({
  reducer: movieReducer, // Add your reducer(s)
  // Middleware is included by default, including `redux-thunk`, so no need to manually apply it
});

export default store;
