import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const EditAddress = ({ editTodoId }) => {
  const { dataState, dispatchData } = useContext(DataContext);
  const [editAddress, setEditAddress] = useState({
    id: editTodoId,
    houseNumber: dataState?.address?.find(({ id }) => id === editTodoId)
      .houseNumber,
    mobileNumber: dataState?.address?.find(({ id }) => id === editTodoId)
      .mobileNumber,
    area: dataState?.address?.find(({ id }) => id === editTodoId).area,
    city: dataState?.address?.find(({ id }) => id === editTodoId).city,
    pincode: dataState?.address?.find(({ id }) => id === editTodoId).pincode,
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setEditAddress((editAddress) => ({ ...editAddress, [name]: value }));
  };
  return (
    <>
      <form>
        <label>
          House Number
          <input
            type="text"
            required
            name="houseNumber"
            value={editAddress.houseNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mobile Number
          <input
            type="number"
            required
            value={editAddress.mobileNumber}
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
            value={editAddress.area}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City
          <input
            type="text"
            required
            name="city"
            value={editAddress.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pincode
          <input
            type="number"
            required
            name="pincode"
            value={editAddress.pincode}
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          onClick={() => {
            dispatchData({
              type: "SAVE_EDITED_ADDRESS",
              payload: [editAddress, editTodoId],
            });
          }}
        >
          Edit Address
        </button>
        <button
          type="submit"
          onClick={() => {
            dispatchData({
              type: "CANCEL_EDITED_ADDRESS",
              payload: editTodoId,
            });
          }}
        >
          Cancel
        </button>
      </form>
    </>
  );
};
