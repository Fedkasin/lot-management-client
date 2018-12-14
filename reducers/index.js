import { combineReducers } from 'redux';

import rootReducers from './rootReducers';
import lotsReducers from './lotsReducers';
import settingsReducers from './settingsReducers';

export default combineReducers({
    rootReducers,
    lotsReducers,
    settingsReducers,
});