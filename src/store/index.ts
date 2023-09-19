import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import movies from './movies';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies'],
};

const reducers = combineReducers({
  movies,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [ReduxThunk];

let enhancedCompose = compose;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: enhancedCompose((getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(middlewares),
  ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
