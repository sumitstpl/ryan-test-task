/**
 * @author Systango Technologies
 * Date:
 * Description: COMMON REDUCER FOR SPINNER AND MODAL!
 *
 */
import { handleActions } from 'redux-actions';
import * as actions from '../actions/commonActions';

const INITIAL_STATE = {
  isFetching: false,
  userData: []
};



export default handleActions({
  [actions.userData]: (state, action) => ({
    ...state,
    userData: action.payload
  }),
  [actions.spinnerStart]: (state, action) => ({
    ...state,
    isFetching: true
  }),
  [actions.spinnerStop]: (state, action) => ({
    ...state,
    isFetching: false
  })
}, INITIAL_STATE);

