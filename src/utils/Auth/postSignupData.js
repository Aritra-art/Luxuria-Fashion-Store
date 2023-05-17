import axios from "axios";

export const postSignupData = async (signupData) => {
  try {
    const response = await axios.post("/api/auth/signup", signupData);
    return response;
  } catch (error) {
    console.error(error);
  }
};
