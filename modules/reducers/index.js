import {combineReducers} from 'redux';

import stickyHeader from './header/header';
import catalog from './catalog/catalog';

const rootReducer = combineReducers({
    stickyHeader,
    catalog
});

export default rootReducer;
