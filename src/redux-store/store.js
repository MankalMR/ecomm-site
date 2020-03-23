import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewareArray = [logger];

const store = createStore(reducers, applyMiddleware(...middlewareArray));

export default store;