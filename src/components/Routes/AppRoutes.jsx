import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import CategoryPage from "../Categories/CategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
    </Routes>
  );
};

export default AppRoutes;
