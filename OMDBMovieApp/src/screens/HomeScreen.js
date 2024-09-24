import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { IconButton,Text } from 'react-native-paper'; // Import IconButton for arrow icons
import SearchBar from '../components/SearchBar';
import { searchMovies, addBookmark } from '../redux/actions';
import MovieList from '../components/MovieList';
import LoadingModal from '../components/LoadingModal';
import PaginationComponent from '../components/PaginationComponent';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const [searchTerm, setSearchTerm] = React.useState('test');
  const [page, setPage] = React.useState(1);

  // Perform initial search on component mount
  useEffect(() => {
    dispatch(searchMovies(searchTerm, page));
  }, [dispatch, searchTerm, page]);

  const handleSearch = (term) => {
    console.log('Searching for:', term);
    setSearchTerm(term);
    setPage(1); // Reset to first page on new search
    dispatch(searchMovies(term, 1)); // Fetch the first page
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
      <View>
        <PaginationComponent
          page={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </View>
      <LoadingModal visible={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

export default HomeScreen;
