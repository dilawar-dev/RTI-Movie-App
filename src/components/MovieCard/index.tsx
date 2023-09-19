import {Fonts} from '@/theme';
import {MovieType} from '@/types/Movies';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export interface MovieCardProps {
  data: MovieType;
  onPress: (movie: MovieType) => void;
}

const MovieCard = (props: MovieCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.onPress(props.data)}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w185/${props.data.poster_path}`,
        }}
        style={styles.image}
        resizeMethod="resize"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Fonts.WP(50),
    height: 280,
  },
});

export default MovieCard;
