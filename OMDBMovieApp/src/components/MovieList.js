import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MovieCard from './MovieCard'; // Adjust the path

const MovieList = ({ movies }) => {
  return (
    <ScrollView contentContainerStyle={movies && movies.length > 0 ? {} : styles.emptyContainer}>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.noMoviesText}>No Movies Available</Text>
        </View>
      )}
    </ScrollView>
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

export default MovieList;
