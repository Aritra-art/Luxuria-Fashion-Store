export const authReducer = (authState, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN_TRUE":
      return { ...authState, isLoggedin: payload };
    case "SET_LOGIN_FALSE":
      return { ...authState, isLoggedin: payload };
    case "SET_USER":
      return { ...authState, userDetails: payload };
    default:
      console.log("Something went wrong");
  }
};
