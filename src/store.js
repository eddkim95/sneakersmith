import { createStore } from 'redux';
import reducers from './client/js/reducers/index';

const store = createStore(
  reducers,
  // composeWithDevTools()
);

export default store;
