import {
  FETCH_PROFILE, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL,
} from '../../constants/Actions';

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFail = err => ({
  type: FETCH_PROFILE_FAIL,
  error: err,
});
