import {
  FETCH_SETTINGS, FETCH_SETTINGS_SUCCESS, FETCH_SETTINGS_FAIL, CHANGE_SETTING,
} from '../constants/Actions';

const initialState = {
  settings: [],
  isFetching: false,
  error: null,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTING: {
      const settings = [...state.settings];
      settings[action.payload.sectionIndex]
        .children[action.payload.settingType][action.payload.settingIndex].value = action.payload.value;
      return {
        ...state,
        settings: [...settings],
      };
    }
    case FETCH_SETTINGS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        isFetching: false,
      };
    case FETCH_SETTINGS_FAIL:
      return {
        ...state,
        error: action.error,
        settings: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default settingsReducer;
