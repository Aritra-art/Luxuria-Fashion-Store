import axios from "axios";

export const postSignupData = async (fName, lName, email, password, cPass) => {
  const { status, data } = await axios.post("/api/auth/signup", {
    fName,
    lName,
    email,
    password,
    cPass,
  });
  if (status === 201) {
    localStorage.setItem("userToken", data.encodedToken);
  }
};
