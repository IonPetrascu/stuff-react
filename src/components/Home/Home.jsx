import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Poster from "../Poster/Poster";
import CategoriesSection from "../Categories/CategoriesSection";
import { useSelector } from "react-redux";
const Home = () => {
  const { list } = useSelector((state) => state.products);
  return (
    <>
      <Banner />
      <Products products={list} quantity={10} title={"Trands"} />
      <CategoriesSection />
      <Poster />
    </>
  );
};

export default Home;
