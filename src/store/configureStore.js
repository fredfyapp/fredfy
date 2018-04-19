import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import navigationReducer from "../reducers/navigation";
import playingReducer from "../reducers/playing";
import userReducer from "../reducers/user";
import challengeReducer from "../reducers/challenge";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: [ "navigation", "auth", "playing", "user" ],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    navigation: navigationReducer,
    playing: playingReducer,
    user: userReducer,
    challenge: challengeReducer,
  }),
);

// const store = createStore(
//   combineReducers({
//     auth: authReducer,
//     navigation: navigationReducer,
//     playing: playingReducer,
//     user: userReducer,
//     challenge: challengeReducer,
//   }),
//   composeEnhancers(applyMiddleware(thunk)),
// );
let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export let persistor = persistStore(store);

export default () => {
  return store;
};
