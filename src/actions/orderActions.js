// Orders
export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
export const GET_ALL_ORDERS_FAILURE = 'GET_ALL_ORDERS_FAILURE';


export function getAllOrders() {
  return {
    type: GET_ALL_ORDERS
  };
}
export function getAllOrdersSuccess(res) {
  return {
    type: GET_ALL_ORDERS_SUCCESS,
    payload: res
  };
}
export function getAllOrdersFailure(error) {
  return {
    type: GET_ALL_ORDERS_FAILURE,
  };
}