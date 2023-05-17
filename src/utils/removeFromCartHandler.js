import axios from "axios";

export const removeFromCartHandler = async (dispatchData, itemId) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.delete(`/api/user/cart/${itemId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (response?.status === 200) {
      dispatchData({
        type: "SET_CART_ITEMS",
        payload: response?.data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
