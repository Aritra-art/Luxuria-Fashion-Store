import { NavLink } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    err: "",
  });
  const { loginUser } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Sign In as a Guest") {
      console.log("guest");
      setLogin((login) => ({ ...login, err: "" }));

      loginUser({
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      });
    } else {
      if (login?.email?.length > 0 && login?.password?.length > 0) {
        setLogin((login) => ({ ...login, err: "" }));
        loginUser(login);
      } else {
        setLogin((login) => ({
          ...login,
          err: "Please enter both the Values",
        }));
      }
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setLogin((login) => ({
      ...login,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="login-container-layout">
        <div className="login-container-image">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/business-opening-with-open-sign-royalty-free-image-1573142427.jpg"
            width="100%"
            height="100%"
          />
        </div>
        <div className="login-container-form">
          <h1 className="login-container-form-header">sign in</h1>
          <form className="login-container-main-form">
            <label>
              <div className="login-container-labeltag">Email</div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="login-container-input"
                onChange={handleChangeInput}
              />
            </label>
            <label>
              <div className="login-container-labeltag">Password</div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="login-container-input"
                onChange={handleChangeInput}
              />
            </label>
            <i style={{ marginTop: "4px", color: "red" }}>
              {login?.err?.length > 0 && login.err}
            </i>
            <button
              onClick={loginHandler}
              className="signup-content-btn"
              type="submit"
            >
              Sign In
            </button>
            <button
              type="submit"
              onClick={loginHandler}
              className="login-guest-btn"
            >
              Sign In as a Guest
            </button>
            <small style={{ marginTop: "8px" }}>
              Don't have an account?{" "}
              <NavLink to="/signup" style={{ color: "black" }}>
                Sign Up
              </NavLink>
            </small>
          </form>
        </div>
      </div>
    </>
  );
};
