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
    setAddr,
} from './rootActionCreators';

import {
    fetchAuthKey,
    fetchAuthKeySuccess,
    fetchAuthKeyFail,
} from './authActionCreators';

 export default {
    rootActions: {
        setAddr,
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
        fetchAuthKey,
        fetchAuthKeySuccess,
        fetchAuthKeyFail,
    }
 }
