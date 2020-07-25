import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import UserReducer from './reducer/user.reducer';
import axios from 'axios';
import ENV from '../shared/environment/environment';

axios.defaults.baseURL = ENV.BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = STORE.getState().user.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const rootReducer = combineReducers({
  user: UserReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const middleware = applyMiddleware(thunk);
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware),
);
export const PERSISTOR = persistStore(STORE);
