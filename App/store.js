import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable no-underscore-dangle */

export default function configureStore(initialState, rootReducer) {
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 return createStore(
   rootReducer,
   initialState,
   composeEnhancers(applyMiddleware(thunk))
 );
}