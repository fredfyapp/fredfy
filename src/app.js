// ********** REACT ********** //
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';

// ********** REDUX ********** //
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';

// ********** STYLES ********** //
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// ********** DATABASE ********** //
import { firebase } from './firebase/firebase';
import database from './fixtures/json-mockup';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter database={database}/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
