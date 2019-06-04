import { combineReducers } from 'redux';

import carLotsReducers from './carLotsReducers';
import houseLotsReducers from './houseLotsReducers';
import houseFilterReducers from './houseFilterReducers';
import houseFilterLiveReducers from './houseFilterLiveReducers';
import authReducers from './authReducers';
import houseWatchLotsReducers from './houseWatchLotsReducers';
import profileReducers from './profileReducers';

export default combineReducers({
  carLotsReducers,
  houseLotsReducers,
  houseFilterReducers,
  houseFilterLiveReducers,
  authReducers,
  houseWatchLotsReducers,
  profileReducers,
});
