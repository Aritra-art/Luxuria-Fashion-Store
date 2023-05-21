import { useNavigate } from "react-router";
import { AddressRender } from "../components/AddressRender";
import { Button } from "../components/Button";
import { CheckoutPrice } from "../components/CheckoutPrice";
import "./Checkout.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Checkout = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(DataContext);
  return (
    <div className="checkout-container-layout">
      <div className="checkout-address">
        <h1>Select a Address</h1>
        <AddressRender />
        <div onClick={() => navigate("/profile")}>
          <Button title="Add new Address" />
        </div>
      </div>
      <div
        className="checkout-price"
        onClick={() => {
          if (dataState?.address?.length === 0) {
            alert("please select a address");
          } else {
            alert("order placed");
          }
        }}
      >
        <CheckoutPrice />
      </div>
    </div>
  );
};
