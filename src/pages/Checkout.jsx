import { useNavigate } from "react-router";
import { AddressRender } from "../components/AddressRender";
import { Button } from "../components/Button";
import { CheckoutPrice } from "../components/CheckoutPrice";
import "./Checkout.css";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const Checkout = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(DataContext);
  const [selectedAdd, setSelectedAdd] = useState(dataState.address[0]);
  return (
    <div className="checkout-container-layout">
      <div className="checkout-address">
        <h1>Select a Address</h1>
        <AddressRender
          selectedAdd={selectedAdd}
          setSelectedAdd={setSelectedAdd}
        />
        <div onClick={() => navigate("/profile")}>
          <Button title="Add new Address" />
        </div>
      </div>
      <div className="checkout-price">
        <CheckoutPrice selectedAdd={selectedAdd} />
      </div>
    </div>
  );
};
