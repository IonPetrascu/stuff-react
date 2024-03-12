import Banner from "../Banner/Banner";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import { useState } from "react";
import styles from "../../styles/Favorites.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);
  const [quantity, setQuantity] = useState(10);

  const handleButton = () => {
    setQuantity((prev) => prev + 10);
  };
  return (
    <>
      <Banner />
      {favorites.length > 0 ? (
        <Products
          products={favorites}
          quantity={quantity}
          title={"Favorites"}
        />
      ) : (
        <section className={styles.empty}>
          <Link to={ROUTES.HOME}>
            <button>Return to store</button>
          </Link>
          <h2>Favorites empty</h2>
        </section>
      )}

      {quantity < favorites.length && (
        <button onClick={handleButton}>See more</button>
      )}
    </>
  );
};

export default Favorites;
