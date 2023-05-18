export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "SET_LOADER_TRUE":
      return { ...dataState, isLoading: action.payload };
    case "SET_LOADER_FALSE":
      return { ...dataState, isLoading: action.payload };
    case "SET_CATEGORIES":
      return { ...dataState, categories: action.payload, isLoading: false };
    case "SET_TYPES":
      return { ...dataState, types: action.payload, isLoading: false };
    case "SET_PRODUCTS":
      return { ...dataState, products: action.payload, isLoading: false };
    case "SET_CART_ITEMS":
      return { ...dataState, cart: action.payload };
    case "SET_WISHLIST_ITEMS":
      return { ...dataState, wishlist: action.payload };
    default:
      console.log("something went wrong");
  }
};
