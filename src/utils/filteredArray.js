export const filteredArray = (dataState, filterState) => {
  let filteredArray = dataState?.products && dataState?.products;
  filteredArray = filteredArray.filter(({ title }) =>
    title
      .toLowerCase()
      ?.includes(filterState?.searchFilter?.toLowerCase()?.trim())
  );
  filteredArray = filteredArray.filter(
    ({ discountPercentage, price }) =>
      Number(price - Math.round((discountPercentage / 100) * price)) <=
      Number(filterState?.priceRange)
  );

  if (filterState?.typeFilter?.length > 0) {
    filteredArray = filteredArray.filter(({ type }) =>
      filterState?.typeFilter?.includes(type)
    );
  }
  if (filterState?.categoryFilter?.length > 0) {
    filteredArray = filteredArray.filter(({ category }) =>
      filterState?.categoryFilter?.includes(category)
    );
  }
  if (filterState?.sizeFilter?.length > 0) {
    filteredArray = filteredArray.filter(({ size }) =>
      filterState?.sizeFilter?.includes(size)
    );
  }
  if (filterState?.brandFilter?.length > 0) {
    filteredArray = filteredArray.filter(({ brand }) =>
      filterState?.brandFilter?.includes(brand)
    );
  }
  if (filterState?.ratingFilter?.length > 0) {
    filteredArray = filteredArray.filter(
      ({ rating }) => Number(rating) >= Number(filterState?.ratingFilter)
    );
  }
  if (filterState?.sortPriceFilter?.length > 0) {
    if (filterState?.sortPriceFilter === "lth") {
      filteredArray = [...filteredArray].sort(
        (a, b) =>
          [a.price - Math.round((a.discountPercentage / 100) * a.price)] -
          [b.price - Math.round((b.discountPercentage / 100) * b.price)]
      );
    } else if (filterState?.sortPriceFilter === "htl") {
      filteredArray = [...filteredArray].sort(
        (a, b) =>
          [b.price - Math.round((b.discountPercentage / 100) * b.price)] -
          [a.price - Math.round((a.discountPercentage / 100) * a.price)]
      );
    }
  }
  return filteredArray;
};
