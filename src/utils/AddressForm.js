import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const AddressForm = ({ setAddAddress }) => {
  const { dispatchData } = useContext(DataContext);
  const [addressForm, setAddressForm] = useState({
    id: Number(Math.random()).toFixed(3),
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
      <form onSubmit={addressHandlerForm}>
        <label>
          House Number
          <input
            type="text"
            required
            name="houseNumber"
            value={addressForm.houseNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mobile Number
          <input
            type="number"
            required
            value={addressForm.mobileNumber}
            name="mobileNumber"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Area
          <input
            type="text"
            required
            name="area"
            value={addressForm.area}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City
          <input
            type="text"
            required
            name="city"
            value={addressForm.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pincode
          <input
            type="number"
            required
            name="pincode"
            value={addressForm.pincode}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Address</button>
      </form>
    </>
  );
};
