import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/products/singleProduct";
import { useEffect, useState } from "react";
import Product from "./Product";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(5);
  const { product } = useSelector((state) => state.product);
  const { list } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getSingleProduct(id));
  }, [id]);

  useEffect(() => {
    if (!product) {
      navigate(ROUTES.HOME);
    }
    setSingleProduct(product);
    if (list) {
      const similar = list.filter(
        (item) => item.category.id === singleProduct.category?.id
      );
      setSimilarProducts(similar);
    }
  }, [product]);

  const handleProducts = () => {
    if (quantityProducts < similarProducts.length) {
      setQuantityProducts((prev) => prev + 10);
    }
  };
  return (
    <>
      <Product {...singleProduct} />
      <Products
        products={similarProducts}
        title={"Similar"}
        quantity={quantityProducts}
      />
      {quantityProducts < similarProducts.length && (
        <button style={{ margin: "0 auto" }} onClick={handleProducts}>
          See more
        </button>
      )}
    </>
  );
};

export default ProductPage;
