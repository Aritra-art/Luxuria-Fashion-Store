import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./AddressForm.css";
import { failToastMsg, successToastMsg } from "../components/ProductCard";

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
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const pinRegex = /^\d{6}$/;
    if (
      phoneRegex.test(addressForm?.mobileNumber) &&
      pinRegex.test(addressForm?.pincode)
    ) {
      dispatchData({
        type: "SET_USER_ADDRESS",
        payload: addressForm,
      });
      successToastMsg("Address Successfully Added");
      setAddAddress(false);
    } else {
      if (!phoneRegex.test(addressForm?.mobileNumber)) {
        failToastMsg("Please enter valid Mobile Number");
      } else if (!phoneRegex.test(addressForm?.pincode)) {
        failToastMsg("Please enter valid Pincode");
      }
    }
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
            type="tel"
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
