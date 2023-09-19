import {
  GestureResponderEvent,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from '../AppText';
import styles from './styles';
import {Colors} from '@/theme';

type AppHeaderProps = {
  title: string;
  onMorePress: (event: GestureResponderEvent) => void;
};

const AppHeader = (props: AppHeaderProps) => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <AppText color={Colors.white} type="Heading">
          {props.title}
        </AppText>

        <TouchableOpacity onPress={props.onMorePress}>
          <Image source={require('@/assets/icons/more-vertical.png')} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default AppHeader;
