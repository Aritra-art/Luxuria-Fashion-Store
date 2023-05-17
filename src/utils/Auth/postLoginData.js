import axios from "axios";

export const postLoginData = async (loginData) => {
  if (loginData.hasOwnProperty("err")) {
    try {
      const { email, password } = loginData;
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const { email, password } = loginData;
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};
