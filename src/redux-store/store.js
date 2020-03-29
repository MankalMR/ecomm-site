import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewareArray = [];

if (process.env.NODE_ENV === 'development') {
    middlewareArray.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewareArray));

export default store;