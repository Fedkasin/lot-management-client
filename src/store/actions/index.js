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
  fetchHouseLots,
  fetchHouseLotsSuccess,
  fetchHouseLotsFail,
} from './houseLotsActionCreators';

import {
  updateHouseWatchLots,
  updateHouseWatchLotsSuccess,
  updateHouseWatchLotsFail,
  watchHouseLots,
  checkWatchHouseLotsState,
  watchHouseLotsTrue,
  watchHouseLotsFalse,
  removeHouseWatchJob,
} from './houseWatchLotsActionCreators';

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
  updateHouseWatchFilterApply,
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
    fetchHouseLots,
    fetchHouseLotsSuccess,
    fetchHouseLotsFail,
  },
  houseWatchLotsActions: {
    updateHouseWatchLots,
    updateHouseWatchLotsSuccess,
    updateHouseWatchLotsFail,
    watchHouseLots,
    checkWatchHouseLotsState,
    watchHouseLotsTrue,
    watchHouseLotsFalse,
    removeHouseWatchJob,
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
    updateHouseWatchFilterApply,
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
