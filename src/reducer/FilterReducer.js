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
    case "SET_SIZE_FILTER":
      return {
        ...filterState,
        sizeFilter: filterState?.sizeFilter?.includes(payload)
          ? filterState?.sizeFilter?.filter((size) => size !== payload)
          : [...filterState?.sizeFilter, payload],
      };
    case "SET_BRAND_FILTER":
      return {
        ...filterState,
        brandFilter: filterState?.brandFilter?.includes(payload)
          ? filterState?.brandFilter?.filter((brand) => brand !== payload)
          : [...filterState?.brandFilter, payload],
      };
    case "SET_RATING_FILTER":
      return { ...filterState, ratingFilter: payload };
    case "SET_SORT_PRICE":
      return { ...filterState, sortPriceFilter: payload };
    case "SET_SEARCH_FILTER":
      return { ...filterState, searchFilter: payload };
    case "CLEAR_ALL_FILTERS":
      return {
        priceRange: 10000,
        categoryFilter: [],
        typeFilter: [],
        sizeFilter: [],
        brandFilter: [],
        ratingFilter: payload,
        sortPriceFilter: payload,
        searchFilter: "",
      };
    default:
      console.log("Something went wrong");
  }
};
