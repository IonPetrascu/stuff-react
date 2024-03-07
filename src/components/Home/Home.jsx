import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Poster from "../Poster/Poster";
import CategoriesSection from "../Categories/CategoriesSection";

const Home = () => {
  return (
    <>
      <Banner />
      <Products title={"Trands"} />
      <CategoriesSection />
      <Poster />
    </>
  );
};

export default Home;
