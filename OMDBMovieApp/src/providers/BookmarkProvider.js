// BookmarkProvider.tsx
import React, { createContext, useReducer } from 'react';
import { movieReducer, initialState } from '../redux/reducers'; // Adjust the import based on your folder structure

// Create the context
export const BookmarkContext = createContext();

// BookmarkProvider component to wrap the app
export const BookmarkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};
