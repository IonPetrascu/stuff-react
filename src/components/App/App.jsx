import AppRoutes from "../Routes/AppRoutes";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import UserForm from "../UserForm/UserForm";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/categories/categoriesSlice";
import { getProducts } from "../../redux/products/productsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <div className="app">
      <Header />
      {/* user form  */}
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
      <UserForm />
    </div>
  );
};

export default App;
