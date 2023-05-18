import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { dataReducer } from "../reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    isLoading: false,
    products: [],
    categories: [],
    types: [],
    cart: [],
    wishlist: [],
    address: [],
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
  useEffect(() => {
    dispatchData({
      type: "SET_LOADER_TRUE",
      payload: true,
    });
    getCategories();
    getTypes();
    getProducts();
  }, [dispatchData]);

  const value = { dataState, dispatchData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
