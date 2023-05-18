import { useContext } from "react";
import { CartItemsRender } from "../components/CartItemsRender";
import "./Cart.css";
import { DataContext } from "../context/DataContext";
import { CartDetails } from "../components/CartDetails";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export const totalCartPrice = (dataState) =>
  dataState?.cart?.reduce(
    (total, { price, discountPercentage, qty }) =>
      total + qty * (price - Math.round((discountPercentage / 100) * price)),
    0
  );
export const discountedAmount = (dataState) =>
  dataState?.cart?.reduce(
    (acc, { price, qty, discountPercentage }) =>
      acc + qty * Math.round((discountPercentage / 100) * price),
    0
  );

export const Cart = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(DataContext);

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
          <div>
            <b style={{ fontSize: "1.4rem" }}>
              <small>
                You are saving{" "}
                <span style={{ color: "#16a34a" }}>
                  ₹{discountedAmount(dataState)}
                </span>{" "}
                in this order
              </small>
            </b>
          </div>
          <hr />
          <div style={divStyle}>
            <b style={{ fontSize: "1.5rem" }}>Total Price</b>{" "}
            <span>
              <b style={{ fontSize: "1.4rem" }}>₹{totalCartPrice(dataState)}</b>
            </span>
          </div>
          <div
            className="cart-container-checkoutbtn"
            onClick={() => navigate("/checkout")}
          >
            <Button title="Proceed to checkout" />
          </div>
        </div>
      </div>
    </>
  );
};
