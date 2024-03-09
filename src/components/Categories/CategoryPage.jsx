import { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActiveCategory } from "../../utils/getActiveCategory";
import styles from "../../styles/CategoriesSection.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(10);
  const [activeCat, setActiveCat] = useState();

  const { list } = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const categoriesList = list.filter((el) => el.category.id === +id);

    setActiveCat(getActiveCategory(categories, id));

    setCategoryList(categoriesList);
  }, [id, list]);

  const handleButton = () => {
    if (quantityProducts < list.length) {
      setQuantityProducts((prev) => prev + 10);
    }
  };
  if (!categoryList.length) {
    return (
      <>
        <Banner />
        <section className={styles.noResults}>
          <Link to={ROUTES.HOME}>
            <button>Return to store</button>
          </Link>
          No results
        </section>
      </>
    );
  }

  return (
    <>
      <Banner />
      <Products
        title={activeCat}
        products={categoryList}
        quantity={quantityProducts}
      />
      {quantityProducts < categoryList.length && (
        <button style={{ margin: "0 auto" }} onClick={handleButton}>
          See more
        </button>
      )}
    </>
  );
};

export default CategoryPage;
