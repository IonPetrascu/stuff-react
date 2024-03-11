import { BASE_URL } from "./constants";

export const builUrl = (object, id, quantityProducts) => {
  if (!object.price_max || !object.price_min) {
    console.log("Some parameter is not filled in");
    return;
  } else if (object.price_max < object.price_min) {
    console.log("The maximum number cannot be less than the minimum");
    return;
  }
  let url = BASE_URL;
  const entries = Object.entries(object);

  return `${url}/products/?${entries[0][0]}=${entries[0][1]}&${entries[1][0]}=${entries[1][1]}&categoryId=${id}&offset=1&limit=${quantityProducts}`;
};
