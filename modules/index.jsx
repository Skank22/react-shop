import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import RouterConnected from './router';

render(
    <AppContainer>
        <RouterConnected />
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('./router', () => {
        render(RouterConnected);
        render(require('./router'));
    })
}