import {NavigationContainer} from '@react-navigation/native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return <NavigationContainer></NavigationContainer>;
}

export default gestureHandlerRootHOC(App);
