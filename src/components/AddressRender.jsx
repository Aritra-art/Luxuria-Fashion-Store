import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const AddressRender = ({ selectedAdd, setSelectedAdd }) => {
  const { dataState } = useContext(DataContext);
  const addressCard = {
    border: "1px solid black",
    width: "80%",
    borderRadius: "5px",
    backgroundColor: "#f8f8f8",
    padding: "10px",
  };
  if (dataState?.address?.length === 0) {
    return <h2>No Address Added</h2>;
  } else {
    return (
      <>
        {dataState.address.map(
          ({
            id: addId,
            userName,
            houseNumber,
            mobileNumber,
            area,
            city,
            pincode,
          }) => {
            return (
              <div style={addressCard} key={addId}>
                <label>
                  <input
                    type="radio"
                    checked={selectedAdd.id === addId}
                    onChange={(e) =>
                      setSelectedAdd(
                        dataState?.address?.find(({ id }) => id === addId)
                      )
                    }
                  />
                  <span>
                    <b style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                      {userName}
                    </b>
                  </span>
                  <p>
                    {houseNumber}, {area}, {city}
                  </p>
                  <p>Pincode: {pincode}</p>
                  <p>Ph No. {mobileNumber}</p>
                </label>
              </div>
            );
          }
        )}
      </>
    );
  }
};
