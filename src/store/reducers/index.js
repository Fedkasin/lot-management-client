import { combineReducers } from 'redux';

import rootReducers from './rootReducers';
import carLotsReducers from './carLotsReducers';
import houseLotsReducers from './houseLotsReducers';
import houseFilterReducers from './houseFilterReducers';
import houseFilterLiveReducers from './houseFilterLiveReducers';
import authReducers from './authReducers';
import houseWatchLotsReducers from './houseWatchLotsReducers';
import profileReducers from './profileReducers';

export default combineReducers({
  rootReducers,
  carLotsReducers,
  houseLotsReducers,
  houseFilterReducers,
  houseFilterLiveReducers,
  authReducers,
  houseWatchLotsReducers,
  profileReducers,
});
