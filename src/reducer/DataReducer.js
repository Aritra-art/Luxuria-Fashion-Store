export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...dataState, categories: action.payload };
    case "SET_TYPES":
      return { ...dataState, types: action.payload };
    case "SET_PRODUCTS":
      return { ...dataState, products: action.payload };
    default:
      console.log("something went wrong");
  }
};
