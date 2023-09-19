import {API_KEY} from '@env';
import axios from 'axios';

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {fetchMovies};
