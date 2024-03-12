import styles from "../../styles/Products.module.scss";
import SkeletonCard from "../Skeleton/Card/SkeletonCard";

import ProductCard from "./ProductCard";
const Products = ({ title, products = [], quantity = 5 }) => {
  const list = products.filter((_, id) => id < quantity);


  return (
    <section className={styles.products}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
        {list.length
          ? list.map((product) => <ProductCard key={product.id}  {...product}/>)
          : [...Array(5)].map((_, id) => {
              return <SkeletonCard key={id} />;
            })}
      </div>
    </section>
  );
};

export default Products;
