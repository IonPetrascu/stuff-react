import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import CategoriesSection from "../Categories/CategoriesSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CATEGORY} element={<CategoriesSection />} />
    </Routes>
  );
};

export default AppRoutes;
