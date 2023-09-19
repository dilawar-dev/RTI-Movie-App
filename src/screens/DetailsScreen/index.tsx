import AppHeader from '@/components/AppHeader';
import useMovieData from '@/hooks/useMovieData';
import {MovieType} from '@/types/Movies';
import {GenericNavigation} from '@/types/Navigation';
import * as React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import AppText from '@/components/AppText';
import {Colors} from '@/theme';
import AppButton from '@/components/AppButton';
import TrailerCard from '@/components/TrailerCard';

interface DetailsScreenProps extends GenericNavigation {
  route: {
    key: string;
    name: any;
    path?: string | undefined;
    params: {
      data: MovieType;
    };
  };
}

const DetailsScreen = (props: DetailsScreenProps) => {
  const movie = props.route.params.data;

  return (
    <View style={styles.root}>
      <AppHeader
        title="Movie details"
        onMorePress={() => {}}
        onBackPress={props.navigation?.goBack}
      />

      <View style={styles.subHeader}>
        <AppText color={Colors.white} type="Subheading">
          {movie.original_title}
        </AppText>
      </View>

      <View style={styles.details}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
          }}
          style={styles.image}
          resizeMethod="resize"
        />

        <View style={styles.metadata}>
          <View>
            <AppText color={Colors.textPrimary} type="Year">
              {movie.release_date.substring(0, 4)}
            </AppText>

            <AppText color={Colors.textPrimary} type="Time">
              {movie.vote_count} votes
            </AppText>

            <AppText
              color={Colors.textPrimary}
              type="Rating"
              style={styles.ratingText}>
              {movie.vote_average}/10
            </AppText>
          </View>

          <AppButton title="Add to Favorite" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.description}>
        <AppText color={Colors.textPrimary} type="Body">
          {movie.overview}
        </AppText>

        {movie.video && (
          <>
            <AppText
              color={Colors.textPrimary}
              type="Body"
              style={styles.trailersHeading}>
              TRAILERS
            </AppText>

            <View style={styles.divider} />

            <View style={styles.trailers}>
              <TrailerCard title="Play trailer 1" onPress={() => {}} />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default DetailsScreen;
