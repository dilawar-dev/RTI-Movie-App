import {
  GestureResponderEvent,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import {Colors, Layout} from '@/theme';

type AppHeaderProps = {
  title: string;
  onMorePress: (event: GestureResponderEvent) => void;
  onBackPress?: (event: GestureResponderEvent) => void;
};

const AppHeader = (props: AppHeaderProps) => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <View style={Layout.row}>
          {Boolean(props.onBackPress) && (
            <TouchableOpacity onPress={props.onBackPress}>
              <Image
                style={styles.backIcon}
                source={require('@/assets/icons/arrow-left.png')}
              />
            </TouchableOpacity>
          )}
          <AppText color={Colors.white} type="Heading">
            {props.title}
          </AppText>
        </View>

        <TouchableOpacity onPress={props.onMorePress}>
          <Image source={require('@/assets/icons/more-vertical.png')} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default AppHeader;
