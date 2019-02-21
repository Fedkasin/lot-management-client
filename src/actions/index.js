import {
  fetchCarLots,
  fetchCarLotsSuccess,
  fetchCarLotsFail,
} from './carLotsActionCreators';

import {
  updateHouseWatchLots,
  updateHouseWatchLotsSuccess,
  updateHouseWatchLotsFail,
  fetchHouseLots,
  fetchHouseLotsSuccess,
  fetchHouseLotsFail,
} from './houseLotsActionCreators';

import {
  fetchSettings,
  fetchSettingsSuccess,
  fetchSettingsFail,
  changeSetting,
} from './settingsActionCreators';

import {
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutSuccess,
  logoutFail,
} from './authActionCreators';

export default {
  rootActions: {
  },
  carLotsActions: {
    fetchCarLots,
    fetchCarLotsSuccess,
    fetchCarLotsFail,
  },
  houseLotsActions: {
    updateHouseWatchLots,
    updateHouseWatchLotsSuccess,
    updateHouseWatchLotsFail,
    fetchHouseLots,
    fetchHouseLotsSuccess,
    fetchHouseLotsFail,
  },
  settingsActions: {
    fetchSettings,
    fetchSettingsSuccess,
    fetchSettingsFail,
    changeSetting,
  },
  authActions: {
    login,
    loginSuccess,
    loginFail,
    logout,
    logoutSuccess,
    logoutFail,
  },
};
