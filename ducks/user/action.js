/*
 *
 * user actions
 *
 */
import AsyncStorage from '@react-native-community/async-storage';

//Keys
import {
  USER_LOGIN,
  USER_SIGNUP,
  RESET_PASSWORD,
  GET_USER,
  UPDATE_CURRENT_USER
} from './actionTypes';

export const getUserByToken = (client, token) => ({
  type: GET_USER
});

export const login = (client, data) => ({
  type: USER_LOGIN
});

export const signup = (client, data) => ({
  type: USER_SIGNUP
});

export const updateUser = (client, userId, userInput) => ({
  type: UPDATE_CURRENT_USER
});

export const forgotPassword = (client, email) => ({
  type: RESET_PASSWORD
});
