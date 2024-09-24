import React, { useState, useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { BookmarkContext } from '../providers/BookmarkProvider'; // Adjust path

const BookmarkScreen = () => {
  // const bookmarks = useSelector((state) => state.bookmarks);
  const { state, dispatch } = useContext(BookmarkContext); 

  return (
    <View style={state.bookmarks.length === 0?styles.emptyContainer:styles.container}>
      {state.bookmarks.length === 0 ? (
        <Text style={styles.noMoviesText}>No bookmarks added yet.</Text>
      ) : (
        <FlatList
          data={state.bookmarks}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.imdbID}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noMoviesText: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default BookmarkScreen;
