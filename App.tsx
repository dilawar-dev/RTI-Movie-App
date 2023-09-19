import Navigation from '@/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@/store';

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
}

export default gestureHandlerRootHOC(App);
