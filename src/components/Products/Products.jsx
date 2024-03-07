import styles from "../../styles/Products.module.scss";
import { Link } from "react-router-dom";
import { srcImage } from "../../utils/urlImage";
import { discountPrice } from "../../utils/discountPrice";
import SkeletonCard from "../Skeleton/Card/SkeletonCard";
import { randomInRange } from "../../utils/randomInRange";

const Products = ({ title, products = [], quantity = 5 }) => {
  const list = products.filter((_, id) => id < quantity);
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
        {list.length
          ? list.map(({ id, title, images, category, price }) => {
              return (
                <Link to={`/products/${id}`} className={styles.card} key={id}>
                  <img
                    className={styles.image}
                    src={srcImage(images[0])}
                    alt={title}
                  />
                  <h3 className={styles["title-card"]}>{title}</h3>
                  <span className={styles["category-card"]}>
                    {category.name}
                  </span>
                  <div className={styles.info}>
                    <div className={styles.price}>
                      <span className={styles.newPrice}>{price}$</span>
                      <span className={styles.oldPrice}>
                        {discountPrice(20, price)}$
                      </span>
                    </div>
                    <span className={styles.count}>{randomInRange(2, 25)}</span>
                  </div>
                </Link>
              );
            })
          : [...Array(5)].map((_, id) => {
              return <SkeletonCard key={id} />;
            })}
      </div>
    </section>
  );
};

export default Products;
