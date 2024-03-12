import { Link } from "react-router-dom";
import { srcImage } from "../../utils/urlImage";
import { discountPrice } from "../../utils/discountPrice";
import { randomInRange } from "../../utils/randomInRange";
import styles from "../../styles/Products.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/favorites/favoritesSlice";

const ProductCard = ({ id, title, images, category, price }) => {
  const { favorites } = useSelector((state) => state.favorites);
  const findInFavorites = favorites.find((item) => item.id === id);
  const dispatch = useDispatch();
  const handleFavorites = (e) => {
    e.preventDefault();
    dispatch(addToFavorites({ id, title, images, category, price }));
  };

  return (
    <Link to={`/products/${id}`} className={styles.card} key={id}>
      <img className={styles.image} src={srcImage(images[0])} alt={title} />
      <h3 className={styles["title-card"]}>{title}</h3>
      <span className={styles["category-card"]}>{category.name}</span>
      <div className={styles.info}>
        <div className={styles.price}>
          <span className={styles.newPrice}>{price}$</span>
          <span className={styles.oldPrice}>{discountPrice(20, price)}$</span>
        </div>
        <span className={styles.count}>{randomInRange(2, 25)}</span>
      </div>
      <div className={styles.favoriteIcon} onClick={handleFavorites}>
        {findInFavorites ? (
          <svg className={styles.icon}>
            <use xlinkHref={`/sprite.svg#isFavorite`} />
          </svg>
        ) : (
          <svg className={styles.icon}>
            <use xlinkHref={`/sprite.svg#notFavorite`} />
          </svg>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
