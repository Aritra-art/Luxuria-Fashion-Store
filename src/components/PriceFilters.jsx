export const PriceFilters = () => {
  const priceFilterStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const priceLabelStyle = {
    margin: "4px 0px",
  };
  return (
    <div style={priceFilterStyle}>
      <label style={priceLabelStyle}>
        <input name="pricefilter" type="radio" value="lth" />
        Low-to-High
      </label>
      <label style={priceLabelStyle}>
        <input name="pricefilter" type="radio" value="lth" />
        High-to-Low
      </label>
    </div>
  );
};
