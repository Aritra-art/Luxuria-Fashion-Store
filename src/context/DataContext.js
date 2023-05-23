import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { dataReducer } from "../reducer/DataReducer";
import { AuthContext } from "./Auth/AuthContext";
import { getCartItems } from "../utils/getCartItems";
import { getWishlistItems } from "../utils/getWishlistItems";
import { userAddress } from "../utils/userAddress";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const [dataState, dispatchData] = useReducer(dataReducer, {
    isLoading: false,
    showSearch: false,
    products: [],
    categories: [],
    types: [],
    cart: [],
    wishlist: [],
    address: userAddress(),
  });
  const encodedToken = localStorage.getItem("userToken");
  const getCategories = async () => {
    try {
      const { status, data } = await axios.get("/api/categories");
      if (status === 200) {
        dispatchData({
          type: "SET_CATEGORIES",
          payload: data.categories,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getTypes = async () => {
    try {
      const { status, data } = await axios.get("/api/types");
      if (status === 200) {
        dispatchData({
          type: "SET_TYPES",
          payload: data.types,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async () => {
    try {
      const { status, data } = await axios.get("/api/products");

      if (status === 200) {
        dispatchData({
          type: "SET_PRODUCTS",
          payload: data.products,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setItems = async () => {
    try {
      const cartResponse = await getCartItems(encodedToken);
      const wishlistResponse = await getWishlistItems(encodedToken);
      if (cartResponse?.status === 200) {
        dispatchData({
          type: "SET_CART_ITEMS",
          payload: cartResponse?.data?.cart,
        });
      }
      if (wishlistResponse?.status === 200) {
        dispatchData({
          type: "SET_WISHLIST_ITEMS",
          payload: wishlistResponse?.data?.wishlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const clearItems = () => {
    dispatchData({ type: "SET_CART_ITEMS", payload: [] });
    dispatchData({ type: "SET_WISHLIST_ITEMS", payload: [] });
  };

  useEffect(() => {
    dispatchData({
      type: "SET_LOADER_TRUE",
      payload: true,
    });
    getCategories();
    getTypes();
    getProducts();
  }, [dispatchData]);

  useEffect(() => {
    authState?.isLoggedin && setItems();
  }, [authState?.isLoggedin]);

  const value = { dataState, dispatchData, clearItems, setItems };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
