import { combineReducers } from 'redux';

import rootReducers from './rootReducers';
import carLotsReducers from './carLotsReducers';
import houseLotsReducers from './houseLotsReducers';
import houseFilterReducers from './houseFilterReducers';
import houseFilterLiveReducers from './houseFilterLiveReducers';
import settingsReducers from './settingsReducers';
import authReducers from './authReducers';

export default combineReducers({
  rootReducers,
  carLotsReducers,
  houseLotsReducers,
  houseFilterReducers,
  houseFilterLiveReducers,
  settingsReducers,
  authReducers,
});
