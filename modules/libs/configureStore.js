/* eslint-disable no-underscore-dangle, max-statements */
import {createStore, applyMiddleware, compose} from 'redux';
//import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers';
//import rootSaga from '../sagas';

//const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

/**
 * Add middleware and enable hot loading
 *
 * @param {{}} initialState State before applying middleware etc
 * @returns {{}} React store
 */
export default function configureStore(initialState) {
    let store;

    if (process.env.NODE_ENV === 'production') {
        store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(promiseMiddleware(), routerMiddleware(history)), //sagaMiddleware
        );
    } else {
        /* setup of https://github.com/zalmoxisus/redux-devtools-extension */
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            rootReducer,
            initialState,
            composeEnhancers(
                applyMiddleware(promiseMiddleware(), routerMiddleware(history)), //sagaMiddleware
            ),
        );
    }

    /* istanbul ignore next */
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        /* istanbul ignore next */
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
    });
    }

    //sagaMiddleware.run(rootSaga);
    return store;
}