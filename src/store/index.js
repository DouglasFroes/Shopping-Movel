import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistReducer from './persistReducer';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middleware);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
