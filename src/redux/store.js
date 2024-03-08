import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import singleProduct from "./products/singleProduct";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: singleProduct,
  },
});
