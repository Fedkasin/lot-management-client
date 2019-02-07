import { combineReducers } from 'redux';

import rootReducers from './rootReducers';
import carLotsReducers from './carLotsReducers';
import houseLotsReducers from './houseLotsReducers';
import settingsReducers from './settingsReducers';

export default combineReducers({
    rootReducers,
    carLotsReducers,
    houseLotsReducers,
    settingsReducers,
});
