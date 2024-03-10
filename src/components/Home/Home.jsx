import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Poster from "../Poster/Poster";
import CategoriesSection from "../Categories/CategoriesSection";
import { useSelector, useDispatch } from "react-redux";
import { filteredByPrice } from "../../redux/products/productsSlice";
import { useEffect } from "react";

const Home = () => {
  const { list, filtered } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filteredByPrice(100));
  }, [list.length]);

  return (
    <>
      <Banner />
      <Products products={list} quantity={10} title={"Trands"} />
      <CategoriesSection />
      <Poster />
      <Products products={filtered} quantity={5} title={"Less than 100$"} />
    </>
  );
};

export default Home;
