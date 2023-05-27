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
    case "SET_SHOWSEARCH_TRUE":
      return { ...dataState, showSearch: action.payload };
    case "SET_SHOWSEARCH_FALSE":
      return { ...dataState, showSearch: action.payload };
    case "SET_USER_ADDRESS":
      return { ...dataState, address: [...dataState?.address, action.payload] };
    case "DELETE_USER_ADDRESS":
      return {
        ...dataState,
        address: dataState?.address?.filter(({ id }) => id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...dataState,
        address: dataState?.address?.map((item) =>
          item.id === action.payload ? { ...item, isEdit: true } : item
        ),
      };
    case "SAVE_EDITED_ADDRESS":
      return {
        ...dataState,
        address: dataState?.address?.map((item) =>
          item.id === action.payload[1] ? { ...action.payload[0] } : item
        ),
      };
    case "CANCEL_EDITED_ADDRESS":
      return {
        ...dataState,
        address: dataState?.address?.map((item) =>
          item.id === action.payload ? { ...item, isEdit: false } : item
        ),
      };
    case "SET_ORDER_HISTORY":
      return {
        ...dataState,
        orderHistory: [...dataState?.orderHistory, action.payload],
      };
    case "SET_INITIAL_ADDRESS":
      return { ...dataState, address: [...dataState?.address, action.payload] };
    default:
      console.log("something went wrong");
  }
};
