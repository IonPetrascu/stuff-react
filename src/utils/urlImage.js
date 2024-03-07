export const urlImage = (link) => {
  return `url(${link.replace(/[\[\]\\\"]/g, "")})`;
};
export const srcImage = (link) => {
  return link.replace(/[\[\]\\\"]/g, "")
};
