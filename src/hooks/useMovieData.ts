import {fetchMovies} from '@/services/movies-service';
import {RootState} from '@/store';
import {setMovies, setPrefetched} from '@/store/movies';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {batch, useDispatch, useSelector} from 'react-redux';

const useMovieData = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.movies.data);
  const isPrefetched = useSelector(
    (state: RootState) => state.movies.prefetcted,
  );

  async function fetchData() {
    try {
      const data = await fetchMovies();
      batch(() => {
        dispatch(setMovies(data.results));
        dispatch(setPrefetched(true));
      });
    } catch (error) {
      Alert.alert('Oops!', 'Something went wrong!');
    }
  }

  useEffect(() => {
    if (!isPrefetched) {
      fetchData();
    }
  }, [isPrefetched]);

  return {data};
};

export default useMovieData;
