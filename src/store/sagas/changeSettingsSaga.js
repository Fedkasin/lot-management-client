import { takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import {
  CHANGE_SETTING,
} from '../../constants/Actions';

function* changeSetting(action) {
  try {
    if (action.payload.settingName === 'Address') {
      yield AsyncStorage.setItem('@InputStore:Address', action.payload.value);
    }
  } catch (err) {
    yield AsyncStorage.clear();
  }
}

export default function* changeSettingSaga() {
  yield takeLatest(CHANGE_SETTING, changeSetting);
}
