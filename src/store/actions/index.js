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
  pauseAllJobs,
  checkWatchHouseLotsState,
  watchHouseLotsTrue,
  watchHouseLotsFalse,
  removeHouseWatchJob,
  pauseHouseWatchJob,
  resumeHouseWatchJob,
  editHouseWatchJobList,
  checkPausedHouseLotsTrue,
  checkPausedHouseLotsFalse,
} from './houseWatchLotsActionCreators';

import {
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
  updateHouseWatchFilterPriceTo,
  updateHouseWatchFilterPriceFrom,
  addRoomCount,
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
    pauseAllJobs,
    checkWatchHouseLotsState,
    watchHouseLotsTrue,
    watchHouseLotsFalse,
    removeHouseWatchJob,
    pauseHouseWatchJob,
    resumeHouseWatchJob,
    editHouseWatchJobList,
    checkPausedHouseLotsTrue,
    checkPausedHouseLotsFalse,
  },
  houseLotsFilterActions: {
    updateHouseFilterPriceTo,
    updateHouseFilterPriceFrom,
  },
  houseWatchLotsFilterActions: {
    updateHouseWatchFilterPriceTo,
    updateHouseWatchFilterPriceFrom,
    addRoomCount,
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
