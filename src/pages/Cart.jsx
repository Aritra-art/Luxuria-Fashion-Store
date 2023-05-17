import "./Cart.css";

export const Cart = () => {
  return (
    <>
      <div className="cart-container-layout">
        <div className="cart-container-items">Cart Items</div>
        <div className="cart-container-price">
          <h2 className="cart-container-price-header">Cart Price Details</h2>
          <hr />
          <div>Cart Item</div>
        </div>
      </div>
    </>
  );
};
