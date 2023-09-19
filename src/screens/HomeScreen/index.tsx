import AppHeader from '@/components/AppHeader';
import MovieCard from '@/components/MovieCard';
import useMovieData from '@/hooks/useMovieData';
import {MovieType} from '@/types/Movies';
import {GenericNavigation} from '@/types/Navigation';
import * as React from 'react';
import {FlatList} from 'react-native';

const HomeScreen = (props: GenericNavigation) => {
  const {data} = useMovieData();

  function onMovieSelect(movie: MovieType) {
    props.navigation?.navigate('Details', {data: movie});
  }

  return (
    <>
      <AppHeader title="Pop Movies" onMorePress={() => {}} />

      <FlatList
        data={data}
        renderItem={({item}) => (
          <MovieCard data={item} onPress={onMovieSelect} />
        )}
        numColumns={2}
        horizontal={false}
      />
    </>
  );
};

export default HomeScreen;
