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
  pauseHouseWatchJob,
  resumeHouseWatchJob,
  editHouseWatchJobList,
} from './houseWatchLotsActionCreators';

import {
  updateHouseFilterRoomsTo,
  updateHouseFilterRoomsFrom,
  updateHouseFilterPriceTo,
  updateHouseFilterPriceFrom,
} from './houseLotsFilterActionCreators';

import {
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutSuccess,
  logoutFail,
  showFirstSplashScreen,
} from './authActionCreators';

import {
  updateHouseWatchFilterRoomsTo,
  updateHouseWatchFilterRoomsFrom,
  updateHouseWatchFilterPriceTo,
  updateHouseWatchFilterPriceFrom,
  updateHouseWatchFilterApply,
} from './houseWatchLotsFilterActionCreators';

import {
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileFail,
} from './profileActionCreators';

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
    pauseHouseWatchJob,
    resumeHouseWatchJob,
    editHouseWatchJobList,
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
  authActions: {
    login,
    loginSuccess,
    loginFail,
    logout,
    logoutSuccess,
    logoutFail,
    showFirstSplashScreen,
  },
  profileActions: {
    fetchProfile,
    fetchProfileSuccess,
    fetchProfileFail,
  },
};
