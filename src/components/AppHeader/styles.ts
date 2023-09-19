import {Colors, Metrics, Layout, Fonts} from '@/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    ...Layout.row,
  },
  root: {
    backgroundColor: Colors.primary,
    padding: Metrics.Spacing.Large,
  },
  backIcon: {
    marginRight: Metrics.Spacing.Small,
  },
});

export default styles;
