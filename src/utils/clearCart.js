import { removeFromCartHandler } from "./removeFromCartHandler";

export const clearCart = (dispatchData, dataState) => {
  for (let i = 0; i < dataState?.cart.length; i++) {
    removeFromCartHandler(dispatchData, dataState?.cart[i].id);
  }
};
