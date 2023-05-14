export const filterReducer = (filterState, { type, payload }) => {
  switch (type) {
    case "SET_PRICE_RANGE":
      return { ...filterState, priceRange: payload };
    case "SET_CATEGORY_FILTER":
      return {
        ...filterState,
        categoryFilter: filterState?.categoryFilter?.includes(payload)
          ? filterState?.categoryFilter?.filter(
              (category) => category !== payload
            )
          : [...filterState?.categoryFilter, payload],
      };
    case "SET_TYPE_FILTER":
      return {
        ...filterState,
        typeFilter: filterState?.typeFilter?.includes(payload)
          ? filterState?.typeFilter?.filter((type) => type !== payload)
          : [...filterState?.typeFilter, payload],
      };
    default:
      console.log("Something went wrong");
  }
};
