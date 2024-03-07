import { urlImage } from "../../utils/urlImage";
import styles from "../../styles/CategoriesSection.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CategoriesSection = () => {
  const { list } = useSelector((state) => state.categories);
  const listCategpories = list.filter((_, id) => id < 5);
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Worts seeing</h2>
      <div className={styles.list}>
        {listCategpories.length ? (
          listCategpories.map(({ id, name, image }) => {
            return (
              <Link
                to={`/categories/${id}`}
                key={id}
                className={styles.category}
              >
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: urlImage(image),
                  }}
                />
                <h3 className={styles.categoryTitle}>{name}</h3>
              </Link>
            );
          })
        ) : (
          <>Loading</>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
