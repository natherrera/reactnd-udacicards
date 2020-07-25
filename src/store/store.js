// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/index';
import middleware from './middleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'deskReducer',
    'quizReducer',
    'questionReducer',
  ],
//NOTE: REVISAR
//   blacklist: [
//     'exampleReducer',
//   ],
};

const saga = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
    saga
    ),
    );

    saga.run(middleware);
let persistor = persistStore(store);


export {
  store,
  persistor,
};
