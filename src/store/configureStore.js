import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import navigationReducer from '../reducers/navigation';
import playingReducer from '../reducers/playing';
import userReducer from '../reducers/user';
import challengeReducer from '../reducers/challenge';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      navigation: navigationReducer,
      playing: playingReducer,
      user: userReducer,
      challenge: challengeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
