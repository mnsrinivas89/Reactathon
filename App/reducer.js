import { combineReducers } from 'redux';
import { HackReducer } from './reducers/HackReducer';

const rootReducer = combineReducers({
 data: HackReducer
});
export default rootReducer;