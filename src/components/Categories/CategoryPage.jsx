import { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActiveCategory } from "../../utils/getActiveCategory";
import styles from "../../styles/CategoriesSection.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { builUrl } from "../../utils/buildUrl";
import { getFilteredCategory } from "../../redux/products/productsSlice";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(10);
  const [activeCat, setActiveCat] = useState();
  const { list, filteredCategory } = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const { id } = useParams();
  const form = useForm();
  const dispatch = useDispatch();
  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    let isEmpty = true;
    const values = Object.values(data);

    values.forEach((value) => {
      if (value !== "") {
        isEmpty = false;
      }
    });

    if (isEmpty) {
      return;
    }
    dispatch(getFilteredCategory(builUrl(data, id, quantityProducts)));
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.filter}
        style={{ width: "100%" }}
      >
        <label className={styles.label} htmlFor="price_min"></label>
        <input
          placeholder="Price from"
          type="number"
          id="price_min"
          name="price_min"
          {...register("price_min")}
        />
        <label className={styles.label} htmlFor="price_max"></label>
        <input
          placeholder="Price to"
          type="number"
          id="price_max"
          name="price_max"
          {...register("price_max")}
        />
        <button>Apply filters</button>
      </form>
      {filteredCategory?.length > 0 ? (
        <>
          <Products
            title={activeCat}
            products={filteredCategory}
            quantity={quantityProducts}
          />
          {quantityProducts < filteredCategory.length && (
            <button style={{ margin: "0 auto" }} onClick={handleButton}>
              See more
            </button>
          )}
        </>
      ) : (
        <>
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
      )}
    </>
  );
};

export default CategoryPage;

