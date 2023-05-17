import axios from "axios";

export const addToCartHandler = async (product, dispatchData) => {
  try {
    const encodedToken = localStorage.getItem("userToken");
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response?.status === 201) {
      dispatchData({
        type: "SET_CART_ITEMS",
        payload: response?.data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
