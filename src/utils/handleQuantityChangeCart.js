import axios from "axios";

export const handleQuantityChangeCart = async (dispatchData, itemId, type) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.post(
      `/api/user/cart/${itemId}`,
      { action: { type } },
      { headers: { authorization: encodedToken } }
    );
    if (response?.status === 200) {
      dispatchData({ type: "SET_CART_ITEMS", payload: response?.data?.cart });
    }
  } catch (error) {
    console.error(error);
  }
};
