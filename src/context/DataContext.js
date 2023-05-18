import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { dataReducer } from "../reducer/DataReducer";
import { getCartItems } from "../utils/getCartItems";
import { getWishlistItems } from "../utils/getWishlistItems";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    isLoading: false,
    products: [],
    categories: [],
    types: [],
    cart: [],
    wishlist: [],
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
  // const cartItems = async () => {
  //   try {
  //     const response = await getCartItems(encodedToken);
  //     if (response?.status === 200) {
  //       dispatchData({
  //         type: "SET_CART_ITEMS",
  //         payload: response?.data?.cart,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const wishlistItems = async () => {
  //   try {
  //     const response = await getWishlistItems(encodedToken);
  //     if (response?.status === 200) {
  //       dispatchData({
  //         type: "SET_WISHLIST_ITEMS",
  //         payload: response?.data?.wishlist,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    dispatchData({
      type: "SET_LOADER_TRUE",
      payload: true,
    });
    getCategories();
    getTypes();
    getProducts();
    // cartItems();
    // wishlistItems();
  }, [dispatchData]);
  console.log(dataState?.wishlist);

  const value = { dataState, dispatchData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
