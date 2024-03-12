import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import CategoryPage from "../Categories/CategoryPage";
import ProductPage from "../Products/ProductPage";
import Profile from "../Profile/Profile";
import Favorites from "../Favorites/Favorites";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
      <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
    </Routes>
  );
};

export default AppRoutes;
