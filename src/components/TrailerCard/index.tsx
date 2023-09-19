import {Colors, Fonts, Layout, Metrics} from '@/theme';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../AppText';

export interface TrailerCardProps {
  title: string;
  onPress: () => void;
}

const TrailerCard = (props: TrailerCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      style={styles.button}>
      <Image
        style={styles.icon}
        source={require('@/assets/icons/play-circle.png')}
      />
      <AppText color={Colors.textPrimary} type="ButtonText">
        {props.title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.trailer,
    ...Layout.row,
    alignItems: 'center',
    padding: Metrics.Spacing.Regular,
  },
  icon: {
    height: Fonts.RF(28),
    width: Fonts.RF(28),
    marginRight: Metrics.Spacing.Regular,
  },
});

export default TrailerCard;
