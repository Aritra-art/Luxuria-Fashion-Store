import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export const AddressRender = () => {
  const { dataState } = useContext(DataContext);
  const [selectedAdd, setSelectedAdd] = useState(dataState.address[0]);
  const addressCard = {
    border: "1px solid black",
    width: "fit-content",
    padding: "10px",
  };

  console.log(selectedAdd);
  if (dataState?.address?.length === 0) {
    return <h2>No Address Added</h2>;
  } else {
    return (
      <>
        {dataState.address.map(
          ({ id: addId, houseNumber, mobileNumber, area, city, pincode }) => {
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
                    {houseNumber} {area}
                  </span>
                  <p>
                    {city} {pincode}
                  </p>
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
