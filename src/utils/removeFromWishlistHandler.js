import axios from "axios";

export const removeFromWishlistHandler = async (dispatchData, itemId) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.delete(`/api/user/wishlist/${itemId}`, {
      headers: { authorization: encodedToken },
    });
    if (response?.status === 200) {
      dispatchData({
        type: "SET_WISHLIST_ITEMS",
        payload: response?.data?.wishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
