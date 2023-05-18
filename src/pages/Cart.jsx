import { useContext } from "react";
import { CartItemsRender } from "../components/CartItemsRender";
import "./Cart.css";
import { DataContext } from "../context/DataContext";
import { CartDetails } from "../components/CartDetails";
import { Button } from "../components/Button";

export const Cart = () => {
  const { dataState } = useContext(DataContext);
  const totalCartPrice = dataState?.cart?.reduce(
    (total, { price, discountPercentage, qty }) =>
      total + qty * (price - Math.round((discountPercentage / 100) * price)),
    0
  );
  const discountedAmount = dataState?.cart?.reduce(
    (acc, { price, qty, discountPercentage }) =>
      acc + qty * Math.round((discountPercentage / 100) * price),
    0
  );

  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  return (
    <>
      <h2 className="wishlist-header">My Cart</h2>
      <div className="cart-container-layout">
        <div className="cart-container-items">
          <CartItemsRender />
        </div>
        <div className="cart-container-price">
          <h2 className="cart-container-price-header">Cart Price Details</h2>
          <hr />
          <CartDetails data={dataState?.cart} />
          <div style={divStyle}>
            <b style={{ fontSize: "1.5rem" }}>Discount</b>{" "}
            <b style={{ fontSize: "1.4rem", color: "#16a34a" }}>
              - ₹{discountedAmount}
            </b>
          </div>
          <hr />
          <div style={divStyle}>
            <b style={{ fontSize: "1.5rem" }}>Total Price</b>{" "}
            <span>
              <b style={{ fontSize: "1.4rem" }}>₹{totalCartPrice}</b>
            </span>
          </div>
          <div className="cart-container-checkoutbtn">
            <Button title="Proceed to checkout" />
          </div>
        </div>
      </div>
    </>
  );
};
