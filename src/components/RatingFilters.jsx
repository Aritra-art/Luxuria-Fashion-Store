export const RatingFilters = () => {
  const ratingStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const ratingLabelStyle = {
    margin: "4px 0px",
  };
  return (
    <div style={ratingStyle}>
      <label style={ratingLabelStyle}>
        <input type="radio" name="ratingfilter" value="4" />4 stars & above
      </label>
      <label style={ratingLabelStyle}>
        <input type="radio" name="ratingfilter" value="3" />3 stars & above
      </label>
      <label style={ratingLabelStyle}>
        <input type="radio" name="ratingfilter" value="2" />2 stars & above
      </label>
      <label style={ratingLabelStyle}>
        <input type="radio" name="ratingfilter" value="1" />1 stars & above
      </label>
    </div>
  );
};
