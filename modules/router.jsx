import React, {type Node} from 'react';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';

import configureStore, {history} from './libs/configureStore';

//import {App} from './containers/app';
import {Home} from './containers/home';
import Catalog from './containers/catalog';

const store = configureStore();

/**
 * React Router
 * @returns {Node} Return current route
 */
const RouterConnected = (): Node => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/catalog" component={Catalog} />
            </Switch>
        </Router>
    </Provider>
);

export default RouterConnected;