import styles from "../../styles/Products.module.scss";
import { Link } from "react-router-dom";

const Products = ({ title, list, quantity }) => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
        {[...Array(5)].map((_, id) => {
          return (
            <Link to="/" className={styles.card} key={id}>
              <img
                className={styles.image}
                src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
              />
              <h3 className={styles['title-card']}>Title of item</h3>
              <span className={styles['category-card']}>Category</span>
              <div className={styles.info}>
                <div className={styles.price}>
                  <span className={styles.newPrice}>50$</span>
                  <span className={styles.oldPrice}>40$</span>
                </div>
                <span className={styles.count}>14</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
