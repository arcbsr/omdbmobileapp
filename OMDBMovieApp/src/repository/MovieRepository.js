import axios from 'axios';
import { processColorsInProps } from 'react-native-reanimated/lib/typescript/Colors';

const API_KEY = '666da4ed';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export default class MovieRepository {
  static async fetchMovies(searchTerm, page = 1) {
    try {
      const response = await axios.get(`${BASE_URL}&s=${searchTerm}&page=${page}`);
      return response.data.Search;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
}
