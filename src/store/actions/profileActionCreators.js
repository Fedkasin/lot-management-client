import {
  LOAD_PROFILE, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAIL,
} from '../../constants/Actions';

export const fetchProfile = () => ({
  type: LOAD_PROFILE,
});

export const fetchProfileSuccess = profile => ({
  type: LOAD_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFail = err => ({
  type: LOAD_PROFILE_FAIL,
  error: err,
});
