import {
  appIsReady,
} from './rootActionCreators';

import {
  navigate,
  navigateDeep,
  reset,
} from './navigationActionCreators';

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
  updateWatchState,
} from './houseLotsActionCreators';

import {
  updateHouseFilterRoomsTo,
  updateHouseFilterRoomsFrom,
  updateHouseFilterPriceTo,
  updateHouseFilterPriceFrom,
} from './houseLotsFilterActionCreators';

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
  checkIfLoggedIn,
  showFirstSplashScreen,
} from './authActionCreators';

import {
  updateHouseWatchFilterRoomsTo,
  updateHouseWatchFilterRoomsFrom,
  updateHouseWatchFilterPriceTo,
  updateHouseWatchFilterPriceFrom,
} from './houseWatchLotsFilterActionCreators';

export default {
  rootActions: {
    appIsReady,
  },
  navigationActions: {
    navigate,
    navigateDeep,
    reset,
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
    updateWatchState,
  },
  houseLotsFilterActions: {
    updateHouseFilterRoomsTo,
    updateHouseFilterRoomsFrom,
    updateHouseFilterPriceTo,
    updateHouseFilterPriceFrom,
  },
  houseWatchLotsFilterActions: {
    updateHouseWatchFilterRoomsTo,
    updateHouseWatchFilterRoomsFrom,
    updateHouseWatchFilterPriceTo,
    updateHouseWatchFilterPriceFrom,
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
    checkIfLoggedIn,
    showFirstSplashScreen,
  },
};