import axios from "axios";

export const addToWishlistHandler = async (dispatchData, product) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response?.status === 201) {
      dispatchData({
        type: "SET_WISHLIST_ITEMS",
        payload: response?.data?.wishlist,
      });
    }
  } catch (error) {}
};

export const isItemPresentInWishlist = (dataState, itemId) => {
  return dataState?.wishlist?.find(({ id }) => id === itemId) ? true : false;
};
