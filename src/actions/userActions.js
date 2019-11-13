import * as CONST from '../utils/constants';

export function userLogin(user) {
  return {
    type: CONST.USER_LOGIN,
    user
  };
}
export function userLoginSuccess(response) {
  return {
    type: CONST.USER_LOGIN_SUCCESS,
    payload: {
      user: response.user
    }
  };
}
export function userLoginFailure(error) {
  return {
    type: CONST.USER_LOGIN_FAILURE,
  };
}

export function userLogout() {
  return {
    type: CONST.USER_LOGOUT,
  };
}

export function userLogoutSuccess() {
  return {
    type: CONST.USER_LOGOUT_SUCCESS,
  };
}

export function userLogoutFailure() {
  return {
    type: CONST.USER_LOGOUT_FAILURE,
  };
}

/**
 * Signup
 */

export function userSignup(user) {
  return {
    type: CONST.USER_SIGNUP,
    user
  };
}
export function userSignupSuccess(user) {
  return {
    type: CONST.USER_SIGNUP_SUCCESS,
    payload: {
      user: user.user
    }
  };
}
export function userSignupFailure(error) {
  return {
    type: CONST.USER_SIGNUP_FAILURE,
  };
}


/**
 * User Profile
 */

export function updateUserProfile(params, callBack) {
  return {
    type: CONST.UPDATE_USER_PROFILE,
    params,
    updateUserProfileSuccess: callBack
  };
}
export function updateUserProfileSuccess(response) {
  return {
    type: CONST.UPDATE_USER_PROFILE_SUCCESS,
    payload: {
      user: response.updateUser
    }
  };
}
export function updateUserProfileFailure() {
  return {
    type: CONST.UPDATE_USER_PROFILE_FAILURE,
  };
}

// Update User

export function updateUser(_user) {
  return {
    type: CONST.UPDATE_USER,
    _user,
  };
}