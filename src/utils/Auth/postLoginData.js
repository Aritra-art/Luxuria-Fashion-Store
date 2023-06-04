import axios from "axios";
import { failToastMsg } from "../../components/ProductCard";

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
      failToastMsg(error?.response?.data?.errors[0].split(".")[0]);
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
