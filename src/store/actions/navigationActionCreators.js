import { NAVIGATE, NAVIGATE_DEEP, RESET } from '../../constants/Actions';

export const navigate = (routeName = null, params = null, key = null) => ({
  type: NAVIGATE,
  payload: { routeName, params, key },
});

export const navigateDeep = (routeName = null, params = null) => ({
  type: NAVIGATE_DEEP,
  payload: { routeName, params },
});

export const reset = (routeName = null, params = null) => ({
  type: RESET,
  payload: { routeName, params },
});
