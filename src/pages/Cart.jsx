import { useContext } from "react";
import { CartItemsRender } from "../components/CartItemsRender";
import "./Cart.css";
import { DataContext } from "../context/DataContext";
import { CartDetails } from "../components/CartDetails";

export const Cart = () => {
  const { dataState } = useContext(DataContext);
  const totalCartPrice = dataState?.cart?.reduce(
    (total, { price, discountPercentage, qty }) =>
      total + qty * (price - Math.round((discountPercentage / 100) * price)),
    0
  );
  return (
    <>
      <div className="cart-container-layout">
        <div className="cart-container-items">
          <CartItemsRender />
        </div>
        <div className="cart-container-price">
          <h2 className="cart-container-price-header">Cart Price Details</h2>
          <hr />
          <CartDetails data={dataState?.cart} />
          <hr />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <b style={{ fontSize: "1.5rem" }}>Total Price</b>{" "}
            <span>
              <b style={{ fontSize: "1.4rem" }}>₹{totalCartPrice}</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
