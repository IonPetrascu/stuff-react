export const discountPrice = (discount, price) => {
  return ((price / 100) * discount).toFixed(2);
};
