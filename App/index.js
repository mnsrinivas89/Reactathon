import 'babel-polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import rootReducer from './reducer';
import './css/app.css';
import Routes from './routes';

 const store = configureStore({}, rootReducer);
render(
 <Provider store={store}>
   <Routes />
 </Provider>,
 document.getElementById('app')
);