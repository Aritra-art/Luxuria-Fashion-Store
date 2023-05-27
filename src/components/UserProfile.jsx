import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { Button } from "./Button";
import { DataContext } from "../context/DataContext";
import { successToastMsg } from "./ProductCard";

export const UserProfile = () => {
  const { authState, dispatchAuth } = useContext(AuthContext);
  const { clearItems } = useContext(DataContext);
  return (
    <div>
      <p className="user-detail-placeholder">
        First Name:{" "}
        <span className="user-detail">{authState?.userDetails?.firstName}</span>
      </p>
      <p className="user-detail-placeholder">
        Last Name:{" "}
        <span className="user-detail">
          {authState?.userDetails?.lastName || authState?.userDetails?.lName}
        </span>
      </p>
      <p className="user-detail-placeholder">
        Email:{" "}
        <span className="user-detail-email">
          {authState?.userDetails?.email}
        </span>
      </p>
      <div
        style={{ padding: "10px 0px 0px 0px", width: "fit-content" }}
        onClick={() => {
          localStorage.removeItem("userToken");
          successToastMsg("Logout Successfull");
          dispatchAuth({ type: "SET_LOGIN_FALSE", payload: false });
          dispatchAuth({ type: "SET_USER", payload: {} });
          clearItems();
        }}
      >
        <Button title="Logout" />
      </div>
    </div>
  );
};
