import { urlImage } from "../../utils/urlImage";
import styles from "../../styles/CategoriesSection.module.scss";

const CategoriesSection = () => {
  return ( 
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Worts seeing</h2>
      <div className={styles.list}>
        <div className={styles.category}>
          <div
            className={styles.image}
            style={{
              backgroundImage:urlImage(
                "[https://i.imgur.com/QkIa5tT.jpeg]"
              ),
            }}
          />
          <h3 className={styles.categoryTitle}>Glothes</h3>
        </div>
        <div className={styles.category}>
          <div
            className={styles.image}
            style={{
              backgroundImage:urlImage(
                "[https://i.imgur.com/QkIa5tT.jpeg]"
              ),
            }}
          />
          <h3 className={styles.categoryTitle}>Glothes</h3>
        </div>
        <div className={styles.category}>
          <div
            className={styles.image}
            style={{
              backgroundImage:urlImage(
                "[https://i.imgur.com/QkIa5tT.jpeg]"
              ),
            }}
          />
          <h3 className={styles.categoryTitle}>Glothes</h3>
        </div>
        <div className={styles.category}>
          <div
            className={styles.image}
            style={{
              backgroundImage:urlImage(
                "[https://i.imgur.com/QkIa5tT.jpeg]"
              ),
            }}
          />
          <h3 className={styles.categoryTitle}>Glothes</h3>
        </div>
        <div className={styles.category}>
          <div
            className={styles.image}
            style={{
              backgroundImage:urlImage(
                "[https://i.imgur.com/QkIa5tT.jpeg]"
              ),
            }}
          />
          <h3 className={styles.categoryTitle}>Glothes</h3>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;