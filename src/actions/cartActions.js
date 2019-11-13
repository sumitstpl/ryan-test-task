import { ADD_CART, REMOVE_FROM_CART, EMPTY_CART, UPDATE_CART, APPLY_COUPON } from '../utils/constants';

export function addToCart(item, isFromHomeProduct) {
  return {
    type: ADD_CART,
    payload: item,
    isFromHomeProduct
  };
}
export function updateCart(item, quantity) {
  return {
    type: UPDATE_CART,
    payload: item,
    updatedQuantity: quantity
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  };
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}

export function applyCouponDiscount(value) {
  return {
    type: APPLY_COUPON,
    payload: value
  };
}
