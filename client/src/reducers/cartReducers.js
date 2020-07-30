import { CART_ADD_ITEM } from '../constants/cartConstants';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // Could refactor this with better logic
      const product = state.cartItems.find(
        (itm) => itm.product === item.product
      );

      if (product) {
        return {
          cartItems: state.cartItems.map((itm) =>
            itm.product === product.product ? item : itm
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    default:
      return state;
  }
};

export { cartReducer };
