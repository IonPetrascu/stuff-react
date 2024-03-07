export const urlImage = (link) => {
  return `url(${link.replace(/[\[\]\\\"]/g, "")})`;
};
