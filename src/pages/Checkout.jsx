import { useNavigate } from "react-router";
import { AddressRender } from "../components/AddressRender";
import { Button } from "../components/Button";
import { CheckoutPrice } from "../components/CheckoutPrice";
import "./Checkout.css";

export const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout-container-layout">
      <div className="checkout-address">
        <h1>Select a Address</h1>
        <AddressRender />
        <div onClick={() => navigate("/profile")}>
          <Button title="Add new Address" />
        </div>
      </div>
      <div className="checkout-price">
        <CheckoutPrice />
      </div>
    </div>
  );
};
