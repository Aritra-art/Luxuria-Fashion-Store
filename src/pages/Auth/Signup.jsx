import { NavLink } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

export const Signup = () => {
  const [signup, setSignUp] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
    cPass: "",
    passErr: "",
  });
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    if (signup.pass === signup.cPass) {
      setSignUp((signup) => ({
        ...signup,
        passErr: "",
      }));
    } else {
      setSignUp((signup) => ({
        ...signup,
        passErr: "password and confirm password should be same",
      }));
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUp((signup) => ({ ...signup, [name]: value }));
  };
  return (
    <>
      <div className="signup-container-layout">
        <div className="signup-image-layout">
          <img
            src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
            width="100%"
            height="100%"
          />
        </div>
        <main className="signup-content-layout">
          <h1 className="signup-content-header">Sign Up</h1>
          <form
            className="signup-content"
            onSubmit={(e) => signupSubmitHandler(e)}
          >
            <label className="signup-content-placeholder">
              First Name
              <input
                required={true}
                name="fName"
                placeholder="First Name"
                type="text"
                className="signup-content-input"
                value={signup.fName}
                onChange={handleInputChange}
              />
            </label>
            <label className="signup-content-placeholder">
              Last Name
              <input
                required={true}
                placeholder="Last Name"
                name="lName"
                type="text"
                className="signup-content-input"
                value={signup.lName}
                onChange={handleInputChange}
              />
            </label>
            <label className="signup-content-placeholder">
              Email
              <input
                required={true}
                placeholder="Email"
                name="email"
                type="email"
                className="signup-content-input"
                value={signup.email}
                onChange={handleInputChange}
              />
            </label>
            <label className="signup-content-placeholder">
              Password
              <input
                required={true}
                placeholder="Password"
                name="pass"
                type="password"
                className="signup-content-input"
                value={signup.pass}
                onChange={handleInputChange}
              />
            </label>
            <label className="signup-content-placeholder">
              Confirm Password
              <input
                required={true}
                placeholder="Confirm Password"
                name="cPass"
                type="password"
                className="signup-content-input"
                value={signup.cPass}
                onChange={handleInputChange}
              />
            </label>
            {signup.passErr.length > 0 && (
              <i style={{ color: "red" }}>{signup.passErr}</i>
            )}
            <button className="signup-content-btn" type="submit">
              Create Account
            </button>
            <small className="signup-content-link">
              Already a member?{" "}
              <NavLink
                to="/login"
                style={{
                  color: "black",
                  textDecoration: "underline",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                }}
              >
                signin
              </NavLink>
            </small>
          </form>
        </main>
      </div>
    </>
  );
};
