import { combineReducers } from 'redux';
import listReducers from './listReducers';

const reducers = combineReducers({
  posts: listReducers,
});

export default reducers;
