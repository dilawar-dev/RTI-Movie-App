import {Colors, Fonts, Layout, Metrics} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  subHeader: {
    backgroundColor: Colors.secondary,
    padding: Metrics.Spacing.Large,
  },
  details: {
    padding: Metrics.Spacing.Mega,
    ...Layout.row,
  },
  image: {
    width: Fonts.RF(115),
    height: Fonts.RF(170),
  },
  metadata: {
    paddingLeft: Metrics.Spacing.Regular,
    flex: 1,
    justifyContent: 'space-between',
  },
  ratingText: {
    marginTop: Metrics.Spacing.Mega,
  },
  description: {
    padding: Metrics.Spacing.Mega,
    paddingTop: 0,
  },
  trailersHeading: {
    marginTop: Metrics.Spacing.Mega,
    marginBottom: Metrics.Spacing.Tiny,
  },
  divider: {
    backgroundColor: Colors.divider,
    height: Fonts.RF(2),
  },
  trailers: {
    marginTop: Metrics.Spacing.Regular,
  },
});

export default styles;
