import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import singleProduct from "./products/singleProduct";
import userSlice from "./user/userSlice";
import favoritesSlice from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: singleProduct,
    user: userSlice,
    favorites: favoritesSlice,
  },
});
