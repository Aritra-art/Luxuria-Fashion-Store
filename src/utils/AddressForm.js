import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./AddressForm.css";

export const AddressForm = ({ setAddAddress }) => {
  const { dispatchData } = useContext(DataContext);
  const [addressForm, setAddressForm] = useState({
    id: Number(Math.random()).toFixed(3),
    userName: "",
    houseNumber: "",
    mobileNumber: "",
    area: "",
    city: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((addressForm) => ({ ...addressForm, [name]: value }));
  };
  const addressHandlerForm = (e) => {
    e.preventDefault();
    dispatchData({
      type: "SET_USER_ADDRESS",
      payload: addressForm,
    });
    setAddAddress(false);
  };

  return (
    <>
      <form onSubmit={addressHandlerForm} className="address-form-container">
        <label className="address-form-container-label">
          Name
          <input
            placeholder="John Doe"
            className="address-form-container-input"
            type="text"
            required
            name="userName"
            value={addressForm.userName}
            onChange={handleInputChange}
          />
        </label>
        <label className="address-form-container-label">
          House Number
          <input
            placeholder="2877 Arthur Avenue"
            className="address-form-container-input"
            type="text"
            required
            name="houseNumber"
            value={addressForm.houseNumber}
            onChange={handleInputChange}
          />
        </label>
        <label className="address-form-container-label">
          Mobile Number
          <input
            placeholder="+91-855-592-2564"
            className="address-form-container-input"
            type="number"
            required
            value={addressForm.mobileNumber}
            name="mobileNumber"
            onChange={handleInputChange}
          />
        </label>
        <label className="address-form-container-label">
          Area
          <input
            placeholder="Jamnagar"
            className="address-form-container-input"
            type="text"
            required
            name="area"
            value={addressForm.area}
            onChange={handleInputChange}
          />
        </label>
        <label className="address-form-container-label">
          City
          <input
            placeholder="Freeport"
            className="address-form-container-input"
            type="text"
            required
            name="city"
            value={addressForm.city}
            onChange={handleInputChange}
          />
        </label>
        <label className="address-form-container-label">
          Pincode
          <input
            placeholder="566712"
            className="address-form-container-input"
            type="number"
            required
            name="pincode"
            value={addressForm.pincode}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="address-form-container-btn">
          Add Address
        </button>
      </form>
    </>
  );
};
