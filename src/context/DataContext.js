import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { dataReducer } from "../reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, {
    products: [],
    categories: [],
    types: [],
  });
  useEffect(() => {
    (async () => {
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
    })();
    (async () => {
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
    })();
    (async () => {
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
    })();
  }, []);
  const value = { dataState };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
