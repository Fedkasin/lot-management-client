/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagaService from '../services/sagaService';

import rootSaga from './sagas';
import reducers from './reducers';

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'test' && !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // eslint-disable-next-line global-require
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      collapsed: true,
    });
    middlewares.push(logger);
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga, sagaService);

  return store;
};

export default initStore;
