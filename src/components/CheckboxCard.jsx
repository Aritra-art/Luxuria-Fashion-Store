export const CheckboxCard = ({ data }) => {
  return (
    <>
      {data &&
        data?.map((element) => {
          return (
            <div key={element} style={{ padding: "4px" }}>
              <label>
                <input type="checkbox" />
                {element}
              </label>
            </div>
          );
        })}
    </>
  );
};
