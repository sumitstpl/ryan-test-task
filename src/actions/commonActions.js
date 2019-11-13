/**
 * @author Systango Technologies
 * Date: Oct 23, 2018
 * Description: COMMON SPINNER AND MODAL ACTIONS!
 *
 */

import { createAction } from 'redux-actions';
import { CommonFetch } from '../services/apiService';
import * as CONST from '../utils/constants';

export const userData = createAction('USER_DATA');
export const spinnerStart = createAction('START_SPINNER');
export const spinnerStop = createAction('STOP_SPINNER');

// This action starts the common spinner.
export function startSpinner() {
  return dispatch(spinnerStart());
}
// This action stops the common spinner.
export function stopSpinner() {
  return dispatch(spinnerStop());
}

export const getUserData = (userQuery, pageCount) => async (dispatch) => {
  try {
    const data = await CommonFetch({}, {url: `?page=${pageCount}&query=${userQuery}`, method: CONST.GET_API });
    dispatch(userData(data));
    return data;
  } catch(error) {
    console.log('Error in GetuserData Action: ', error);
  }
}
