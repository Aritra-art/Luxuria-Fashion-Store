import { useContext, useState } from "react";
import "./Profile.css";
import { AuthContext } from "../context/Auth/AuthContext";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { DataContext } from "../context/DataContext";
import { ToastContainer } from "react-toastify";
import { successToastMsg } from "../components/ProductCard";

export const Profile = () => {
  const { authState, dispatchAuth } = useContext(AuthContext);
  const { dispatchData } = useContext(DataContext);
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();
  console.log(authState?.userDetails);
  return (
    <>
      <div className="profile-container-layout">
        <div className="profile-container">
          <div className="Profile-content">
            <h1 className="profile-content-header">Your Details</h1>
          </div>
          <p className="user-detail-placeholder">
            First Name:{" "}
            <span className="user-detail">
              {authState?.userDetails?.firstName}
            </span>
          </p>
          <p className="user-detail-placeholder">
            Last Name:{" "}
            <span className="user-detail">
              {authState?.userDetails?.lastName ||
                authState?.userDetails?.lName}
            </span>
          </p>
          <p className="user-detail-placeholder">
            Email:{" "}
            <span className="user-detail-email">
              {authState?.userDetails?.email}
            </span>
          </p>
          <div onClick={() => setShowAdd((showAdd) => !showAdd)}>
            <Button title={showAdd ? "Hide Address" : "Show Address"} />
          </div>
          {showAdd && (
            <div className="address-container">Address Container</div>
          )}
          <div
            style={{ padding: "10px 0px 0px 0px" }}
            onClick={() => {
              successToastMsg("Logout Successfull");
              setTimeout(() => {
                navigate("/login");
              }, 2500);
              localStorage.removeItem("userToken");
              dispatchAuth({ type: "SET_LOGIN_FALSE", payload: false });
              dispatchAuth({ type: "SET_USER", payload: {} });
            }}
          >
            <Button title="Logout" />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
