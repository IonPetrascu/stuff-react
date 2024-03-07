import { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(10);
  const { list } = useSelector((state) => state.products);
  const { id } = useParams();
  
 
  useEffect(() => {
    if (!id) return;

    const a = list.filter((el) => el.category.id === +id);

    setCategoryList(a);
  }, [id, list]);

  const handleButton = () => {
    if (quantityProducts < list.length) {
      setQuantityProducts((prev) => prev + 10);
    }
  };

  return (
    <>
      <Banner />
      <Products
        title="category name"
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
