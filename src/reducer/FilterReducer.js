export const filterReducer = (filterState, { type, payload }) => {
  switch (type) {
    case "SET_PRICE_RANGE":
      return { ...filterState, priceRange: payload };
    default:
      console.log("Something went wrong");
  }
};
