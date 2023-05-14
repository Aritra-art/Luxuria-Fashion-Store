import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const CheckboxCard = ({ data, filterArr }) => {
  const { dispatchFilter } = useContext(FilterContext);
  return (
    <>
      {data &&
        data?.map((element) => {
          return (
            <div key={element} style={{ padding: "4px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={filterArr?.includes(element)}
                  onChange={(e) =>
                    dispatchFilter({
                      type: "SET_CATEGORY_FILTER",
                      payload: { filterArr, element },
                    })
                  }
                />
                {element}
              </label>
            </div>
          );
        })}
    </>
  );
};
