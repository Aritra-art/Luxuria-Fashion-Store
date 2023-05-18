import { CheckoutPrice } from "../components/CheckoutPrice";
import "./Checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout-container-layout">
      <div className="checkout-address">Address</div>
      <div className="checkout-price">
        <CheckoutPrice />
      </div>
    </div>
  );
};
