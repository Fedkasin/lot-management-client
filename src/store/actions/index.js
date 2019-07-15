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
  setSortHouseLots,
} from './houseLotsActionCreators';

import {
  updateHouseWatchLots,
  updateHouseWatchLotsSuccess,
  updateHouseWatchLotsFail,
  pauseAllJobs,
  checkWatchHouseLotsState,
  watchHouseLotsTrue,
  watchHouseLotsFalse,
  checkWatchHouseLotsStateFail,
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
  addRoomCount,
} from './houseLotsFilterActionCreators';

import {
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutSuccess,
  logoutFail,
} from './authActionCreators';

import {
  updateHouseWatchFilterPriceTo,
  updateHouseWatchFilterPriceFrom,
  addWatchRoomCount,
  updateHouseWatchFilterApply,
} from './houseWatchLotsFilterActionCreators';

import {
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileFail,
  setDeviceStatus,
  setGlobalNotifyStatus,
  setLocalNotifyStatus,
} from './profileActionCreators';

export default {
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
    setSortHouseLots,
  },
  houseWatchLotsActions: {
    updateHouseWatchLots,
    updateHouseWatchLotsSuccess,
    updateHouseWatchLotsFail,
    pauseAllJobs,
    checkWatchHouseLotsState,
    checkWatchHouseLotsStateFail,
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
    addRoomCount,
  },
  houseWatchLotsFilterActions: {
    updateHouseWatchFilterPriceTo,
    updateHouseWatchFilterPriceFrom,
    addWatchRoomCount,
    updateHouseWatchFilterApply,
  },
  authActions: {
    login,
    loginSuccess,
    loginFail,
    logout,
    logoutSuccess,
    logoutFail,
  },
  profileActions: {
    fetchProfile,
    fetchProfileSuccess,
    fetchProfileFail,
    setDeviceStatus,
    setGlobalNotifyStatus,
    setLocalNotifyStatus,
  },
};
