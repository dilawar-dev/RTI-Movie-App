import {Colors, Fonts, Layout, Metrics} from '@/theme';
import {FontType} from '@/types/Fonts';
import {StyleSheet, Text, TextProps, TouchableOpacity} from 'react-native';
import AppText from '../AppText';

export interface AppButtonProps {
  title: string;
  onPress: () => void;
}

const AppButton = (props: AppButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      style={styles.button}>
      <AppText color={Colors.white} type="ButtonText">
        {props.title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    padding: Metrics.Spacing.Regular,
    ...Layout.rowCenter,
  },
});

export default AppButton;
