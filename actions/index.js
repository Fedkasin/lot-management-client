import {
    fetchLots,
    fetchLotsSuccess,
    fetchLotsFail,
} from './lotsActionCreators';

import {
    fetchSettings,
    fetchSettingsSuccess,
    fetchSettingsFail,
} from './settingsActionCreators';

 export default {
    rootActions: {},
    lotsActions: {
        fetchLots,
        fetchLotsSuccess,
        fetchLotsFail,
    },
    settingsActions: {
        fetchSettings,
        fetchSettingsSuccess,
        fetchSettingsFail,
    }
 }