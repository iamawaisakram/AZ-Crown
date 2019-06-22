/*
 *
 * sensor reducer
 *
 */

import {
  USER_LOGIN,
  USER_SIGNUP,
  RESET_PASSWORD,
  GET_USER,
  UPDATE_CURRENT_USER
} from './actionTypes';

export const initialState = {
  loading: false,
  currentUser: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${GET_USER}_PENDING`:
      return { ...state, loading: true };
    case `${GET_USER}_FULFILLED`:
      return { ...state, loading: false, currentUser: payload };
    case `${GET_USER}_REJECTED`:
      return { ...state, loading: false, error: payload };

    case `${USER_LOGIN}_PENDING`:
      return { ...state, loading: true };
    case `${USER_LOGIN}_FULFILLED`:
      return { ...state, loading: false, currentUser: payload };
    case `${USER_LOGIN}_REJECTED`:
      return { ...state, loading: false, error: payload };

    case `${USER_SIGNUP}_PENDING`:
      return { ...state, loading: true };
    case `${USER_SIGNUP}_FULFILLED`:
      return { ...state, loading: false };
    case `${USER_SIGNUP}_REJECTED`:
      return { ...state, loading: false, error: payload };

    case `${UPDATE_CURRENT_USER}_PENDING`:
      return { ...state, loading: true };
    case `${UPDATE_CURRENT_USER}_FULFILLED`:
      return { ...state, loading: false, currentUser: payload };
    case `${UPDATE_CURRENT_USER}_REJECTED`:
      return { ...state, loading: false, error: payload };

    case `${RESET_PASSWORD}_PENDING`:
      return { ...state, loading: true };
    case `${RESET_PASSWORD}_FULFILLED`:
      return { ...state, loading: false };
    case `${RESET_PASSWORD}_REJECTED`:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default userReducer;
