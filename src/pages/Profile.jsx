import { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { AuthContext } from "../context/Auth/AuthContext";
import { Button } from "../components/Button";
import { DataContext } from "../context/DataContext";
import { AddressForm } from "../utils/AddressForm";
import { EditAddress } from "../utils/EditAddresss";
import { successToastMsg } from "../components/ProductCard";
import { OrderHistory } from "../components/OrderHistory";

export const Profile = () => {
  const { authState, dispatchAuth } = useContext(AuthContext);
  const { dataState, dispatchData, clearItems } = useContext(DataContext);
  const [profileView, setProfileView] = useState({
    userDetails: true,
    userAddress: false,
    orderHistory: false,
  });
  const [showAdd, setShowAdd] = useState(true);
  const [addAddress, setAddAddress] = useState(false);

  useEffect(() => {
    dispatchData({
      type: "SET_SHOWSEARCH_FALSE",
      payload: false,
    });
  }, []);

  const btnStyle = {
    fontSize: "1.2rem",
    margin: "0px 10px 0px 0px",
    cursor: "pointer",
    padding: "4px 8px",
    border: "1px solid black",
    borderRadius: "4px",
    background: "white",
  };

  return (
    <>
      <div className="profile-container-layout">
        <div className="profile-container">
          <div className="profile-content">
            <h2
              style={{
                backgroundColor: profileView?.userDetails && "black",
                color: profileView?.userDetails && "white",
              }}
              className="profile-content-header"
              onClick={() =>
                setProfileView(() => ({
                  userDetails: true,
                  userAddress: false,
                  orderHistory: false,
                }))
              }
            >
              Your Profile
            </h2>
            <h2
              style={{
                backgroundColor: profileView?.userAddress && "black",
                color: profileView?.userAddress && "white",
              }}
              className="profile-content-header"
              onClick={() =>
                setProfileView(() => ({
                  userDetails: false,
                  userAddress: true,
                  orderHistory: false,
                }))
              }
            >
              Addresses
            </h2>
            <h2
              style={{
                backgroundColor: profileView?.orderHistory && "black",
                color: profileView?.orderHistory && "white",
              }}
              className="profile-content-header"
              onClick={() =>
                setProfileView(() => ({
                  userDetails: false,
                  userAddress: false,
                  orderHistory: true,
                }))
              }
            >
              Order History
            </h2>
          </div>
          {profileView?.userDetails && (
            <div>
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
          )}

          {profileView?.userAddress && (
            <div>
              {" "}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div onClick={() => setAddAddress((addAddress) => !addAddress)}>
                  <Button title={addAddress ? "Cancel" : "Add Address"} />
                </div>
                <div
                  onClick={() => {
                    setShowAdd((showAdd) => !showAdd);
                  }}
                >
                  <Button
                    title={showAdd ? "Hide Address" : "Show All Address(es)"}
                  />
                </div>
              </div>
              {addAddress && <AddressForm setAddAddress={setAddAddress} />}
              {showAdd && (
                <div className="address-container">
                  {dataState?.address?.length === 0 && (
                    <h3>No Address Added</h3>
                  )}
                  {dataState?.address?.length > 0 &&
                    dataState?.address.map(
                      ({
                        id,
                        userName,
                        houseNumber,
                        mobileNumber,
                        area,
                        city,
                        pincode,
                        isEdit,
                      }) => {
                        return (
                          <div key={id} className="address-section">
                            <div>
                              {isEdit && (
                                <EditAddress
                                  editTodoId={id}
                                  showAdd={showAdd}
                                />
                              )}
                            </div>
                            <p>
                              Name: <b className="address-line">{userName}</b>
                            </p>
                            <p>
                              House Number:{" "}
                              <b className="address-line">{houseNumber}</b>
                              Mobile Number:{" "}
                              <b className="address-line">{mobileNumber}</b>
                            </p>
                            <p>
                              Area: <b className="address-line">{area}</b>City:{" "}
                              <b className="address-line">{city}</b>
                            </p>
                            <p>
                              Pincode: <b className="address-line">{pincode}</b>
                            </p>
                            <button
                              style={btnStyle}
                              onClick={() => {
                                dispatchData({
                                  type: "EDIT_TODO",
                                  payload: id,
                                });
                              }}
                            >
                              Edit
                            </button>
                            <button
                              style={btnStyle}
                              onClick={() => {
                                dispatchData({
                                  type: "DELETE_USER_ADDRESS",
                                  payload: id,
                                });
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      }
                    )}
                </div>
              )}
            </div>
          )}
          {profileView?.orderHistory && <OrderHistory />}
        </div>
      </div>
    </>
  );
};
