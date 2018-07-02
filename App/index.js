import 'babel-polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
// import rootReducer from './reducer';
// import './assets/css/ActivateSwitch.css';
// import Routes from './routes';


// const store = configureStore({}, rootReducer);
const store = configureStore({}, {});
render(
 <Provider store={store}>
   <div>
   		hEllo
   </div>
 </Provider>,
 document.getElementById('app')
);