import axios from "axios";

export const postLoginData = async (loginData) => {
  if (loginData.hasOwnProperty("err")) {
    try {
      const { email, password } = loginData;
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status === 200) {
        alert("login Successfull");
      }
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
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
};
