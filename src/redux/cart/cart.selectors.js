import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity*cartItem.price, 0)
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0)
)